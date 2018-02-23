
## Language PostScript ##
---
- Author: Tadziu Hoffmann
- Date: 08/30/08
- Info: http
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-postscript-1859.html
---

```%!PS-Adobe-0.0
%
% ``99 Bottles of Beer'' in PostScript. Demonstrates use of procedures,
% arrays, and stack manipulation.  Multi-page printout (A4 and letter).
% Tadziu Hoffmann (hoffmann\100usm\56lmu\56de)

/Helvetica findfont 15 scalefont setfont
/lineskip -18 def /leftmargin 70 def /pagetop 720 def /pagebottom 50 def
/newline
{ lineskip mul currentpoint exch pop add dup pagebottom lt
  { pop showpage leftmargin pagetop moveto }
  { leftmargin exch moveto }
  ifelse }
def
/min { 2 copy gt { exch } if pop } def
/buffer 8 string def
/bottles { dup 2 min vocabulary exch get exec } def
/vocabulary
[ { pop (Hello world!) ( bottles) (no more) (No more) }
  { pop (it) ( bottle) (one) (One) }
  { (one) ( bottles) 3 2 roll buffer cvs dup } ]
def
/stanza
{ dup bottles show 1 index show ( of beer on the wall, ) show
  show show ( of beer.) show 1 newline
  (  Take ) show show ( down and pass it around, ) show
  1 sub bottles pop show show pop ( of beer on the wall.) show 1.2 newline }
def
/buymore
{ (No more bottles of beer on the wall, ) show
  (no more bottles of beer.) show 1 newline
  (  Go to the store and buy some more, ) show
  bottles pop show show pop ( of beer on the wall.) show 1.2 newline }
def
/beersong { dup -1 1 { stanza } for buymore showpage } def
leftmargin pagetop moveto 99 beersong```