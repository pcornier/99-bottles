
## Language NeoBook ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.41 in 27 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-neobook-422.html
---

```. NeoBook version of 99 Bottles of beer (Bottles.neo)
. See http://christian.chauvin.free.fr/neobook.htm
. Philipp Winterberg, http://www.winterbergs.de
.
. How to use:
. 1. Create a new presentation
. 2. Import this code snippet as Action
. 3. Run and enjoy :-)

SetVar "[b]" "99"
SetVar "[a]" " bottle(s) of beer"
SetVar "[c]" " on the wall"
SetVar "[d]" "|Take one down, pass it around,|"
While "[b]" ">" "0"
  Math "[b]-1" "0" "[e]"
  StickyNote "-1" "-1" "[b][a][c],|[b][a].[d][e][a][c]." "3000"
  Math "[b]-1" "0" "[b]"
EndWhile
Exit "" ""```