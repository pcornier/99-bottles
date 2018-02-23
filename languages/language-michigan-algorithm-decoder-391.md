
## Language Michigan Algorithm Decoder ##
---
- Author: Eric S. Raymond
- Date: 04/20/05
- Info: n/a
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-michigan-algorithm-decoder-391.html
---

```By: Eric S. Raymond (http://www.catb.org/~esr/)

	THROUGH TAKEN,FOR I=100,-1,I.GE.2
	PRINT FORMAT WALL,I,I
	PRINT FORMAT DOWN
TAKEN	PRINT FORMAT LEFT,I
	PRINT FORMAT WALL1
	PRINT FORMAT DOWN
	PRINT FORMAT LEFT0
	VECTOR VALUES WALL=$1H0,I2,30H BOTTLES OF BEER ON THE WALL, ,I2,
      1 17H BOTTLES OF BEER,*$
	VECTOR VALUES DOWN=$34H0TAKE ONE DOWN AND PASS IT AROUND,*$
	VECTOR VALUES LEFT=$1H0,I2,17H BOTTLES OF BEER./*$
	VECTOR VALUES WALL1=$33H01 BOTTLE OF BEER ON THE WALL,, 1
      1 15H BOTTLE OF BEER*$
	VECTOR VALUES LEFT0=$19H00 BOTTLES OF BEER.*$
	END OF PROGRAM

This is Michigan Algorithm Decoder, commonly known as MAD, an Algol 58
variant dating from 1962 on the IBM 709 and now long extinct.  I'm
working on a retrocompiler for it, and this code has been tested and
works.```