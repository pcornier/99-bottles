
## Language ComWic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.93 in 14 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-comwic-142.html
---

```> ComWic version of 99 Bottles of beer (Bottles.cwx)
> See http://www.tcdn.teiher.gr/upload/viewfiles.asp?catid=03
> Philipp Winterberg, http://www.winterbergs.de
>
CLS
MOV 1,99
*LOOP
ECHO 1
ECHO
> bottle(s) of beer on the wall,
ECHO 1
ECHO
> bottle(s) of beer.
> Take one down, pass it around,
SUB 1,1
ECHO 1
ECHO
> bottle(s) of beer on the wall.
IF NUM,$1,<,1,END WICHTELCHEN
> 
GOTO LOOP```