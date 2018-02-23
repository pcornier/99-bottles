
## Language verilog ##
---
- Author: T
- Date: 09/14/06
- Info: http
- Score:  (2.85 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-verilog-1270.html
---

```/* 99 bottles of beer
 *
 * Inputs:  clock
 *          reset
 *
 * Outputs: ascii_out - one character per clock cycle
 *          done      - assert after last character sent
 *
 * Implemented in synthesizable verilog plus some test bench
 * code. I tested this with vbs verilog simulator. The output
 * matches one of the perl versions which I used as a
 * reference design.
 *
 * I plan to run this through physical synthesis to see what
 * timing looks like. On a 65 nm library, I'm expecting over
 * 1 GHz clock rate or 10 MB/s (million beers per second).
 *
 */


module test_bench;
wire [7:0] ascii_out;
wire       done;
reg        reset;
reg        clock;

bottles bottles99(ascii_out, done, reset, clock);

always@(clock)
  clock <= #5 ~clock;

always@(posedge clock)
  if(!reset && !done)
    $write("%s",ascii_out);

always@(done)
  if(done)
    $finish;

initial
begin
  clock = 1;
  reset = 1;
  #1;
  #10;
  reset = 0;
  #1000000;
  $finish; // Never reached.
end

endmodule


module bottles(ascii_out, done, reset, clock);
output [7:0] ascii_out;
output       done;
input        reset;
input        clock;

wire  [15:0] beer_count; // 2 digits of ascii.
wire         take_one_down;
wire   [6:0] index;

beer_counter beer_counter1(beer_count, take_one_down, reset, clock);

get_char get_char1(ascii_out, index, beer_count, done, reset);

beer_machine beer_sm1(index, done, take_one_down, beer_count, reset, clock);

endmodule


module beer_counter(beer_count, take_one_down, reset, clock);
output [15:0] beer_count; // 2 digits of ascii.
input         take_one_down;
input         reset;
input         clock;

reg    [15:0] beer_count;

always@(posedge clock)
begin
  if(reset)
    beer_count = "99";
  else
  begin
    if(take_one_down)
    begin
      if(beer_count == "01")
        beer_count = "No";
      else
      begin
        if(beer_count[15:8] == "0")
        begin
          beer_count[15:8] = "9";
          beer_count[ 7:0] = beer_count[ 7:0] - 1;
        end
        else
          beer_count[15:8] = beer_count[15:8] - 1;
      end
    end
  end
end

endmodule


module get_char(ascii_out, index, beer_count, done, reset);
output   [7:0] ascii_out;
input    [6:0] index;
input   [15:0] beer_count; // 2 digits of ascii.
input          done;
input          reset;

parameter NEWLINE = 8'h0a;

wire  [1023:0] message;
assign message[  15:   0] = beer_count;
assign message[ 247:  16] = " bottles of beer on the wall,";
assign message[ 255: 248] = NEWLINE;
assign message[ 271: 256] = beer_count;
assign message[ 407: 272] = " bottles of beer,";
assign message[ 415: 408] = NEWLINE;
assign message[ 655: 416] = "Take one down, pass it around,";
assign message[ 663: 656] = NEWLINE;
assign message[ 679: 664] = beer_count;
assign message[ 911: 680] = " bottles of beer on the wall.";
assign message[ 919: 912] = NEWLINE;
assign message[ 927: 920] = NEWLINE;

wire  [511:0] msg_l1;
wire  [255:0] msg_l2;
wire  [127:0] msg_l3;
wire   [63:0] msg_l4;
wire   [31:0] msg_l5;
wire   [15:0] msg_l6;
wire    [7:0] msg_l7;

mux2 #(512) m1(msg_l1[511:0], index[6], message[1023:512], message[511:0]);
mux2 #(256) m2(msg_l2[255:0], index[5],  msg_l1[ 511:256],  msg_l1[255:0]);
mux2 #(128) m3(msg_l3[127:0], index[4],  msg_l2[ 255:128],  msg_l2[127:0]);
mux2 #( 64) m4(msg_l4[ 63:0], index[3],  msg_l3[ 127: 64],  msg_l3[ 63:0]);
mux2 #( 32) m5(msg_l5[ 31:0], index[2],  msg_l4[  63: 32],  msg_l4[ 31:0]);
mux2 #( 16) m6(msg_l6[ 15:0], index[1],  msg_l5[  31: 16],  msg_l5[ 15:0]);
mux2 #(  8) m7(msg_l7[  7:0], index[0],  msg_l6[  15:  8],  msg_l6[  7:0]);

always@(msg_l7 or done or reset)
  if(reset || done)
    ascii_out = 8'h00;
  else
    ascii_out = msg_l7;

endmodule


module mux2 (o, sel, i1, i0);
parameter width = 1;
output [width-1:0] o;
input              sel;
input  [width-1:0] i1;
input  [width-1:0] i0;

wire   [width-1:0] o;
assign o = ({width{sel}} & i1) | ({width{~sel}} & i0);
endmodule


module beer_machine(
           index, done, take_one_down, beer_count, reset, clock);
output  [6:0] index;
output        done;
output        take_one_down;
input  [15:0] beer_count; // 2 digits of ascii.
input         reset;
input         clock;

parameter FIRST_CHAR         = 7'h00,
          FIRST_CHAR_NO_TENS = 7'h01,
          SKIP_TENS_A        = 7'd31,
          SKIP_TENS_B        = 7'd82,
          SKIP_PLURAL_A      = 7'd08,
          SKIP_PLURAL_B      = 7'd40,
          SKIP_PLURAL_C      = 7'd91,
          TAKE_ONE_DOWN      = 7'd52,
          LAST_CHAR          = 7'd115;

reg  [6:0] current_state;
reg  [6:0] next_state;
reg done;
reg take_one_down;
wire [6:0] index = current_state;

always@(posedge clock)
  if(reset)
    current_state <= 0;
  else
    current_state <= next_state;

always@(current_state or beer_count or reset)
begin
  next_state    = current_state + 1;
  done          = 1'b0;
  take_one_down = 1'b0;

  case(current_state)
    LAST_CHAR: begin
        if(beer_count == "No") begin
          next_state = LAST_CHAR;
          done       = 1'b1;
        end
        else
          if(beer_count[7:0] == "0")
            next_state = FIRST_CHAR_NO_TENS;
          else
            next_state = FIRST_CHAR;
      end
    TAKE_ONE_DOWN: begin
        take_one_down = 1'b1;
      end
    SKIP_TENS_A: begin
        if(beer_count[7:0] == "0")
           next_state = SKIP_TENS_A + 2;
      end
    SKIP_TENS_B: begin
        if(beer_count[7:0] == "0")
           next_state = SKIP_TENS_B + 2;
      end
    SKIP_PLURAL_A: begin
        if(beer_count == "01")
          next_state = SKIP_PLURAL_A + 2;
      end
    SKIP_PLURAL_B: begin
        if(beer_count == "01")
          next_state = SKIP_PLURAL_B + 2;
      end
    SKIP_PLURAL_C: begin
        if(beer_count == "01")
          next_state = SKIP_PLURAL_C + 2;
      end
  endcase
end

endmodule```