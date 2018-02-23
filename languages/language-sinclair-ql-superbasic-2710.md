
## Language Sinclair QL SuperBasic ##
---
- Author: Anthony Prime
- Date: 07/15/11
- Info: http
- Score:  (2.83 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sinclair-ql-superbasic-2710.html
---

```100 REMark Drinkers Delight
110 :
120 MODE 4
130 WINDOW 512,256,0,0
140 CLS
150 PRINT "All together now..."\
160 :
170 FOR beers=99 TO 1 STEP -1
180     IF beers>1
190         PRINT \beers;" Bottles of Beer on the wall ";
200         PRINT beers;" Bottles of Beer"
210         PRINT "Take one down, pass it around, ";
220         PRINT beers-1;" Bottles of Beer on the wall."\
230       ELSE 
240         PRINT \"1 Bottle of Beer on the wall, 1 Bottle of Beer"
250         PRINT "Take one down, pass it around, no more Bottles of Beer on the wall."\\
260         PRINT "No more Bottles of Beer on the Wall, no more Bottles of Beer"\
270         PRINT "Go to the store to buy some more, 99 Bottles of Beer on the wall"\\
280     END IF 
290 END FOR beers
300 :
310 PRINT "Hic..."
320 STOP```