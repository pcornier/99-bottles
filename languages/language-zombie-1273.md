
## Language Zombie ##
---
- Author: Riley Klingler
- Date: 09/16/06
- Info: http
- Score:  (3.58 in 77 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-zombie-1273.html
---

```minusOne is a zombie
summon
	remember -1
bind

lotsofbeer is a zombie
summon
	remember 99
	task Beersong
		shamble
			say moan lotsofbeer 
			say bottles of beer on the wall,
			say moan lotsofbeer
			say bottles of beer
			say Take one down, pass it around
			remember moan minusOne moan lotsofbeer
			say moan lotsofbeer
			say bottles of beer on the wall
		until remembering 1
	say 1 bottle of beer on the wall, 1 bottle of beer, take it down, pass it around no more bottles
	say of beer on the wall.
	 animate
 animate```