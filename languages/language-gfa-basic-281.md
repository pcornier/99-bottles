
## Language GFA Basic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.22 in 23 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gfa-basic-281.html
---

```// GFA Basic for Windows version of 99 Bottles of beer (Bottles.gfw)
// See http://www.beepcastle.de/gfa/index.htm#trial
// Philipp Winterberg, http://www.winterbergs.de

OPENW #1
b = 99
WHILE b > 0
  ? b; " bottle(s) of beer on the wall,"
  ? b; " bottle(s) of beer."
  ? "Take one down, pass it around,"
  b--
  ? b; " bottle(s) of beer on the wall."; CHR$(13,10)
WEND
KEYGET a%
CLOSEW #1
QUIT```