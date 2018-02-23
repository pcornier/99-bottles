
## Language XBasic ##
---
- Author: etfan
- Date: 04/14/07
- Info: http
- Score:  (3.00 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-xbasic-1449.html
---

```'1) Copy this into a text file and save as BeerOnDaWall.x
'2) Get XBasic 6.2.3 at http://xbasic.sourceforge.net/
'3) Open the IDE
'4) Load BeerOnDaWall.x using file/load
'5) Run by clicking on the exclamation mark `!'
'
' This version handles the plurals correctly with
' (I hope) a bit of humor.  My proudest moment!!
' etf

PROGRAM "BeerOnDaWall"
VERSION "1.0"
DECLARE FUNCTION  Brewski ()
FUNCTION  Brewski ()

beer = 99
DO
  GOSUB Wasted: PRINT "r on the wall,"
  GOSUB Wasted: PRINT "eer.    (Hic!)"
  PRINT " Take one down, pass it around,"
  DEC beer
  GOSUB Wasted: PRINT "r on the wall.\n"
LOOP WHILE beer

SUB Wasted
  PRINT beer; " bottle";
  IF beer <> 1 PRINT "s";
  PRINT " of bee";
END SUB

END FUNCTION
END PROGRAM```