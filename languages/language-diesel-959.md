
## Language Diesel ##
---
- Author: ?
- Date: 11/24/05
- Info: http
- Score:  (2.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-diesel-959.html
---

```{ Diesel version of 99 Bottles of beer }
program BottlesOfBeer;
var
  bottles: integer;


procedure write_int(val : integer);
const
    ASCII0 = 48;                { ascii value of '0' }
    MINUS = 45;
var
    c : integer;
    buf : array[10] of integer; { enough for 10 digits }
    bufp : integer;
begin
    if (val = 0) then
	write(ASCII0);
	return;
    end;
    if (val < 0) then
	write(MINUS);
        val := -val;
    end;
    bufp := 0;
    while val > 0 do
    	c := val mod 10;
	buf[bufp] := c + ASCII0;
	bufp := bufp + 1;
	val := val div 10;
    end;
    while (bufp > 0) do 
	bufp := bufp - 1;
    	write(buf[bufp]);
    end;
end;

procedure write_bottles_of_beer( bottles : integer; on_the_wall : integer);
begin
	if(bottles = 0) then
	    write(110);
	    write(111);
	    write(32);
	    write(109);
	    write(111);
	    write(114);
	    write(101);
	else 
	    write_int(bottles);
	end;
	write(32 );
	write(98 );
	write(111);
	write(116);
	write(116);
	write(108);
	write(101);
	if(bottles <> 1) then
		write(115);
	end;
	write(32 );
	write(111);
	write(102);
	write(32 );
	write(98 );
	write(101);
	write(101);
	write(114);
	if(on_the_wall = 1) then
		write(32);
		write(111);
		write(110);
		write(32 );
		write(116);
		write(104);
		write(101);
		write(32);
		write(119);
		write(97 );
		write(108);
		write(108);
	end;

end;

procedure write_take_one_down;
begin
	write(84 );
	write(97 );
	write(107);
	write(101);
	write(32 );
	write(111);
	write(110);
	write(101);
	write(32 );
	write(100);
	write(111);
	write(119);
	write(110);
	write(44);
	write(32 );
	write(112);
	write(97 );
	write(115);
	write(115);
	write(32 );
	write(105);
	write(116);
	write(32 );
	write(97 );
	write(114);
	write(111);
	write(117);
	write(110);
	write(100);
	write(44 );
	write(32 );
end;

begin
  bottles := 99;
  while (bottles > 0) do
    write_bottles_of_beer(bottles, 1);
    write(44);
    write(32);
    write_bottles_of_beer(bottles, 0);
    write(46);
    write(10);
    write_take_one_down();
    bottles := bottles-1;
    write_bottles_of_beer(bottles, 1);
    write(46);
    write(10);
    write(10);
  end;
end.```