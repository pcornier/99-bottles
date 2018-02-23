
## Language Euphoria ##
---
- Author: Don Phillips
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 29 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-euphoria-242.html
---

```-- Euphoria
-- www.rapideuphoria.com
--
-- Author: Don Phillips
-- 
atom Beers
sequence Bottles

Beers = 99
while Beers != 0 do
	Bottles = "Bottle" & (Beers!=1)*'s'
	printf( 1, "%d %s of beer on the wall,\n", {Beers,Bottles} )
	printf( 1, "%d %s of beer.\n", {Beers,Bottles} )
	printf( 1, "Take one down, pass it around,\n", {} )
	Beers -= 1
	Bottles = "Bottle" & (Beers!=1)*'s'
	printf( 1, "%d %s of beer on the wall.\n\n", {Beers,Bottles} )
end while```