
## Language BASIC ##
---
- Author: barrym
- Date: 06/26/10
- Info: n/a
- Score:  (2.94 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-basic-2435.html
---

```10 !------------------------
11 !BEER SONG IN TI99/4A
12 !EXTENDED BASIC BY BARRYM
13 !2010-06-20. PRINTS OUT
14 !COMPLETE CORRECT SONG AS
15 !CLEANLY AS POSSIBLE ON A
16 !28-COLUMN UPPER-CASE
17 !DISPLAY (DANG!). THANKS
18 !TO CLASSIC99 FOR THEIR
19 !EXCELLENT EMULATOR!!
20 !NOTICE THE EXTRA '";"'S
21 !IN THE PRINT STATEMENTS?
22 !THEY ARE GIVING WORD
23 !BREAK CLUES TO HELP
24 !PRINT DECIDE WHEN TO 
25 !START A NEW LINE!
29 !------------------------
30 M=99 !MAX NUMBER OF BEERS
35 CALL CLEAR !BLANK SCREEN
36 !------------------------
37 !PRINT ENTIRE SONG EXCEPT
38 !FOR LAST SENTENCE
39 !------------------------
40 FOR B=M TO 0 STEP -1
45 IF B=M THEN 60
50 PRINT "TAKE ONE DOWN AND 
PASS IT";" AROUND, ";
55 CALL PRBOB(B,2)
60 PRINT :: CALL PRBOB(B,0)
65 CALL PRBOB(B,1):: NEXT B
67 !------------------------
68 !PRINT LAST SENTENCE
69 !------------------------
70 B=M
75 PRINT "GO TO THE STORE AN
D BUY SOME";" MORE, ";
80 CALL PRBOB(B,2)
99 END
100 !----- PRBOB (B,W) -----
101 !PRINT APPROPRIATE BEER
102 !SUB-PHRASE TO DISPLAY:
104 !  0: "... ON THE WALL"
105 !  1: "... OF BEER."
106 !  2: "... ON THE WALL."
109 !-----------------------
110 SUB PRBOB(B,W)
120 IF B THEN PRINT STR$(B);
ELSE PRINT "NO";" MORE";
130 IF B=1 THEN PRINT " BOTT
LE";ELSE PRINT " BOTTLES";
140 PRINT " OF";
150 IF W=1 THEN PRINT " BEER
.";ELSE PRINT " BEER";" ON";
" THE";
160 IF W=0 THEN PRINT " WALL
,";" ";
170 IF W=2 THEN PRINT " WALL
."
199 SUBEND```