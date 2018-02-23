
## Language UniVerse Basic ##
---
- Author: Brad Scheepers
- Date: 04/20/05
- Info: n/a
- Score:  (2.40 in 40 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-universe-basic-187.html
---

```* 99 Bottles of Beer on the Wall
* in UniVerse Basic by Brad Scheepers - 2003

$INSERT I_EQUATE
$INSERT I_COMMON

FOR X = 99 TO 1 STEP -1
	PRINT X:" Bottles of beer on the wall,"
	PRINT X:" bottles of beer."
	PRINT "Take one down, pass it around,"
	IF X <> 1 THEN PRINT X-1:" Bottles of beer on the wall.
NEXT X
	PRINT "No more bottles of beer on the wall, No more bottles of beer."
	PRINT "Go to the store and buy some more - 99 bottles of beer on the wall"

END```