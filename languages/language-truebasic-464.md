
## Language TrueBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.21 in 14 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-truebasic-464.html
---

```! True Basic version of 99 Bottles of beer (Bottles.tru)
! See http://truebasic.com/tbv5.html
! Philipp Winterberg, http://www.winterbergs.de

FOR b = 99 TO 1 STEP -1     

    PRINT b;" bottle(s) of beer on the wall,"
    PRINT b;" bottle(s) of beer."
    PRINT "Take one down, pass it around,"
    PRINT b-1;" bottle(s) of beer on the wall."
    PRINT " "

NEXT b

END```