
## Language DPas ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.44 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-dpas-219.html
---

```{ DPas version of 99 Bottles of beer (Bottles.pas)               }
{ See (http://www.geocities.com/SiliconValley/Bay/9159/dpas.html }
{ Philipp Winterberg, http://www.winterbergs.de                  }

program Bottles;
uses crt32;
var b: byte = 99;
begin
  while b > 0 do
    begin
      writeln(b, ' bottle(s) of beer on the wall, ');
      writeln(b, ' bottle(s) of beer.');
      writeln('Take one down, pass it around,'); dec(b);
      writeln(b, ' bottle(s) of beer on the wall.');
      writeln(' ');
    end;
end.```