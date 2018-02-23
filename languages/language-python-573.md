
## Language Python ##
---
- Author: Oliver Xymoron
- Date: 04/20/05
- Info: n/a
- Score:  (2.83 in 104 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-python-573.html
---

```By Oliver Xymoron (133 Bytes)

a,t="\n%s bottles of beer on the wall","\nTake one down, pass it around"
for d in range(99,0,-1):print(a%d*2)[:-12]+t+a%(d-1 or'No')```