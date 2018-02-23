
## Language Express ##
---
- Author: Lori Smallwood
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-express-250.html
---

```Custom language used by IRI Software

"  Language:  Express
"  Written by Lori Smallwood, IRI Software
"  April 12, 1997

vrb _beer  int
_beer = 99

while _beer gt 0
  do
    shw joinchars(_beer ' bottles of beer on the wall,')
    shw joinchars(_beer ' bottles of beer... ')
    shw 'Take one down, pass it around,'
    _beer = _beer - 1
    shw joinchars(_beer ' bottles of beer on the wall!')
  doend```