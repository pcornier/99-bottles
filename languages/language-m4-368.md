
## Language M4 ##
---
- Author: Ozan S. Yigit
- Date: 04/20/05
- Info: n/a
- Score:  (2.73 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-m4-368.html
---

```A Unix macro language.

# by Ozan S. Yigit" (oz@sni.ca)
#
define(BOTTLES,`ifelse($1, 0, no more bottles,
			$1, 1, one bottle, $1 bottles) of beer') dnl
define(BEER,`ifelse(eval($1 > 0), 1,
`BOTTLES($1) on the wall, BOTTLES($1)
take one down, pass it around
BOTTLES(eval($1 - 1)) on the wall.

BEER(eval($1 - 1))')') dnl

BEER(10)```