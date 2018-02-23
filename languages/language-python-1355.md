
## Language Python ##
---
- Author: Ezequiel Pochiero
- Date: 12/18/06
- Info: http
- Score:  (2.41 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-python-1355.html
---

```#!/usr/bin/env python
# -*- coding: iso-8859-1 -*-
"""99 Bottles of Beer, by Ezequiel Pochiero. (Requires Python 2.5)"""

song=''
for n in range(99,0,-1):
    s1= `n`+(' bottles' if n!=1 else ' bottle')
    s2 = (`n-1` if n-1!=0 else 'no more')+(' bottles' if n!=2 else ' bottle')
    song += '%s of beer on the wall, %s of beer. \n\
Take one down and pass it around, %s of beer on the wall.\n\n' % (s1,s1,s2)

song += 'No more bottles of beer on the wall, no more bottles of beer. \n\
Go to the store and buy some more, 99 bottles of beer on the wall.'

print song```