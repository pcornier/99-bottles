
## Language Snobol ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.90 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-snobol-602.html
---

```* 99 BOTTLES OF BEER IN SNOBOL (UNTESTED)
         BEER = 99
MOREBEER OUTPUT = BEER ' BOTTLES OF BEER ON THE WALL'
         OUTPUT = BEER ' BOTTLES OF BEER'
         OUTPUT = 'TAKE ONE DOWN, PASS IT AROUND'
         BEER = BEER - 1
         OUTPUT = BEER ' BOTTLES OF BEER ON THE WALL'
         GT(BEER,0)   : S(MOREBEER)
         OUTPUT = 'NO MORE BOTTLES OF BEER ON THE WALL'
         OUTPUT = 'NO MORE BOTTLES OF BEER'
         OUTPUT = 'GO TO THE STORE AND BUY SOME MORE'
         OUTPUT = '99 BOTTLES OF BEER'
END```