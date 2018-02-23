
## Language GASP ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: n/a
- Score:  (2.69 in 13 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gasp-276.html
---

```.PROGRAM  gasp version of 99 bottles of beer
.PROGRAM  Laurent Vogel  http://lvogel.free.fr
.PROGRAM
i .ASSIGNA 99
s .ASSIGNC "s"
.AREPEAT \&i
 \&i bottle\&s of beer on the wall,
 \&i bottle\&s of beer.
 Take one down, pass it around,
i .ASSIGNA \&i-1
.AIF \&i LE 1
s .ASSIGNC ""
.AIF \&i EQ 0
i .ASSIGNC "No"
.AENDI
.AENDI
 \&i bottle\&s of beer on the wall.
 \( )
.AENDR
.END```