
## Language CoreASM ##
---
- Author: Oleg Nabiullin
- Date: 08/16/08
- Info: http
- Score:  (2.86 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-coreasm-1848.html
---

```// CoreASM specification 
// Written 08/16/08 by Oleg Nabiullin
// URL: www.coreasm.org

CoreASM Song_of_99_bottles

use Standard

function Bottles:-> Integer

derived MaxBottles = 99

init InitRule

rule InitRule =
	par
		Bottles := MaxBottles
		program(self) := @Main
	endpar

rule GetCorrectBottlesTense(bottles) =
	return res in
  		if bottles > 1 then
    		res := bottles + " bottles"
  		else if bottles = 1 then
    		res := bottles + " bottle"
  		else
    		res := "No more bottles"

rule Main =
	seq
		while (Bottles > 0) do
		par
    		print 
    			GetCorrectBottlesTense(Bottles) + " of beer on the wall,\n" +
				GetCorrectBottlesTense(Bottles) + " of beer.\n" +
				"Take one down, pass it around.\n" +
				GetCorrectBottlesTense(Bottles - 1) + " of beer on the wall.\n"
			Bottles := Bottles - 1
		endpar
  	next
  		par
    		print
				"No more bottles of beer on the wall,\n" +
				"No more bottles of beer.\n" +
				"Go to the store, get some more!\n" +
				MaxBottles + " bottles of beer on the wall.\n"
			program(self) := undef
		endpar```