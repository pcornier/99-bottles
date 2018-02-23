
## Language Halo Script ##
---
- Author: Bacon
- Date: 07/12/07
- Info: n/a
- Score:  (2.95 in 20 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-halo-script-1543.html
---

```(global real bottles 99)

(script continuous drinkBeer
	(if (> bottles 1)
		(begin
		(inspect bottles)
		(print "bottles of beer on the wall!")
		(inspect bottles)
		(print "bottles of beer!")
		(print "Take one down, pass it around")
		(set bottles (- bottles 1))
		(inspect bottles)
		(print "bottles of beer on the wall!")
		(print " ")
		)
	)
	(if (= bottles 1)
		(begin
		(print "One bottle of beer on the wall")
		(print "One last bottle of beer!")
		(print "Take it down, pass it around")
		(print "No more bottles of beer on the wall!")
		(print " ")
		(print "No bottles of beer on the wall")
		(print "No more bottles of beer!")
		(print "Go to the store, buy some more")
		(print "99 bottles of beer on the wall!")
		(set bottles -1)
		(print " ")
		)
	)
)```