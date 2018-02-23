
## Language Prostscript (printable) ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-prostscript-(printable)-558.html
---

```    %!PS
     
     % The 99 bottles of beer song in PostScript. This file
     % can be sent to a PostScript printer (it'll be about
     % eight pages or so...)
     
     % Stuart Morris
     
     % ------------- Variables & Procedures ------------
     
     /LM 72 def           % left margin
     /ypos 720 def        % initial top position
     /BM 72 def           % bottom margin
     /lineheight 18 def   % height of a line of text
     
     % starts a new line
     
     /crlf
     {
       ypos lineheight sub
       /ypos exch def
       LM ypos moveto
         
     } def
     
     % starts a new page if current one is full
     
     /newpage? 
     {
       ypos BM lt
       {
         showpage
         /ypos 720 def
         LM ypos moveto
     
       } if
     
     } def
     
     % returns the correct syntax of the bottle
     % string ("bottle" if one, "bottles" otherwise)
     
     /bottlestring  % stack: number of bottles
     {
       1 eq
       {
         ( bottle of beer)
       }
       {
         ( bottles of beer)
     
       } ifelse
     
     } def
     
     % ------------- Main Program ----------------
     
     LM ypos moveto
     
     /Times-Roman findfont 
       lineheight 2 sub scalefont 
       setfont
     
     99 -1 1
     {
       /numbottles 2 string def
       dup numbottles cvs show
       
       dup bottlestring show ( on the wall, ) show
       numbottles show dup bottlestring show (,) show
       crlf
     
       (Take one down, pass it around, ) show
       1 sub dup numbottles cvs show
       
       bottlestring show ( on the wall.) show
       crlf crlf
       newpage?
     
     } for
     
     showpage```