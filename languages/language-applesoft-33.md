
## Language AppleSoft ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 66 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-applesoft-33.html
---

``` 	

0  REM  ************************
1  REM  ** 99 BOTTLES OF BEER **
2  REM  ** APPLESOFT VERSION  **
3  REM  ** BY LEE FASTENAU    **
4  REM  ************************
10  TEXT : HOME
20  FOR Z = 99 TO 1 STEP  - 1
30 A = Z: GOSUB 1000
40  PRINT " ON THE WALL."
50  GOSUB 1000
60  PRINT "."
70  GOSUB 2000
80 A = Z - 1: GOSUB 1000
90  PRINT " ON THE WALL."
100  NEXT
110  END
1000  IF A < 1 THEN A$ = "NO MORE": GOTO 1020
1010 A$ =  STR$ (A)
1020 A$ = A$ + " BOTTLE"
1030  IF A <  > 1 THEN A$ = A$ + "S"
1040 A$ = A$ + " OF BEER"
1050  PRINT A$;
1060  RETURN
2000 A$ = "TAKE"
2010  IF A > 1 THEN A$ = A$ + " ONE": GOTO 2030
2020 A$ = A$ + " IT"
2030 A$ = A$ + " DOWN, PASS IT AROUND."
2040  PRINT A$
2050  RETURN```