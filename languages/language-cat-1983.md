
## Language Cat ##
---
- Author: Tim Locke
- Date: 02/19/09
- Info: http
- Score:  (3.52 in 130 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cat-1983.html
---

```// 99-bottles-of-beer.cat
// by Tim Locke

define pluralize
{
	1 eq not [ "s" write ] [ "" write ] if
}

define bottles-of-beer
{
	0 eq
		[ "No more" ]
		[ dup -1 eq [ 99 ] [ dup ] if ] if write
	" bottle" write dup pluralize " of beer" write
}

define verse
{
	dup bottles-of-beer " on the wall," writeln
	dup bottles-of-beer "," writeln
	dup 0 eq
		[ "Go to the store and buy some more," ]
		[ "If " write
		  dup 1 eq [ "that" ] [ "one of those" ] if write
		  " bottle" write dup pluralize " should happen to fall,"
		] if writeln
	1 - dup bottles-of-beer " on the wall." writeln
	"" writeln
}

define beer-song
{
	99 [ verse ] [ dup 0 gteq ] while
}

beer-song```