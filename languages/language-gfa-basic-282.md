
## Language GFA Basic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.14 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gfa-basic-282.html
---

```// GFA Basic version of 99 Bottles of beer (Bottles.gfa)
// See http://www.baphead.freeserve.co.uk/download.html
// Philipp Winterberg, http://www.winterbergs.de

SCREEN 18
CLS
b := 99
WHILE b > 0
  ? b; " bottle(s) of beer on the wall,"
  ? b; " bottle(s) of beer."
  ? "Take one down, pass it around,"
  b--
  ? b; " bottle(s) of beer on the wall."
  ?
WEND```