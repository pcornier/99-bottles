
## Language PostScript ##
---
- Author: Volker Beyler
- Date: 04/25/06
- Info: http
- Score:  (2.95 in 22 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-postscript-1135.html
---

```%!
% 99 Bottles Of Beer On The Wall...
% prints out the complete song on any postscript-able device,
% as well as in GhostScript etc.

/Helvetica findfont   % choose a font, I prefer Helvetica
6 scalefont           % scale font to 6 pt, one page is enough...
setfont

/str 3 string def
/bottles 99 def

99 -1 0
{
   99 bottles 8 mul 20 add moveto
   
   bottles 0 gt
      {
         bottles str cvs show
         bottles 1 gt 
            {( bottles of beer on the wall, ) show}
            {( bottle of beer on the wall, ) show}
         ifelse
         bottles str cvs show
         bottles 1 gt 
            {( bottles of beer. ) show}
            {( bottle of beer. ) show}
         ifelse
         (Take one down and pass it around, ) show
         /bottles bottles 1 sub def
      }
      {
         (No more bottles of beer on the wall, no more bottles of beer. ) show
         (Go to the store and buy some more, ) show
         /bottles bottles 99 add def   
         % "/bottles 99 def" would be sufficient,
         % but I wanted to "buy" some beer...
      }
   ifelse
   bottles 0 gt
      {
         bottles str cvs show
         bottles 1 gt 
            {( bottles of beer on the wall.) show}
            {( bottle of beer on the wall.) show}
         ifelse
      }
      {
         (no more bottles of beer on the wall.) show
      }
   ifelse
}
for

showpage```