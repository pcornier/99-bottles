
## Language PascalX ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.58 in 12 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-pascalx-531.html
---

```{ PascalX [English] version of 99 Bottles of beer (Bottles.pas) }
{ See http://www.readyideas.com/pascalx.htm for more infos      }
{ Philipp Winterberg, http://www.winterbergs.de                 }

program Bottles; var b: bigint; a, c: string[20];
begin
  a:= ' bottle(s) of beer'; c:= ' on the wall';  
  for b:=99 downto 1 do 
    writeln(b, a, c, ', '+chr(13)+chr(10), b, a, '.'+
    chr(13)+chr(10)+'Take one down, pass it around,'+
    chr(13)+chr(10),(b-1),a,c,'.'+chr(13)+chr(10))
end.```