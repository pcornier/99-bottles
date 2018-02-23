
## Language Self ##
---
- Author: David Eddyshaw
- Date: 04/20/05
- Info: http
- Score:  (3.67 in 231 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-self-587.html
---

```"99 Bottles of Beer in Self
 (http://research.com.sun/self/)
 by David Eddyshaw, david@jeddyshaw.freeserve.co.uk
"
traits integer _AddSlots: (|
  bottles = ((= 0
              ifTrue: ['No more bottles']
               False: [= 1
                       ifTrue: ['1 bottle']
                        False: [asString, ' bottles']]),
              ' of beer')
|).
99 downTo: 1 Do: [
 | :n |
 (n bottles, ' on the wall;\n',
  n bottles, '.\nTake one down; pass it around:\n',
  (n - 1) bottles, ' on the wall.\n\n') print.
].```