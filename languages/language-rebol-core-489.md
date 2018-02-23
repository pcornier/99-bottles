
## Language REBOL/Core ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.26 in 19 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-rebol-core-489.html
---

```; REBOL/Core version of 99 Bottles of beer (Bottles.r)
; See http://www.rebol.com/docs/core23/rebolcore.html
; Philipp Winterberg, http://www.winterbergs.de

REBOL [Title: "99 Bottles of beer"]

for b 99 1 -1 [
    prin b print " bottle(s) of beer on the wall,"
    prin b print " bottle(s) of beer."
    print "Take one down, pass it around,"
    prin b - 1 print " bottle(s) of beer on the wall."
    print ""
]```