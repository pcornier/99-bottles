
## Language GLPRO ##
---
- Author: Rainer
- Date: 04/20/05
- Info: n/a
- Score:  (1.75 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-glpro-283.html
---

```; Script 99bottles.gls
; Last modified by Rainer at 08.06.2002 15:57:09
; 99bottles@RainerBrang.de
; http://www.rainerbrang.de
;"Rest in peace, GLPRO".

;GLPRO Version of 99 bottles of beer

        ; black window, white text
        drawCLEAR 0 0 0 
        color white
 
        ; scroll text when reaching the end of the window
        set textSCROLL ON
 
        ; count down from 99 and do stuff
        beginLOOP 99 1 -1
                text @loop$" bottle(s) of beer on the wall, "@loop$" bottle(s) of beer"@crlf
                text "Take one down and pass it around,"@crlf
                text (@loop-1)$" bottle(s) of beer on the wall"@crlf
        endLOOP
 
        ; wait for any key
        waitKEY```