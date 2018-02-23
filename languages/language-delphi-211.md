
## Language Delphi ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.85 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-delphi-211.html
---

```program BeerSong;
{$APPTYPE CONSOLE}
uses
  SysUtils;
var
  b :integer;
begin
   WriteLn( Format('%d bottles of beer on the wall', [99]));
   WriteLn( Format('%d bottles of beer', [99]));
   WriteLn( 'You take one down and pass it around');
   for b := 98 downto 2 do
      begin
      WriteLn( Format('%d bottles of beer on the wall.', [b]));
      WriteLn('');
      WriteLn( Format('%d bottles of beer on the wall', [b]));
      WriteLn( Format('%d bottles of beer', [b]));
      WriteLn( 'You take one down and pass it around');
      end;
   b := 1;
   WriteLn( Format('%d bottle of beer on the wall', [b]));
   WriteLn('');
   WriteLn( Format('%d bottle of beer', [b]));
   WriteLn( 'You take one down and pass it around');
   WriteLn( 'No bottles of beer on the wall!');
end.```