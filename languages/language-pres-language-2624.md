
## Language PReS Language ##
---
- Author: Romain VALERI
- Date: 03/28/11
- Info: http
- Score:  (2.91 in 11 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-pres-language-2624.html
---

```RECORD
INTERNAL
	ALPHA	iaText			L20000
	ALPHA	iaLine			L100
	ALPHA	iaData1			L100
	ALPHA	iaData2			L100
	ALPHA	iaData3			L100
	ALPHA	iaI				L7
	NUMERIC	inI
	
START
	iaData1 = "@ bottles of beer on the wall, @ bottles of beer."
	iaData2 = "Take one down and pass it around, @ bottles of beer on the wall."
	iaData3 = "Go to the store and buy some more, 99 bottles of beer on the wall."
	
	inI = 99
	WHILE (inI GE 0) {
		IF (inI NE 99) APPEND iaText, "\n\n"
		iaLine = iaData1
		CONVERT iaI, inI, 'L'
		IF (iaI EQ "0") iaI = "no more"
		REPLACE iaLine, "@", iaI L=CALCULATE
		IF (inI EQ 0) iaLine[0] L=1 = "N"
		IF (inI EQ 1) REPLACE iaLine, "bottles", "bottle"
		APPEND iaText, iaLine
		inI -= 1
		iaLine = iaData2
		CONVERT iaI, inI, 'L'
		IF (iaI EQ "0") iaI = "no more"
		REPLACE iaLine, "@", iaI L=CALCULATE
		IF (inI EQ 1) REPLACE iaLine, "bottles", "bottle"
		IF (inI EQ -1) iaLine = iaData3
		APPEND iaText, iaLine, "\n"
	}
	iaText = iaText L=CALCULATE
	WRITE "out.txt", iaText L=CALCULATE
EXIT```