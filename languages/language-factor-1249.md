
## Language Factor ##
---
- Author: John Kimber
- Date: 08/23/06
- Info: http
- Score:  (3.79 in 144 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-factor-1249.html
---

```
IN: 99bottles
USING: sequences kernel prettyprint io namespaces math ;
	
: verse
	 dup dup pprint " bottles of beer on the wall, " write
		pprint  " bottles of beer." print
		"Take one down and pass it around, " write
		1- pprint " bottles of beer on the wall." print	terpri
		;

: verses-99-2  
	2 100 <reversed> head-slice* [ verse ] each ;
		
: verse-1
	 "1 bottle of beer on the wall, 1 bottle of beer." print
		"Take one down and pass it around, no more bottles of beer on the wall." print terpri
		;
		
: verse-0
	"No more bottles of beer on the wall, no more bottles of beer." print
		"Go to the store and buy some more, 99 bottles of beer on the wall." print terpri
		;
		
	verses-99-2
	verse-1
	verse-0```