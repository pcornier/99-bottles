
## Language Commodore 64 BASIC (V2) ##
---
- Author: Nicholas Kingsley
- Date: 05/28/07
- Info: http
- Score:  (3.00 in 48 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-commodore-64-basic-(v2)-1494.html
---

```10 FOR B=99 TO 1 STEP -1
20 GOSUB 100
30 T$=T$+" OF BEER ON THE WALL"
40 PRINT T$;", ";T$
50 PRINT "TAKE ONE DOWN AND PASS IT AROUND, "
60 IF B-1<=0 THEN PRINT "NO MORE BOTTLES OF BEER ON THE WALL":GOTO 80
70 GOSUB 200:PRINT " OF BEER ON THE WALL"
80 PRINT:NEXT
91 PRINT "GO TO THE STORE AND BUY SOME MORE, 99 BOTTLES OF BEER ON THE WALL"
92 END
100 T$=STR$(B)+" BOTTLE":IF B>1 THEN T$=T$+"S"
110 RETURN
200 A=B-1:PRINT STR$(A)+" BOTTLE";
210 IF A>1 THEN PRINT "S";
220 RETURN```