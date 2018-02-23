
## Language DiNGS Game Basic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.20 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-dings-game-basic-215.html
---

```// DiNGS Game Basic version of 99 Bottles of beer (Bottles.src)
// See http://www.dream-d-sign.de/DINGS/Infos/infos.html
// Philipp Winterberg, http://www.winterbergs.de

LIMITFPS 23; BLACKSCREEN
FOR b=99 TO 1 STEP -1 
  PRINT b, 23, 23; PRINT "   bottle(s) of beer on the wall,", 23, 23  
  PRINT b, 23, 63; PRINT "   bottle(s) of beer.", 23, 63
  PRINT "Take one down, pass it around,", 23, 103
  PRINT b-1, 23, 143;  PRINT "   bottle(s) of beer on the wall.", 23, 143
  SHOWSCREEN; MOUSEWAIT
NEXT; END```