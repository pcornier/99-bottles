
## Language BBC Basic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.13 in 23 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-bbc-basic-83.html
---

```REM BBC BASIC version of 99 Bottles of beer (Bottles.bbc)
REM See: http://www.bbcbasic.com/
REM Philipp Winterberg, http://www.winterbergs.de
      
FOR b=99 TO 1 STEP -1
  PRINT 'b;, " bottle(s) of beer on the wall,"
  PRINT b;,, " bottle(s) of beer."
  PRINT ,,,, "Take one down, pass it around,"
  PRINT b-1; " bottle(s) of beer on the wall."
NEXT b```