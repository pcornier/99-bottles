
## Language BASIC ##
---
- Author: M. Eric Carr
- Date: 05/27/05
- Info: n/a
- Score:  (3.02 in 167 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-basic-691.html
---

``` 10 REM Basic version of 99 bottles of beer
 20 REM Modified by M. Eric Carr (eric@carrnet.net)
 30 REM from prior version found on this site.
 40 REM (Modified to correct "1 bottle" grammar)
 50 FOR X=99 TO 1 STEP -1
 60 PRINT X;"bottle";
 70 IF X<>1 THEN PRINT "s";
 80 PRINT " of beer on the wall,";X;"bottle";
 90 IF X<>1 THEN PRINT "s";
100 PRINT " of beer"
110 PRINT "Take one down and pass it around,"
120 PRINT X-1;"bottle";
130 IF X<>1 THEN PRINT "s";
140 PRINT " of beer on the wall"
150 NEXT```