
## Language Amanda ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 170 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-amanda-27.html
---

```Amanda is a DOS version of Miranda.
/*
   I made some changes to the miranda script by Tim Walls.
   
   Changes by Gavin Spearhead (wieger1@noord.bart.nl)
			                                           */


bottlesofbeer :: num -> [char]

bottlesofbeer n = "\nNo more bottles of beer on the wall, \n"
                  ++ "no more bottles of beer.\n"  , if n = 0
                = "\nOne bottle of beer on the wall, one bottle of beer,\n"
                  ++ "Take one down and pass it around"
                  ++ (bottlesofbeer (n-1))         , if n = 1
                = "\n" ++ itoa(n) ++ " bottles of beer on the wall, "
                       ++ itoa(n)
                       ++ " bottles of beer,\nTake one down and pass it around"
                       ++ (bottlesofbeer (n-1))         , otherwise```