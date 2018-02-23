
## Language Gri ##
---
- Author: Stuart Prescott
- Date: 04/20/05
- Info: http
- Score:  (4.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gri-295.html
---

```#!/usr/local/bin/gri
#
# 99 bottles of beer in the graphics language Gri
# Prints out 99BoB to both stdout and also the the postscript file 99BoB.ps
#
# Gri is available from http://gri.sourceforge.net/
#
# beer.gri by Stuart Prescott 2003
#
# Invocation:
#           gri beer.gri
# or just
#           ./beer.gri

\singular   = "bottle"
\plural     = "bottles"
\beer       = "of beer"
\wall       = "\beer on the wall"
\take       = "Take one down and pass it around,"

#set up the postscript file and the font size for the printout
set postscript filename 99BoB.ps
set font size 0.08 cm
.leftmargin. = 3
.bottommargin. = 29
.linewidth. = 0.10
.vertposition. = .bottommargin.

#now generate the song line-by-line
.count. = 100
while {rpn .count. 0 <}         #note: reverse polish notation maths...
  if {rpn .count. 2 ==}
    \bottle1 = "\plural"
    \bottle2 = "\singular"
  else if {rpn .count. 1 ==}
    \bottle1 = "\singular"
    \bottle2 = "\plural"
  else
    \bottle1 = "\plural"
    \bottle2 = "\plural"
  end if

  sprintf \line1 "%.0f \bottle1 \wall, %.0f \bottle1 \beer" .count. .count.
  sprintf \line2 "\take %.0f \bottle2 \wall." {rpn .count. 1 -}

  #Print the line of the song to stdout
  show "\line1"
  show "\line2"
  show ""

  #Print the line of the song to the postscript file
  draw label "\line1" at .leftmargin. .vertposition. cm
  draw label "\line2" at .leftmargin. {rpn .vertposition. .linewidth. -} cm
  .vertposition. = {rpn .vertposition. 2.5 .linewidth. * -}

  .count. -= 1
end while```