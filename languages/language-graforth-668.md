
## Language GRAFORTH ##
---
- Author: Mike Gogulski
- Date: 05/18/05
- Info: n/a
- Score:  (2.86 in 29 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-graforth-668.html
---

```( GRAFORTH version of 99 Bottles )
( By Mike Gogulski <mike@gogulski.com> 21 March 2005 )
( GRAFORTH is a graphics-oriented FORTH for the Apple ][ series computers )
( Tested under DOS 3.3 under Apple //e ROM under MESS 0.94b under Windows 2000 )
 
: DRINK
0 99 DO
I
DUP . PRINT "  bottle(s) of beer on the wall, " CR
DUP . PRINT "  bottle(s) of beer! " CR
PRINT " Take one down, pass it around, " CR
1 -
. PRINT "  bottle(s) of beer on the wall! " CR
-1 +LOOP
;
 
DRINK```