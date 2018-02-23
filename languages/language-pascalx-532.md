
## Language PascalX ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.85 in 13 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-pascalx-532.html
---

```{ PascalX [Portuguese] version of 99 Bottles of beer (Bottles.pas) }
{ See http://www.readyideas.com/pascalx.htm                        }
{ Philipp Winterberg, http://www.winterbergs.de                    }

PROGRAMA Bottles; 
VAR b: BIGINT; a, c: STRING[20];
INICIO
  a:= ' bottle(s) of beer'; c:= ' on the wall';  
  PARA b:=99 PARAMENOS 1 FACA
    GRAVELN(b, a, c, ', '+chr(13)+chr(10), b, a, '.'+
    chr(13)+chr(10)+'Take one down, pass it around,'+
    chr(13)+chr(10),(b-1),a,c,'.'+chr(13)+chr(10))
FIM.```