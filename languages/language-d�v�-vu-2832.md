
## Language D�v� Vu ##
---
- Author: Robin Wellner
- Date: 02/17/12
- Info: https
- Score:  (3.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-d�v�-vu-2832.html
---

```plural i:
	if = 1 i "" "s"

bottles i:
	local 's' plural i
	.( i " bottle"s" of beer on the wall, " i " bottle"s" of beer," )
	.\ "You take one down, pass it around, "
	set 'i' - i 1
	if i:
		set 's' plural i
		.( i " bottle"s" of beer on the wall." )
		bottles i
	else:
		. "no more bottles of beer on the wall, no more bottles of beer."
		. "Go to the store and buy some more, 99 bottles of beer on the wall."

bottles 99```