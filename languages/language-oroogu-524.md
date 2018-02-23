
## Language Oroogu ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-oroogu-524.html
---

```#
# beer.or
# Prints the lyrics of "Ninety-Nine Bottles of Beer"
#
b = (99 .. 1) (
        d / (<b, "bottles of beer on the wall, ")
        d / (<b, "bottles of beer.\n")
        d / ("Take one down and pass it around, ") 
        d / (b - 1, "bottles of beer.\n\n")
) # b```