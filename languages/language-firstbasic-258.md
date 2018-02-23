
## Language FirstBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.62 in 13 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-firstbasic-258.html
---

```' FirstBasic/PowerBasic version of 99 Bottles of beer (Bottles.bas)
' See http://www.powerbasic.com/
' Philipp Winterberg, http://www.winterbergs.de

KEY OFF : COLOR 7, 0 : CLS
FOR b% = 99 TO 1 STEP -1
  PRINT STR$(b%) + " bottle(s) of beer on the wall,"
  PRINT STR$(b%) + " bottle(s) of beer."
  PRINT "Take one down, pass it around,"
  PRINT STR$(b%-1) + " bottle(s) of beer on the wall."
  PRINT " "
NEXT b%
END```