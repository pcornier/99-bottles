
## Language iForth ##
---
- Author: Marcel Hendrix
- Date: 09/25/05
- Info: http
- Score:  (3.00 in 54 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-iforth-889.html
---

```\ iForth version of 99 Bottles of beer
: BOB ( n -- ) 
	DUP IF DUP . ELSE ." no more " ENDIF ." bottle" ?S ."  of beer" ;

: sing ( -- )
	 1 99 DO 
		 CR I BOB ."  on the wall, " I BOB [CHAR] . EMIT
	      	 CR ." Take one down, pass it around, " 
		 I 1- BOB ."  on the wall."
	-1 +LOOP ;```