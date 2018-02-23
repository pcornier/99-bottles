
## Language VP ##
---
- Author: David Given
- Date: 04/20/05
- Info: http
- Score:  (2.93 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vp-180.html
---

```; VP is the high-level portable assembly language used by 
; Tao's intent operating system.
; David Given, http://www.cowlark.com

.include "tao"

tool "app/stdio/bottles", VP, F_MAIN, 4096, 0
ent (- : -)
	regdef int number

	cpy.i 99, number
	while (number > 0)
		gos bottle, (number : -)
		printf " of beer on the wall,\n"
		gos bottle, (number : -)
		printf " of beer.\n"
		printf "Take one down and pass it around,\n"
		dec.i number
		gos bottle, (number : -)
		printf " of beer on the wall.\n\n"
	endwhile

	ret ()
entend

bottle:
ent (int number : -)
	if (number == 0)
		printf "No bottles"
	elseif (number == 1)
		printf "One bottle"
	else
		printf "%d bottles", number
	endif
	ret ()
entend
toolend```