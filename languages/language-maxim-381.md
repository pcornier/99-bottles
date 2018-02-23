
## Language Maxim ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-maxim-381.html
---

```(fun getNum (num)
	(cond
		((= num 0)
			"No Bottles")
		((= num 1)
			"One Bottle")
		(t	(strConc num " Bottles"))
	)
)

(fun bottlesOfBeer ()
	(for (i 99 1 -1)
		(princln (getNum i) " of beer on the wall,")
		(princln (getNum i) " of beer...")
		(princln "Take one down, pass it around...")
		(princln (getNum (-- i)) " of beer on the wall...\n")
	)
	(princln "Head to store and buy more!")
)

(bottlesOfBeer)```