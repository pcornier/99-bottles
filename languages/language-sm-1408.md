
## Language SM ##
---
- Author: Gary Mamon
- Date: 03/05/07
- Info: http
- Score:  (3.02 in 118 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sm-1408.html
---

```99bottles # sing song 99 bottles of beer on the wall
		define n 99
		set i = 1, $n
		set bottle = i == 1 ? 'bottle' : 'bottles'
		define bottle bottles
		while {$n > 0} {
			echo $n $bottle of beer on the wall,
			echo $n $bottle of beer,
			echo take one down, pass it around,
			if ($n == 1) {
				echo no more bottles of beer on the wall.
				return
			} 
			define n ($n-1)
			define bottle (bottle[$n-1])
			echo $n $bottle of beer on the wall.
			echo
		}```