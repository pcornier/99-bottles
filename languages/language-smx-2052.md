
## Language SMX ##
---
- Author: Roberto Bazzano
- Date: 04/17/09
- Info: http
- Score:  (3.67 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-smx-2052.html
---

```%expand%
%null(
	*** PSX version - formerly SMX ***
	
	%define(bottles,'%if(%equ(%par%,'0),'no more,'%par%) bottle%if(%gt(%par%,1),'s) of beer,par)

	%set(out,%null%)
	%set(iCnt,99)
	%while('%gt(%icnt%,0),
		 '%let(out,%out%%bottles(%iCnt%) on the wall\, %bottles(%iCnt%).%crlf%)
		  %let(iCnt,%isub(%iCnt%,'1))
		  %let(out,%out%Take one down and pass it around\, %bottles(%iCnt%) on the wall.%crlf%%crlf%)
	)
	%let(out,%out%No more bottles of beer on the wall\, no more bottles of beer.%crlf%)
	%let(out,%out%Go to the store and buy some more\, 99 bottles of beer on the wall.%crlf%)
)%out%```