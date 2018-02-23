
## Language EXEC ##
---
- Author: Torbj�rn Vaaje
- Date: 04/20/05
- Info: n/a
- Score:  (2.94 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-exec-248.html
---

```* EXEC version of 99 Bottles of beer program
* By Torbj�rn Vaaje (<a href="mailto:etotv@eto.ericsson.se">etotv@eto.ericsson.se</a>)
*
&BEERS = 99
&S = ES
&LOOP 5 99
&TYPE &BEERS BOTTL&S OF BEER ON THE WALL, &BEERS BOTTL&S OF BEER.
&BEERS = &BEERS - 1
&IF &BEERS = 1 &S = E
&IF &BEERS = 0 &BEERS = NO_MORE
&TYPE TAKE ONE DOWN AND PASS IT AROUND, &BEERS BOTTL&S OF BEER ON THE WALL```