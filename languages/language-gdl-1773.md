
## Language GDL ##
---
- Author: Daniele Orlandelli
- Date: 05/02/08
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gdl-1773.html
---

```!! 99 Bottles v.1.2
!! 2D script
for x=99 to 1 step -1
	if x<>1 then 
		bottle="bottles" 
	else
		bottle="bottle"
	endif
    text2 0,0,x
    text2 1,0,bottle+" of beer on the wall,"
    text2 10,0,x
    text2 11,0,bottle+" of beer"
    add2  0,-1
    text2 0,0,"take one down and pass it around,"
    add2  0,-1
    text2 0,0,x-1
	if x-1<>1 then 
		remBottle="bottles" 
	else
		remBottle="bottle"
	endif
    text2 1,0,remBottle+" of beer on the wall"
    add2  0,-1.5
next x```