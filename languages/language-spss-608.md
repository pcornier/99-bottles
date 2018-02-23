
## Language SPSS ##
---
- Author: Keith Chidsey
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-spss-608.html
---

```****************************************************************************
* File:			beer.sps
* Source Code:	SPSS 5.0
* System/OS:		HP/UNIX
* Written By:		Keith Chidsey (keithc@gsbc.com)
*
* Write out lyrics to "99 Bottles of Beer on the Wall" to file <beersong>.
****************************************************************************

FILE HANDLE    	DUMMY/NAME'BEER.SPS'/LRECL=80
FILE HANDLE    	BEERSONG/NAME'BEERSONG'/LRECL=80

DATA LIST 		FILE=DUMMY FIXED RECORDS=1/
				DUMMY(A1)

STRING			LYRIC1,LYRIC2,SPACE(A80)

LOOP			BOTTLES=99 TO 1 BY -1
COMPUTE		LYRIC1=CONCAT(STRING(BOTTLES,F2),
 				' BOTTLES OF BEER ON THE WALL, ',
				STRING(BOTTLES,F2),
				' BOTTLES OF BEER.')
COMPUTE		LYRIC2=CONCAT('TAKE ONE DOWN, PASS IT AROUND, ',
				STRING(BOTTLES-1,F2),
				' BOTTLES OF BEER ON THE WALL.')
WRITE			OUTFILE=BEERSONG RECORDS=3/
				LYRIC1/LYRIC2/SPACE
END LOOP
EXECUTE

FINISH```