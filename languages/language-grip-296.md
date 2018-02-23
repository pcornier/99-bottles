
## Language GRIP ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 113 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-grip-296.html
---

```$$ GRIP is a scripting language for the Unigraphics CAD system.
NUMBER/ n
DO/loop1:,n,0,98
PRINT/istr(99-n)+' Bottles of beer on the wall'
PRINT/istr(99-n)+' Bottles of beeeer'
PRINT/'Take one down, pass it around'
IFTHEN/n==98
	PRINT/'No bottles of beer on the wall'
ELSE/
	PRINT/istr(98-n)+' Bottles of beer on the wall'
ENDIF/
loop1:
PRINT/'No bottles of beer on the wall'
PRINT/'No bottles of beeeer'
PRINT/'Go to the store and buy some more'
PRINT/'No bottles of beer on the wall'
HALT/```