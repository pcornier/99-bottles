
## Language CoreASM ##
---
- Author: Serguei Michtchenko
- Date: 04/02/10
- Info: http
- Score:  (3.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-coreasm-2353.html
---

```CoreASM NinetyNineBottles

use Standard

derived MaxBottles = 99
function BottleCount : -> Integer

init InitRule

rule InitRule = {
	BottleCount := MaxBottles
	program(self) := @SingAndDrink
}

rule SingAndDrink = {
	if BottleCount > 0 then {
		let n = BottleCount in
		print Bottles(n) + " of beer on the wall, " + Bottles(n) + " of beer.\n"
			+ "Take one down and pass it around, " + Bottles(n-1) + " of beer on the wall.\n"
		
		BottleCount := BottleCount - 1
	}
	else {
		print "No more bottles of beer on the wall, no more bottles of beer.\n"
			+ "Go to the store and buy some more, " 
			+ Bottles(MaxBottles) + " of beer on the wall."
			 
		program(self) := undef
	}
}

rule Bottles(n) = 
	return str in
		if      n > 1 then str := n + " bottles"
		else if n = 1 then str := n + " bottle"
		else if n = 0 then str := "no more bottles"```