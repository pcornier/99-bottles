
## Language Dataflex 2.3 ##
---
- Author: R. Wingerter
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dataflex-2.3-198.html
---

```/*
// beer.src 
// Dataflex 2.3 
// R. Wingerter, rwingerter@t-online.de
//
		
clearscreen

number i

move 99 to i

repeat

	showln i " bottle(s) of beer standing on the wall"
	showln "Take one down, pass it around"
	showln ""

  	move (i-1) to i


until i EQ 0
		
showln i " bottle(s) of beer standing on the wall
showln "Gotta go to the store and buy some more"
	
abort```