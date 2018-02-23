
## Language ZOMBIE ##
---
- Author: Taneb
- Date: 12/09/10
- Info: http
- Score:  (3.84 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-zombie-2562.html
---

```zombie2 is a zombie
summon
	remember -1
bind
zombie1 is a zombie 
summon
	remember 99
	task brewing
		shamble
			taste remembering 0 good
				say "No more bottles of beer on the wall, no more bottles"
				say " of beer.\nGo to the store and buy some more, 99 bot"
				say "tles of beer on the wall."
			bad
				say moan zombie1
				taste remembering 1 good
					say " bottle of beer on the wall, 1 bottle of bee"
					say "r.\n Take one down and pass it around, no mo"
					say "re bottles of beer on the wall."
				bad
					say " bottle of beer on the wall, "
					say moan zombie1
					say "bottle of beer.\nTake one down and pass it a"
					say "round, "
				spit
				remember Zombie1 moan Zombie1 moan Zombie2
				taste remembering 0 good
					say "no more bottles of beer on the wall.\n\n"
				bad
					say moan zombie1
					say " bottle of beer on the wall."
				spit
			spit
		until remembering -1
	animate
animate```