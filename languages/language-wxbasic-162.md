
## Language wxBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.31 in 26 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-wxbasic-162.html
---

```// wxBasic version of 99 Bottles of beer (Bottles.wx)
// See http://wxbasic.sourceforge.net/
// Philipp Winterberg, http://www.winterbergs.de

a$=" bottle(s) of beer" : A$= a$ + " on the wall"
B$=".\nTake one down, pass it around,\n"
for b = 99 to 1 step -1
  ? b; A$; ",\n"; b; a$; B$; b-1; A$; ".\n"
next```