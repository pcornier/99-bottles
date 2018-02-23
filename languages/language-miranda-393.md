
## Language Miranda ##
---
- Author: Tim Walls
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 106 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-miranda-393.html
---

```|| 99 bottles of beer in Miranda - the hideous functional programming lingo
|| by Tim Walls, tjw1@doc.ic.ac.uk, http://www-students.doc.ic.ac.uk/~tjw1/
||
|| Call with 'bottlesofbeer 99'.
bottlesofbeer :: num -> [char]

bottlesofbeer n = "\nNo more bottles of beer on the wall, \n"		
		       ++ "no more bottles of beer.\n"	, if n = 0
		= "\nOne more bottle of beer on the wall, one bottle of beer,\n"
		       ++ "Take one down and pass it around"
		       ++ (bottlesofbeer (n-1))		, if n = 1
		= "\n" ++ shownum(n) ++ " bottles of beer on the wall,"
		       ++ shownum(n)
		       ++ " bottles of beer,\nTake one down and pass it around"
		       ++ (bottlesofbeer (n-1))		, otherwise```