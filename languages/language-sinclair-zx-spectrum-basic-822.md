
## Language Sinclair ZX-Spectrum Basic ##
---
- Author: Mirko M�nninghoff
- Date: 08/04/05
- Info: http
- Score:  (3.02 in 274 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sinclair-zx-spectrum-basic-822.html
---

```10 REM 99 bottles of beer
20 REM Sinclair ZX-Spectrum Version
30 REM by Mirko Moenninghoff
100 DEF FN n$(b)="no more" AND NOT b
110 DEF FN m$(b)=(STR$ b) AND b
120 DEF FN o$(b)="s" AND (b>1)
130 DEF FN b$(b)=FN m$(b)+FN n$(b)
140 DEF FN p$(b)=FN o$(b)+("s" AND NOT b)
150 FOR i=99 TO 0 STEP -1
160 LET x$=FN b$(i)
170 IF x$(1)="n" THEN LET x$(1)="N"
180 PRINT x$;
190 PRINT " bottle";FN o$(i);" of beer on the wall, "'FN b$(i);" bottle";FN p$(i);" of beer."
200 IF NOT i THEN GO TO 300
210 PRINT "Take one down"'"and pass it around, ";
220 PRINT FN b$(i-1);" bottle";FN p$(i-1);" of beer on the wall."
230 PRINT
240 NEXT i
300 PRINT "Go to the store and buy some more, 99 bottles of beer on the wall."```