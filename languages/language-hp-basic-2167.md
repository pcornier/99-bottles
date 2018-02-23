
## Language HP BASIC ##
---
- Author: John Cookson
- Date: 08/21/09
- Info: http
- Score:  (2.25 in 20 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-hp-basic-2167.html
---

```! HP Basic version of 99 bottles of beer
! Created by John Cookson

FOR  BOTTLE.QTY% = 99% TO 1% STEP -1%

 IF   BOTTLE.QTY% = 1% THEN
      PRINT BOTTLE.QTY%;"bottle of beer on the wall";BOTTLE.QTY%;"bottle of beer"
 ELSE PRINT BOTTLE.QTY%;"bottles of beer on the wall,";BOTTLE.QTY%;"bottles of beer"
      END IF
      
 PRINT "Take one down and pass it around,"     
 
 IF   BOTTLE.QTY% = 1% THEN
      PRINT " no more bottles of beer on the wall"
      END IF
      
 IF   BOTTLE.QTY% = 2% THEN
      PRINT BOTTLE.QTY% - 1%; "bottle of beer on the wall"
      END IF
      
 IF   BOTTLE.QTY% > 2% THEN
      PRINT BOTTLE.QTY% - 1%; "bottles of beer on the wall"
      END IF

NEXT BOTTLE.QTY% 

END PROGRAM```