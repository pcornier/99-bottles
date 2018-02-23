
## Language Turbo Pascal ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.82 in 17 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-turbo-pascal-470.html
---

```{ Turbo Pascal for Windows version of 99 Bottles of beer (Bottles.pas) }
{ Philipp Winterberg, http://www.winterbergs.de }

program Bottles;

uses wincrt;
var b: byte;

function plural(anz_flaschen: byte): string;
begin
  if anz_flaschen <> 1
    then plural:= 's'
    else plural:= ''
end; {plural}

begin
  screensize.y:= 1 + 99 * 5;
  inactivetitle:= ' 99 Bottles of beer ';
  initwincrt;
  for b:=99 downto 1 do
    begin
      writeln(b :2, ' bottle' + plural(b) + ' of beer on the wall, ');
      writeln(b :2, ' bottle' + plural(b) + ' of beer.');
      writeln('Take one down, pass it around,');
      writeln((b-1) :2, ' bottle' + plural(b-1) + ' of beer on the wall.');
      writeln
    end
end. {Bottles}```