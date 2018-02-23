
## Language IBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.33 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ibasic-319.html
---

```REM IBasic version of 99 Bottles of beer (Bottles.iba)
REM See http://www.pyxia.com/ibasic.html
REM Philipp Winterberg, http://www.winterbergs.de 

OPENCONSOLE
FOR B = 99 TO 1 #-1
  PRINT B, " bottle(s) of beer on the wall,"
  PRINT B, " bottle(s) of beer."
  PRINT "Take one down, pass it around,"
  PRINT B-1, " bottle(s) of beer on the wall." + chr$(13) + chr$(10)
NEXT B 
INPUT B
CLOSECONSOLE```