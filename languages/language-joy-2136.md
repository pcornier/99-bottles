
## Language Joy ##
---
- Author: inforichland
- Date: 07/05/09
- Info: http
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-joy-2136.html
---

```LIBRA

	_beerlib == true ;

HIDE
	beer == "of beer " putchars ;
	wall == "on the wall" putchars ;
	take1 == "Take one down and pass it around, " putchars ;
	dup3 == dup dup dup ;
	comma == ", " putchars ;
	period == '. putch ;
	bottles == [dup small] 
		[ [null] [pop "no more bottles " putchars] [put "bottle " putchars] ifte] 
		[put "bottles " putchars] ifte ;
	sing-verse == dup3 bottles beer wall comma 
		bottles beer "\b.\n" putchars
		take1 1 - bottles beer wall period newline newline ;
	sing-verse-0 == "No more bottles of beer on the wall, no more bottles of beer\n" putchars
			"Go to the store and buy some more, " putchars 
			99 bottles pop beer wall period newline ;

IN
	(* n -- *)
	sing-verses == [null]
			[sing-verse-0]
			[sing-verse 1 -] tailrec .```