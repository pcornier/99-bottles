
## Language Delphi ##
---
- Author: Juan Carlos Molinos
- Date: 01/12/06
- Info: n/a
- Score:  (2.97 in 35 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-delphi-1018.html
---

```program bot99;

{$APPTYPE CONSOLE}

uses
  SysUtils;

procedure Sing(bot:integer);
begin
 Writeln('');
 case bot of
  0: begin
    Writeln('No more bottles of beer on the wall, no more bottles of beer.');
    Writeln('Go to the store and buy some more, '
      +'99 bottles of beer on the wall.');
   end;
  1: begin
    Writeln('1 bottle of beer on the wall, 1 bottle of beer.');
    Writeln('Take one down and pass it around, '
      +'no more bottles of beer on the wall.');
    Sing(bot-1);
   end;
  else
   begin
    Writeln(inttostr(bot)+' bottles of beer on the wall, '
      +inttostr(bot)+' bottles of beer.');
    Writeln('Take one down and pass it around, '+inttostr(bot-1)
      +' bottle of beer on the wall.');
    Sing(bot-1);
   end;
 end;
end;

begin
  Sing(99);
end.```