
## Language MiniD ##
---
- Author: Jarrett Billingsley
- Date: 06/09/09
- Info: http
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-minid-2120.html
---

```module beer

function bottleStr(num) =
	num == 1 ? "bottle" : "bottles"

function num(num)
{
	if(num == 0)
		return "no more"
	else if(num == -1)
		return "99"
	else
		return toString(num)
}

function action(num) =
	num == 0 ? "Go to the store and buy some more" : "Take one down and pass it around"

function cap(str) =
	str[0].toUpper() ~ str[1..]

function sing(i = 99)
{
	writefln("{} {} of beer on the wall, {} {1} of beer.", cap(num(i)), bottleStr(i), num(i))
	writefln("{}, {} {} of beer on the wall.\n", action(i), num(i - 1), bottleStr(i - 1))

	if(i != 0)
		return sing(i - 1)
}

sing()```