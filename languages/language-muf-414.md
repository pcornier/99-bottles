
## Language MUF ##
---
- Author: Mouse of HoloMUCK
- Date: 04/20/05
- Info: n/a
- Score:  (4.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-muf-414.html
---

```( 99 Bottles Of Beer, in MUF )
( by Mouse of HoloMUCK, 2003-03-07 )
( Link an exit to this, then invoke it with the starting bottle count. )
: say me @ swap notify ;
: beer
	atoi dup not if pop 99 then 2 -1 for
		dup intostr " bottles of beer on the wall" strcat say
		dup intostr " bottles of beer" strcat say
		"Take one down and pass it around" say
		1 - intostr " bottles of beer on the wall" strcat say
		" " say
	loop
	"1 bottle of beer on the wall" say
	"1 bottle of beer" say
	"Take it down and pass it around" say
	"No more bottles of beer on the wall" say
	" " say
	"...no more beer?" say
;```