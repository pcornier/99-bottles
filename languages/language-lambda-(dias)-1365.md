
## Language Lambda (DIAS) ##
---
- Author: Oliver Storch
- Date: 01/03/07
- Info: http
- Score:  (1.67 in 6 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-lambda-(dias)-1365.html
---

```/ 2006, Oliver Storch
/ written while getting in touch with the language lambda,
/ needed for a seminar in pattern recognition

+99=x
loop countdown n 1 99
	IF x<2 THEN
		PLF 1; OUT x; SOUT ^bottle of beer on the wall,|10|^
		OUT x; SOUT ^bottle of beer,|10|^
		SOUT ^     Take it down, and pass it around,|10|^
		SOUT ^     No more bottles of beer.^
	ELSE   
		OUT x; SOUT ^bottles of beer on the wall,|10|^
		OUT x; SOUT ^bottles of beer.|10|^
		SOUT ^     Take one down, and pass it around,|10|^
		+x-1=x
		IF x<2 THEN 
			OUT x; SOUT ^bottle of beer.|10|^
		ELSE
/ change last "0" of the following line to "1" for "less" output
			OUT x; SOUT ^bottles of beer.^; PLF 2 0
		ENDIF
	ENDIF
end countdown```