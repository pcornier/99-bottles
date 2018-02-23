
## Language BASIC-PLUS ##
---
- Author: George Hames
- Date: 05/03/09
- Info: http
- Score:  (3.00 in 34 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-basic-plus-2083.html
---

```1	EXTEND
10	!
	Basic Plus version of 99 bottles of beer
	Modified by George Hames (george.hames@ihs.com)
	from prior versions found on this site.

1000  FOR BOTTLES% = 99% TO 1% STEP -1% \
          PRINT BOTTLES%; "bottle"; \		
          PRINT "s"; UNLESS BOTTLES% = 1% \			
          PRINT " of beer on the wall,"; BOTTLES%; "bottle"; \
          PRINT "s"; UNLESS BOTTLES% = 1% \
          PRINT " of beer" \
          PRINT "Take one down and pass it around," \
          PRINT BOTTLES% - 1%; "bottle"; IF BOTTLES% > 1% \
          PRINT " no more bottles"; IF BOTTLES% = 1% \
          PRINT "s"; IF BOTTLES% > 2% \
          PRINT " of beer on the wall" \
      NEXT bottles% 

32767 END```