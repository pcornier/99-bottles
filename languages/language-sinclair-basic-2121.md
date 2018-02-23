
## Language Sinclair BASIC ##
---
- Author: Nine Tiles Networks
- Date: 06/14/09
- Info: http
- Score:  (3.01 in 84 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sinclair-basic-2121.html
---

```    1 REM 99 BOTTLES OF BEER
    2 REM FOR THE 1K ZX81
    3 REM BY GARRY WISHART
   10 LET B=99
   11 LET T=300
   12 LET I=1
   20 LET B$=" BOTTLES"
   25 LET N$="NO MORE"+B$+" OF BEER"
   27 LET W$=" OF BEER ON THE WALL."
   30 PRINT B;B$;W$
   40 PRINT B;B$;" OF BEER."
   50 PRINT
   60 PRINT "TAKE ONE DOWN AND PASS IT AROUND"
   70 LET B=B-I
   75 IF NOT B THEN GOTO 130
   80 LET B$=" BOTTLES"(I TO 8-(B=I))
   90 PRINT B;B$;W$
  100 GOSUB T
  110 CLS
  120 GOTO 30
  130 PRINT N$;" ON"; TAB 6;"THE WALL"
  140 PRINT N$;"."
  150 PRINT
  160 PRINT "GOTO THE STORE AND BUY"
  170 PRINT TAB 6;"SOME MORE,"
  180 PRINT "99 BOTTLES";W$
  190 GOSUB T
  205 CLS
  210 RUN
  300 FOR X=I TO T
  310 NEXT X
  320 RETURN```