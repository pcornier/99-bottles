
## Language Blaster Master Pascal ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.35 in 20 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-blaster-master-pascal-92.html
---

```// Blaster Master Pascal version of 99 Bottles of beer (Bottles.pas)
// See http://www.programmersheaven.com/zone24/cat351/16888.htm
// Philipp Winterberg, http://www.winterbergs.de

entity x; .float b; Function Spawn (): entity; #2; 
Procedure WriteLn (...); #254;

Procedure Bottles ();
Begin
  local entity h; h:= Spawn (); x:= h; x.b:= 99;
  While (x.b > 0) Do
    Begin
      WriteLn('%f bottle(s) of beer on the wall,', x.b);
      WriteLn('%f bottle(s) of beer.', x.b);
      WriteLn('Take one down, pass it around,');
      x.b:= x.b - 1;
      WriteLn('%f bottle(s) of beer on the wall.\n', x.b);
    End;
End;```