
## Language HTBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.05 in 22 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-htbasic-315.html
---

```! HTBasic version of 99 Bottles of beer (Bottles.bas)
! See http://www.techsoft.de/htbasic/german/
! Philipp Winterberg, http://www.winterbergs.de

CLEAR SCREEN
DISPLAY FUNCTIONS OFF
A$=" bottle(s) of beer"
C$=" on the wall"
FOR B=99 TO 1 STEP -1
  PRINT B;A$;C$;","
  PRINT B;A$;"."
  PRINT "Take one down, pass it around,"
  PRINT B-1;A$;C$;".";CHR$(13);CHR$(10)
NEXT B
END```