
## Language BASIC ##
---
- Author: barrym
- Date: 04/05/10
- Info: n/a
- Score:  (3.02 in 46 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-basic-2356.html
---

```1 REM BEER SONG FOR 8-BIT ATARI BASIC
2 REM by barrym 2010-04-04
3 REM THANKS TO Atari800Win PLus 3.1!!
9 GRAPHICS 0:B=99
10 ? :W=1:C=1:GOSUB 40:? ","
15 W=0:C=0:GOSUB 40:IF B=0 THEN 30
20 B=B-1:? "Take one down and pass it
 around,":W=2:GOSUB 40:GOTO 10
30 B=99:? "Go to the store and buy some
 more,":W=3
40 IF B=0 THEN 50
45 IF C=0 THEN ? " ";
47 ? B;:GOTO 60
50 IF C=1 THEN ? "N";
55 IF C=0 THEN ? " n";
57 ? "o more";
60 ? " bottle";:IF B<>1 THEN ? "s";
70 ? " of beer";:IF W>0 THEN ? "on the
 wall";
80 IF W<>1 THEN ? "."
90 IF W<3 THEN RETURN
1 REM BEER SONG FOR 8-BIT ATARI BASIC
2 REM by barrym 2010-04-04
3 REM THANKS TO Atari800Win PLus 3.1!!
9 GRAPHICS 0:B=99
10 ? :W=-1:GOSUB 40
15 ? ",":GOSUB 40:IF B=0 THEN 30
20 ? "Take one down and pass it around,"
25 B=B-1:GOSUB 40:GOTO 10
30 ? "Go to the store and buy some more,"
35 B=99:W=2
40 IF B=0 THEN 55
45 IF W+1 THEN ? " ";
50 ? B;:GOTO 70
55 IF W<0 THEN ? "N";
60 IF W+1 THEN ? " n";
65 ? "o more";
70 ? " bottle";:IF B-1 THEN ? "s";
75 ? " of beer";
80 IF W THEN ? " on the wall";
85 W=W+1:IF W THEN ? "."
90 IF W<3 THEN RETURN
```