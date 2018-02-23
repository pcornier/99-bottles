
## Language Turbo Pascal ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.62 in 13 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-turbo-pascal-471.html
---

```{ Turbo Pascal version of 99 Bottles of beer (Bottles.pas) }
{ Philipp Winterberg, http://www.winterbergs.de }

program Bottles;

var b: byte;

function plural(anz_flaschen: byte): string;
begin
  if anz_flaschen <> 1
    then plural:= 's'
    else plural:= ''
end; {plural}

begin
  b:= 99;
  repeat
    writeln(b, ' bottle' + plural(b) + ' of beer on the wall, ');
    writeln(b, ' bottle' + plural(b) + ' of beer.');
    writeln('Take one down, pass it around,');
    writeln((b-1), ' bottle' + plural(b-1) + ' of beer on the wall.');
    dec(b)
  until b = 0;
  readln;
end. {Bottles}```