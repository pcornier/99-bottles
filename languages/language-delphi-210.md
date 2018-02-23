
## Language Delphi ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (1.70 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-delphi-210.html
---

```// *short* Delphi version of 99 Bottles of beer (Bottles.dpr)
// Philipp Winterberg, http://www.winterbergs.de
program Bottles;
uses windows, sysutils;
var b: integer;
begin
  for b:= 99 downto 1 do
   if MessageBox(0, Pchar(IntToStr(b) + ' bottle(s) of beer on the wall, ' + #13#10 +
                          IntToStr(b) + ' bottle(s) of beer.' + #13#10#13#10 +
                          'Take one down, pass it around,' + #13#10 +
                          IntToStr(b-1) + ' bottle(s) of beer on the wall.' + #13#10),
                    PChar('99 Bottles of Beer'), 65) = 2
     then exit
end.```