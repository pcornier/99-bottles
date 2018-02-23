
## Language FAST ##
---
- Author: Fabian M. Suchanek
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fast-253.html
---

```// 99 Bottles of Beer
// Written in FAST (see http://jump.to/fms -> FAST)
// (c) 2003-05-21 Fabian M. Suchanek

VAR i 99
WHILE (i > 0) (
 PRINTINT i 2
 PRINT " Bottle"
 IF (i > 1) (PRINT "s")
 PRINT " of beer on the wall\n"
 PRINT "Take one down, pass it around\n"
 DEC i
)

PRINT "Go to the store, buy some more\n"```