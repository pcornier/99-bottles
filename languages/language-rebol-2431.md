
## Language Rebol ##
---
- Author: Nicolas
- Date: 06/22/10
- Info: http
- Score:  (3.00 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rebol-2431.html
---

```REBOL []

s: [
	99 	;1
	" bottles of beer" ;2
	" on the wall"	;3
	", " 	;4
	".^/"	;5
	"Take one down and pass it around, "	;6
	98	;7
	" bottle of beer"	;8
	"no more"	;9
	"No more"	;10
	"Go to the store and buy some more, "	;11
	99	;12
]

sequence: [
	[1 2 3 4  1 2 5  6 7 2 3 5]	;97 times
	[1 2 3 4  1 2 5  6 7 8 3 5]
	[1 8 3 4  1 8 5  6 9 2 3 5]
	[10 2 3 4  9 2 5  11 12 2 3 5]
]

drink: does [print "" s/1: s/1 - 1 s/7: s/7 - 1]
loop 97 [ foreach n sequence/1 [prin pick s n] drink ]	
foreach seq next sequence [	foreach n seq [prin pick s n] drink ]		
halt```