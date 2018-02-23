
## Language Forth ##
---
- Author: Dan Reish
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-forth-263.html
---

```\ Forth version of the 99 Bottles program.
\ Dan Reish, dreish@izzy.net

: .bottles ( n -- n-1 )
   dup 1 = IF  ." One bottle of beer on the wall," CR
	       ." One bottle of beer," CR
	       ." Take it down," 
   ELSE  dup . ." bottles of beer on the wall," CR
	 dup . ." bottles of beer," CR
	 ." Take one down," 
   THEN
   CR
   ." Pass it around," CR
   1-
   ?dup IF  dup 1 = IF  ." One bottle of beer on the wall;" 
	    ELSE  dup . ." bottles of beer on the wall;" 
	    THEN
	ELSE  ." No more bottles of beer on the wall." 
   THEN
   CR
;

: nbottles ( n -- )
  BEGIN  .bottles  ?dup NOT UNTIL
;

99 nbottles```