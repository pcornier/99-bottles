
## Language Inferno Shell ##
---
- Author: Pete Elmore
- Date: 03/12/12
- Info: http
- Score:  (3.25 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-inferno-shell-2847.html
---

```#!/dis/sh
# Accepts an optional argument for a number of bottles to start at.
load std expr echo

fn pluralize_bottles() {
	b := $1^' bottles'
	if {~ $1 1} {
		b = '1 bottle'
	} {~ $1 0} {
		b = 'No more bottles'
	}
	echo $b
}

bottles = $1
if {no $bottles} { bottles = 99 }

for i in `{echo ${expr $bottles 1 seq}} {
	b := `{pluralize_bottles $i}
	bn := `{pluralize_bottles ${expr $i 1 -}} 

	echo $b of beer on the wall,
	echo $b of beer!
	echo Take one down, pass it around,
	echo $bn of beer on the wall.
	echo
}```