
## Language Mercur ##
---
- Author: Johan Lindemann
- Date: 07/05/05
- Info: http
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mercur-779.html
---

```def dfB=99
newtab; coln Song; Song string " "; &tab norownames
Song=substring((dfB-rcum(transp((0,1,0):*(dfB-1),0,1))) 1 8)+" bottle" when transp((1,1,0):*dfB)
Song=Song+"s" when (Song <> "1 b*") and (Song <> 0/0)
Song="no more bottles" when Song equal "0 b*"
Song=Song+" of beer on the wall, "+Song+" of beer." when rshift(1 Song) equal 0/0
Song="Take one down, pass it around, "+Song+" of beer on the wall." when rshift(-1 Song) equal 0/0
textf('dfB'+" bottles of beer") title 99
print```