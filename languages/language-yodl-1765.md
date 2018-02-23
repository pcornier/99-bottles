
## Language Yodl ##
---
- Author: Anonymous
- Date: 04/20/08
- Info: http
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-yodl-1765.html
---

```COMMENT(
  Your Own Document Language
  http://yodl.sourceforge.net/
)

DEFINECOUNTER(beer)(99)

DEFINEMACRO(bottles)(0)(\
  IFGREATER(beer)(1)(\
     COUNTERVALUE(beer) bottles\
  )(\
     IFGREATER(beer)(0)(\
        1 bottle\
     )(\
        no more bottles\
     )\
  )\
)

DEFINEMACRO(lines)(0)(
bottles() of beer on the wall, bottles() of beer.\
ADDTOCOUNTER(beer)(-1)
Take one down and pass it aound, bottles() of beer on the wall.
IFGREATER(beer)(0)(\
  lines()\
)(\
)\
)

lines()
No more bottles of beer on the wall, no more bottles of beer. 
Go to the store and buy some more, 99 bottles of beer on the wall.```