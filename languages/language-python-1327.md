
## Language Python ##
---
- Author: J Adrian Zimmer
- Date: 11/14/06
- Info: http
- Score:  (2.76 in 34 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-python-1327.html
---

```# Readable Python Version of "99 Bottles of Beer" Program
# Well, its readable if you know Python reasonably well.
# Public Domain by J Adrian Zimmer [[ jazimmer.net ]]

verse1 = lambda x: \
"""%s of beer on the wall, %s of beer.
Take one down, pass it around, %s of beer on the wall.
""" % (bottle(x),bottle(x),bottle(x-1))

verse2 = \
"""No more bottles of beer on the wall, no more bottles of beer.
Go to the store, buy some more, 99 bottles of beer on the wall.
"""

def verse(x):
    if x==0:     return verse2
    else:        return verse1(x)

def bottle(x):
    if x==0:   return "no more bottles"
    elif x==1: return str(x) + " bottle"
    else:      return str(x) + " bottles"

print "\n".join( [ verse(x) for x in range(99,-1,-1) ] )```