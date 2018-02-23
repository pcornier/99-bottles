
## Language Brandy ##
---
- Author: Chris Rodliffe
- Date: 10/23/06
- Info: http
- Score:  (2.50 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-brandy-1311.html
---

```REM  This is written in 'Brandy', a port of BBC Basic V for multiple platforms
REM  This version tested under Linux  (other platforms should work the same)
REM  Here's the formatted version:
REM  n=99
REM  REPEAT
REM     i=3
REM     REPEAT
REM        PRINT n;" bottle";
REM        IF n<>1 PRINT "s";
REM        PRINT " of beer";
REM        IF i=3 OR i=1 PRINT " on the wall";
REM        IF i=2 PRINT: PRINT "Take one down, pass it around";: n=n-1
REM        i=i-1
REM        PRINT
REM     UNTIL i=0
REM  PRINT
REM  UNTIL n=0
REM
REM  and in the spirit of the old BBC Basic one-line programs, 
REM  here's the shortest I can get it (line breaks essential 
REM  to terminate IF statements)

n=99:REP.:i=3:REP.:P.n;" bottle";:IFn<>1P."s";
P." of beer";:IFi=3ORi=1P." on the wall";
IFi=2P.:P."Take one down, pass it around";
IFi=2n-=1
i-=1:P.:U.i=0:P.:U.n=0```