
## Language Gensym G2 ##
---
- Author: Shaun J
- Date: 06/17/10
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gensym-g2-2425.html
---

```99-bottles-of-beer.net_Gensym.G2.code (EVENT: symbol)

{--- requires class-definitions:
(1) 
  class-name: beer-bottle; 
  direct-superior-classes: object; 
  icon-description:
width 30; height 80;
gray:
    filled rectangle (12, 5) (19, 22);
    filled rectangle (0, 38) (30, 80);
    filled polygon (19, 22) (30, 38) (0, 38) (12, 22);
    filled rectangle (21, 5) (10, 0);
extra-light-gray:
    filled rectangle (10, 0) (11, 5);
    filled rectangle (12, 5) (13, 22);
    filled rectangle (0, 38) (1, 80);
light-gray:
    filled rectangle (0, 53) (30, 67);
    filled polygon (13, 22) (3, 38) (0, 38);
black:
    outline (12, 5) (12, 22) (19, 22) (19, 5);
    outline (0, 38) (0, 80) (30, 80) (30, 38);
    outline (19, 22) (30, 38) (0, 38) (12, 22);
    outline (21, 5) (21, 0) (10, 0) (10, 5);
black:
    text  "Beer" 
 at  (0, 65) in  small 

(2) 
  class-name: wall;
  direct-superior-classes: kb-workspace 
}

{--- Local variables}
EN: text = "
";
I, N: integer;
X: integer = 0;
Y: integer = 0;
B, B2, BREF: class beer-bottle;
W: class wall;
L: class item-list;
AB, BFT: class item;

{--- Main}
begin
  case (EVENT) of 
    go-to-store: begin
        {--- G2 Server Settings}
        change the text of the minimum-scheduling-interval of timing-parameters to "0.1 seconds";
        {--- Continue}
        go to BUY-SOME-MORE;
      end;
    lyrics: go to LYRICS; 
  end;
  
  BUY-SOME-MORE:
      {---post 2nd last line of Lyric}
      post "No more bottles of beer on the wall, no more bottles of beer.";
      {--- Garbage collection}
      for W = each wall do
        delete W without permanence checks;
        allow other processing;
      end;
      {--- build wall object and add 99 beer-bottles objects on wall}
      create a wall W;
      for I = 1 to 99 do
        allow other processing;
        create a beer-bottle B;
        if I = 1 then
          transfer B to W at (X, Y)
        else begin 
          create an item-list L;
          Y = the maximum over each beer-bottle B2 of (the item-y-position of B2);
          for B2 = each beer-bottle upon W do
            if the item-y-position of B2 = Y then 
              insert B2 at the end of L;
          end;
          for B2 = each beer-bottle in L do
            X = max (X, the item-x-position of B2 + the item-width of B);
          end;
          if X >= 10 * the item-width of B then begin
            Y = Y + the item-height of B; 
            X = 0;   
          end;
          transfer B to W at (X, Y);
          change the size of W to minimum;
          show W at the center of the screen;
        end
      end;
      create an action-button AB;
      transfer AB to W at (the maximum over each item I1 upon W of (the item-x-position of I1) / 2,
the maximum over each item I2 of (the item-y-position of I2) + the item-height of AB * 2);
      change the text of the action of AB to "start [the name of this procedure] (the symbol
LYRICS)";
      change the text of the label of AB to "@"Start Lyrics@"";
      create a borderless-free-text BFT;
      transfer BFT to W at (the maximum over each item I1 upon W of (the item-x-position of I1) ,
the item-y-position of AB);
      change the text of BFT to "[the count of each beer-bottle upon W]";
      {---post last line of Lyric and show new wall with 99 bottles of beer on the wall} 
      post "Go to the store and buy some more, [the count of each beer-bottle upon W] bottles of
beer on the wall.";
    return;

  LYRICS:
      if there exists a wall W then begin
        repeat
          allow other processing;
          exit if not (there exists a beer-bottle B upon W);
          N = the count of each beer-bottle upon W;
          {--- Sing merrily}
          if N /= 0 then begin
            post "[EN][(if N > 1 then "[N] bottles" else "[N] bottle")] of beer on the wall, [(if N
> 1 then "[N] bottles" else "[N] bottle")] of beer.";
            delete B without permanence checks;
            if the borderless-free-text BFT upon W exists then
              change the text of BFT to "[the count of each beer-bottle upon W]"; 
            post "[EN]Take one down and pass it around, [(if N - 1 /= 0 then "[(if N - 1 > 1 then
"[N - 1] bottles" else "[N - 1] bottle")]" else "no more bottles")] of beer on the wall.";
          end;
          wait for 0.1 seconds;       
        end;
    end;
  {--- Go to the store and buy some more}
  start this procedure (the symbol GO-TO-STORE);
end```