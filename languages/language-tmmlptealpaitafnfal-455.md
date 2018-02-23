
## Language TMMLPTEALPAITAFNFAL ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.05 in 20 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tmmlptealpaitafnfal-455.html
---

```// TMMLPTEALPAITAFNFAL version of 99 Bottles of beer
//  "The Multi-Million Language Project To End All Language 
//   Projects And Isn't That A Fine Name For A Language"
// Philipp Winterberg, http://www.winterbergs.de
// 
// How to use:
// 1. Install TMMLPTEALPAITAFNFAL   (http://www.p-nand-q.com/t.htm)
// 2. Set system date to 2002.06.28 (important!!!)
// 3. Run and enjoy ;)
//
            DECLARE CELL 100 AS READPOS
            DECLARE CELL 99 AS B
            DECLARE 10 AS NEWLINE
            DECLARE 0 AS ZERO
            WRITE CHAR NEWLINE
            COPY 99 TO B
            WRITE INTEGER B
            WHILE B > ZERO DO GOSUB 100
            STOP
LINE 100:   COPY "bottle(s) of beer on the wall," TO CELL 0
	    COPY 0 TO READPOS
	    WRITE INTEGER B
	    WHILE READPOS INDIRECT DO GOSUB 200
	    WRITE CHAR NEWLINE
	    WRITE INTEGER B
	    COPY "bottle(s) of beer.            " TO CELL 0
	    COPY 0 TO READPOS
	    WHILE READPOS INDIRECT DO GOSUB 200
	    WRITE CHAR NEWLINE
	    COPY "Take one down, pass it around," TO CELL 0
	    COPY 0 TO READPOS
	    WHILE READPOS INDIRECT DO GOSUB 200
	    WRITE CHAR NEWLINE
	    COPY "bottle(s) of beer on the wall." TO CELL 0
	    COPY 0 TO READPOS
	    SUB 1 FROM B
	    WRITE INTEGER B
	    WHILE READPOS INDIRECT DO GOSUB 200
	    WRITE CHAR NEWLINE
	    WRITE CHAR NEWLINE
	    RETURN
LINE 200:   WRITE CHAR READPOS INDIRECT
	    ADD 1 TO READPOS
	    RETURN```