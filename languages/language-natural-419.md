
## Language Natural ##
---
- Author: Chris Bednara
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-natural-419.html
---

```* PGM-ID: BEER
* AUTHOR: CHRIS BEDNARA
* COMMENT: NATURAL '99 BOTTLES OF BEER ON THE WALL' CODE
*
*-------------------------------------------------------
DEFINE DATA
	LOCAL
	  01 #BOTTLES  (I2)
END-DEFINE
*
FOR #BOTTLES 99 TO 2 STEP -1
	IF #BOTTLES < 98
	  WRITE #BOTTLES ' BOTTLES OF BEER ON THE WALL'
	  WRITE ' '
	END-IF
*	
	WRITE #BOTTLES ' BOTTLES OF BEER ON THE WALL'
	WRITE #BOTTLES ' BOTTLES OF BEER'
	WRITE 'TAKE ONE DOWN, PASS IT AROUND'
END-FOR
*
WRITE '1 BOTTLE OF BEER ON THE WALL'
WRITE ' '
WRITE '1 BOTTLE OF BEER ON THE WALL'
WRITE '1 BOTTLE OF BEER'
WRITE 'TAKE IT DOWN, PASS IT AROUND'
WRITE 'NO MORE BOTTLES OF BEER ON THE WALL'
WRITE ' '
WRITE 'NO MORE BOTTLES OF BEER ON THE WALL'
WRITE 'NO MORE BOTTLES OF BEER'
WRITE 'GO TO THE STORE AND BUY SOME MORE'
WRITE '99 BOTTLES OF BEER'
END
WRITE 'TAKE ONE DOWN, PASS IT AROUND'```