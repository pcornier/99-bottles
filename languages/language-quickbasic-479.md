
## Language QuickBasic ##
---
- Author: Patrick Fleming
- Date: 04/20/05
- Info: n/a
- Score:  (2.76 in 136 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-quickbasic-479.html
---

```'99 Bottles of Beer on the Wall
'Patrick Fleming   http://chem-www.mps.ohio-state.edu/~pfleming/

CLS

n = 100
DO UNTIL n = 1
     n = n - 1
     PRINT n; "bottle";
     IF n <> 1 THEN PRINT "s";
     PRINT " of beer on the wall . . ."
     PRINT n; "bottle";
     IF n <> 1 THEN PRINT "s";
     PRINT " of beer!"
     PRINT "Take one down, pass it around . . ."
     PRINT n - 1; "bottle";
     IF n - 1 <> 1 THEN PRINT "s";
     PRINT " of beer on the wall!"
     PRINT
LOOP

END```