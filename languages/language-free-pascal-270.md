
## Language Free Pascal ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.41 in 32 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-free-pascal-270.html
---

```(* Free Pascal version of 99 Bottles of beer (Bottles.pp) *)
(* See http://www.freepascal.org/                         *)
(* Philipp Winterberg, http://www.winterbergs.de          *)

program Bottles;
var b: byte;

begin
  b:= 99;
  while b > 0 do
    begin
      writeln(b, ' bottle(s) of beer on the wall, ');
      writeln(b, ' bottle(s) of beer.');
      writeln('Take one down, pass it around,'); dec(b);
      writeln(b, ' bottle(s) of beer on the wall.' + #13#10)
    end
end.```