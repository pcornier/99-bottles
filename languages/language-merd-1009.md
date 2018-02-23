
## Language merd ##
---
- Author: qstone
- Date: 01/10/06
- Info: http
- Score:  (2.00 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-merd-1009.html
---

```(99..0).each( qty->
	if (qty>1) then 
		"%d bottles of beer on the wall, %d bottles of beer\n".printf(qty,qty)
		if (qty>2) then
			suffix="%d bottles of beer on the wall.\n".printf(qty-1)
		else
			suffix = "1 bottle of beer on the wall.\n"
	else
		if (qty==1)
			println("1 bottle of beer on the wall, 1 bottle of beer.")
			suffix = "no more beer on the wall!"
	"Take one down, pass it around,%s\n".printf(suffix)
)```