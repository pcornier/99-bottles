
## Language Apple IIe Basic ##
---
- Author: barrym
- Date: 05/16/10
- Info: n/a
- Score:  (3.00 in 47 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-apple-iie-basic-2394.html
---

``` 0  REM ------------------------
 1  REM BEER SONG FOR Apple IIe
 2  REM  by barrym 2010-05-14
 3  REM THANKS AppleWin1.17.2.0
 4  REM ------------------------
 10  REM Prints entire, CORRECT,
 11  REM COMPLETE song to active
 12  REM output (extra carriage
 13  REM returns are inserted if
 14  REM a 40-column display is
 15  REM detected to prevent the
 16  REM words from breaking
 17  REM against the right edge) 
 18  REM -----------------------
 19 C$ = "": IF  PEEK (33) < 41 THEN C$ =  CHR$ (13)
 20  FOR B = 99 TO 0 STEP  - 1: IF B = 99 THEN 50
 30  PRINT "Take one down and pass it around";
 40 W = 2: GOSUB 90: PRINT 
 50 W = 0: GOSUB 90
 60 W = 1: GOSUB 90: NEXT 
 70 W = 3:B = 99
 80  PRINT "Go to the store and buy some more";
 82  REM -----------------------
 83  REM Print bottle subphrase,
 84  REM using W var as a guide:
 85  REM 0: B" bottl ... wall";
 86  REM 1: B" bottl ... beer."
 87  REM 2: B" bottl ... wall."
 88  REM 3: Like 2 but last time
 89  REM -----------------------
 90  IF W THEN  PRINT ","C$" ";
 92  IF B THEN  PRINT B;
 93  IF  NOT B THEN  PRINT  CHR$ (110 - 32 *  NOT W)"o more";
 94  PRINT " bottle";: IF B <  > 1 THEN  PRINT "s";
 95  PRINT " of beer";: IF W <  > 1 THEN  PRINT " on the wall";
 97  IF W THEN  PRINT "."
 99  IF W < 3 THEN  RETURN```