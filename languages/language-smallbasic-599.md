
## Language SmallBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.11 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-smallbasic-599.html
---

```# SmallBasic version of 99 Bottles of beer (Bottles.bas)
# See http://smallbasic.sourceforge.net/
# Philipp Winterberg, http://www.winterbergs.de

a=" bottle(s) of beer":c=" on the wall":cls
for b=99 to 1 step -1
  ?b;a+c+",":?b;a+".":?"Take one down, pass it around,":?b-1;a+c+".":?
next```