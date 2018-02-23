
## Language Py ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.00 in 19 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-py-572.html
---

```-- Py version of 99 Bottles of beer (Bottles.py)
-- See http://www.lanset.com/dcuny/py.htm
-- Philipp Winterberg, http://www.winterbergs.de
  
var a = " bottle(s) of beer", c = " on the wall"
var d = "Take one down, pass it around,"
for b = 99 to 1 by -1 do 
  printf("%d%s%s,\n%d%s.\n%s\n%d%s%s.\n\n", b, a, c, b, a, d, (b - 1), a, c)
end for```