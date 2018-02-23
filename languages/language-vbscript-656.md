
## Language VBScript ##
---
- Author: Jonathan Harrison
- Date: 05/17/05
- Info: n/a
- Score:  (2.92 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vbscript-656.html
---

```'Licensed under a modified X11/FSF license.
'Copyright � 2005 Jonathan Harrison.  All rights reserved.

ON ERROR RESUME NEXT

CONST BEER = " of beer"
CONST WALL = " on the wall"
CONST TAKE = "...take "
CONST DOWN = " down, pass it around: "
CONST LINES = "569"
CONST VERSION = "The Bottles Song, v2005.04.22.0218"

BERMUDA = "FALSE"
COUNT = 99
COUNTING = 0
COUNTEDING = 0
GATE = "OPEN"
LEVEL = 0
LEVELING = 0
TENNER = 0
TENNERED = 0
UNBERMUDA = "FALSE"

	DO
HYPHEN = "-"
HYPHENED = "-"
TELEPORT = ""
VIEWBAR = "Press ""f"" to exit or ""h"" for help."
BOTTLES = " bottles"
DESCRIPTOR = "one"
BOTTLED = " bottles"
		IF COUNT < 2 THEN
BOTTLES = " bottle"
DESCRIPTOR = "it"
		ELSE
		IF COUNT < 3 THEN
BOTTLED = " bottle"
		END IF
		END IF

COUNTED = (COUNT - 1)

		IF ((COUNT / 9) = 10) OR ((COUNT / 8) = 10) OR ((COUNT / 7) = 10) OR ((COUNT / 6) = 10) OR ((COUNT
/ 5) = 10) OR ((COUNT / 4) = 10) OR ((COUNT / 3) = 10) OR ((COUNT / 2) = 10) OR ((COUNT / 1) = 10)
THEN
HYPHEN = ""
		ELSE
		END IF

COUNTING = COUNT
TENNER = 0
		DO
			IF COUNTING > 9 THEN
COUNTING = (COUNTING - 10)
TENNER = (TENNER + 1)
			ELSE
			END IF
		IF COUNTING < 10 THEN EXIT DO
		LOOP

		IF COUNTING = 9 THEN
DISCIPLE = "nine"
		ELSE
		IF COUNTING = 8 THEN
DISCIPLE = "eight"
		ELSE
		IF COUNTING = 7 THEN
DISCIPLE = "seven"
		ELSE
		IF COUNTING = 6 THEN
DISCIPLE = "six"
		ELSE
		IF COUNTING = 5 THEN
DISCIPLE = "five"
		ELSE
		IF COUNTING = 4 THEN
DISCIPLE = "four"
		ELSE
		IF COUNTING = 3 THEN
DISCIPLE = "three"
		ELSE
		IF COUNTING = 2 THEN
DISCIPLE = "two"
		ELSE
		IF COUNTING = 1 THEN
DISCIPLE = "one"
		ELSE
		IF COUNTING = 0 THEN
DISCIPLE = ""
		ELSE
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF

		IF TENNER = 9 THEN
NOMEN = "Ninety"&HYPHEN
OMEN = "ninety"&HYPHEN
		ELSE
		IF TENNER = 8 THEN
NOMEN = "Eighty"&HYPHEN
OMEN = "eighty"&HYPHEN
		ELSE
		IF TENNER = 7 THEN
NOMEN = "Seventy"&HYPHEN
OMEN = "seventy"&HYPHEN
		ELSE
		IF TENNER = 6 THEN
NOMEN = "Sixty"&HYPHEN
OMEN = "sixty"&HYPHEN
		ELSE
		IF TENNER = 5 THEN
NOMEN = "Fifty"&HYPHEN
OMEN = "fifty"&HYPHEN
		ELSE
		IF TENNER = 4 THEN
NOMEN = "Forty"&HYPHEN
OMEN = "forty"&HYPHEN
		ELSE
		IF TENNER = 3 THEN
NOMEN = "Thirty"&HYPHEN
OMEN = "thirty"&HYPHEN
		ELSE
		IF TENNER = 2 THEN
NOMEN = "Twenty"&HYPHEN
OMEN = "twenty"&HYPHEN
		ELSE
		IF TENNER = 1 THEN
			IF COUNTING = 9 THEN
DISCIPLE = "ineteen"
NOMEN = "N"
OMEN = "n"
			ELSE
			IF COUNTING = 8 THEN
DISCIPLE = "ighteen"
NOMEN = "E"
OMEN = "e"
			ELSE
			IF COUNTING = 7 THEN
DISCIPLE = "eventeen"
NOMEN = "S"
OMEN = "s"
			ELSE
			IF COUNTING = 6 THEN
DISCIPLE = "ixteen"
NOMEN = "S"
OMEN = "s"
			ELSE
			IF COUNTING = 5 THEN
DISCIPLE = "ifteen"
NOMEN = "F"
OMEN = "f"
			ELSE
			IF COUNTING = 4 THEN
DISCIPLE = "ourteen"
NOMEN = "F"
OMEN = "f"
			ELSE
			IF COUNTING = 3 THEN
DISCIPLE = "hirteen"
NOMEN = "T"
OMEN = "t"
			ELSE
			IF COUNTING = 2 THEN
DISCIPLE = "welve"
NOMEN = "T"
OMEN = "t"
			ELSE
			IF COUNTING = 1 THEN
DISCIPLE = "leven"
NOMEN = "E"
OMEN = "e"
			ELSE
			IF COUNTING = 0 THEN
DISCIPLE = "en"
NOMEN = "T"
OMEN = "t"
			ELSE
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
		ELSE
		IF TENNER = 0 THEN
			IF COUNTING = 9 THEN
DISCIPLE = "ine"
NOMEN = "N"
OMEN = "n"
			ELSE
			IF COUNTING = 8 THEN
DISCIPLE = "ight"
NOMEN = "E"
OMEN = "e"
			ELSE
			IF COUNTING = 7 THEN
DISCIPLE = "even"
NOMEN = "S"
OMEN = "s"
			ELSE
			IF COUNTING = 6 THEN
DISCIPLE = "ix"
NOMEN = "S"
OMEN = "s"
			ELSE
			IF COUNTING = 5 THEN
DISCIPLE = "ive"
NOMEN = "F"
OMEN = "f"
			ELSE
			IF COUNTING = 4 THEN
DISCIPLE = "our"
NOMEN = "F"
OMEN = "f"
			ELSE
			IF COUNTING = 3 THEN
DISCIPLE = "hree"
NOMEN = "T"
OMEN = "t"
			ELSE
			IF COUNTING = 2 THEN
DISCIPLE = "wo"
NOMEN = "T"
OMEN = "t"
			ELSE
			IF COUNTING = 1 THEN
DISCIPLE = "ne"
NOMEN = "O"
OMEN = "o"
			ELSE
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
		ELSE
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF

		IF ((COUNTED / 9) = 10) OR ((COUNTED / 8) = 10) OR ((COUNTED / 7) = 10) OR ((COUNTED / 6) = 10) OR
((COUNTED / 5) = 10) OR ((COUNTED / 4) = 10) OR ((COUNTED / 3) = 10) OR ((COUNTED / 2) = 10) OR
((COUNTED / 1) = 10) THEN
HYPHENED = ""
		ELSE
		END IF

COUNTEDING = COUNTED
TENNERED = 0
		DO
			IF COUNTEDING > 9 THEN
COUNTEDING = (COUNTEDING - 10)
TENNERED = (TENNERED + 1)
			ELSE
			END IF
		IF COUNTEDING < 10 THEN EXIT DO
		LOOP

		IF COUNTEDING = 9 THEN
DISCIPLED = "nine"
		ELSE
		IF COUNTEDING = 8 THEN
DISCIPLED = "eight"
		ELSE
		IF COUNTEDING = 7 THEN
DISCIPLED = "seven"
		ELSE
		IF COUNTEDING = 6 THEN
DISCIPLED = "six"
		ELSE
		IF COUNTEDING = 5 THEN
DISCIPLED = "five"
		ELSE
		IF COUNTEDING = 4 THEN
DISCIPLED = "four"
		ELSE
		IF COUNTEDING = 3 THEN
DISCIPLED = "three"
		ELSE
		IF COUNTEDING = 2 THEN
DISCIPLED = "two"
		ELSE
		IF COUNTEDING = 1 THEN
DISCIPLED = "one"
		ELSE
		IF COUNTEDING = 0 THEN
DISCIPLED = ""
		ELSE
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF

		IF TENNERED = 9 THEN
OMENED = "ninety"&HYPHENED
		ELSE
		IF TENNERED = 8 THEN
OMENED = "eighty"&HYPHENED
		ELSE
		IF TENNERED = 7 THEN
OMENED = "seventy"&HYPHENED
		ELSE
		IF TENNERED = 6 THEN
OMENED = "sixty"&HYPHENED
		ELSE
		IF TENNERED = 5 THEN
OMENED = "fifty"&HYPHENED
		ELSE
		IF TENNERED = 4 THEN
OMENED = "forty"&HYPHENED
		ELSE
		IF TENNERED = 3 THEN
OMENED = "thirty"&HYPHENED
		ELSE
		IF TENNERED = 2 THEN
OMENED = "twenty"&HYPHENED
		ELSE
		IF TENNERED = 1 THEN
			IF COUNTEDING = 9 THEN
DISCIPLED = "ineteen"
OMENED = "n"
			ELSE
			IF COUNTEDING = 8 THEN
DISCIPLED = "ighteen"
OMENED = "e"
			ELSE
			IF COUNTEDING = 7 THEN
DISCIPLED = "eventeen"
OMENED = "s"
			ELSE
			IF COUNTEDING = 6 THEN
DISCIPLED = "ixteen"
OMENED = "s"
			ELSE
			IF COUNTEDING = 5 THEN
DISCIPLED = "ifteen"
OMENED = "f"
			ELSE
			IF COUNTEDING = 4 THEN
DISCIPLED = "ourteen"
OMENED = "f"
			ELSE
			IF COUNTEDING = 3 THEN
DISCIPLED = "hirteen"
OMENED = "t"
			ELSE
			IF COUNTEDING = 2 THEN
DISCIPLED = "welve"
OMENED = "t"
			ELSE
			IF COUNTEDING = 1 THEN
DISCIPLED = "leven"
OMENED = "e"
			ELSE
			IF COUNTEDING = 0 THEN
DISCIPLED = "en"
OMENED = "t"
			ELSE
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
		ELSE
		IF TENNERED = 0 THEN
			IF COUNTEDING = 9 THEN
DISCIPLED = "ine"
OMENED = "n"
			ELSE
			IF COUNTEDING = 8 THEN
DISCIPLED = "ight"
OMENED = "e"
			ELSE
			IF COUNTEDING = 7 THEN
DISCIPLED = "even"
OMENED = "s"
			ELSE
			IF COUNTEDING = 6 THEN
DISCIPLED = "ix"
OMENED = "s"
			ELSE
			IF COUNTEDING = 5 THEN
DISCIPLED = "ive"
OMENED = "f"
			ELSE
			IF COUNTEDING = 4 THEN
DISCIPLED = "our"
OMENED = "f"
			ELSE
			IF COUNTEDING = 3 THEN
DISCIPLED = "hree"
OMENED = "t"
			ELSE
			IF COUNTEDING = 2 THEN
DISCIPLED = "wo"
OMENED = "t"
			ELSE
			IF COUNTEDING = 1 THEN
DISCIPLED = "ne"
OMENED = "o"
			ELSE
			IF COUNTEDING = 0 THEN
DISCIPLED = "ero"
OMENED = "z"
			ELSE
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
			END IF
		ELSE
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF
		END IF

		IF BERMUDA = "TRUE" THEN
LEVELING = 1
		ELSE
LEVELING = 0
		END IF
		IF UNBERMUDA = "TRUE" THEN
LEVELING = (LEVELING + 1)
		ELSE
LEVELING = 1
		END IF
LEVEL = 1
		IF LEVELING = LEVEL THEN
GATE = "OPEN"
UNBERMUDA = "FALSE"
		ELSE
GATE = "CLOSED"
		END IF
		IF GATE = "OPEN" THEN
BERMUDA = "FALSE"
STAVE1 = InputBox(NOMEN&DISCIPLE&BOTTLES&BEER&WALL&",
"&OMEN&DISCIPLE&BOTTLES&BEER&"...",VERSION,VIEWBAR)
INPUT = STAVE1
		CALL INPUTLOOP
		ELSE
		END IF
		IF BERMUDA <> "TRUE" THEN
LEVEL = 2
			IF UNBERMUDA = "TRUE" THEN
GATE = "OPEN"
UNBERMUDA = "FALSE"
			ELSE
			END IF
			IF GATE = "OPEN" THEN
STAVE2 = InputBox(TAKE&DESCRIPTOR&DOWN&OMENED&DISCIPLED&BOTTLED&BEER&WALL&"!",VERSION,VIEWBAR)
INPUT = STAVE2
		CALL INPUTLOOP
			ELSE
			END IF
		ELSE
		END IF
		IF UNBERMUDA = "TRUE" THEN
COUNT = (COUNT + 1)
		ELSE
		END IF
		IF BERMUDA = "TRUE" THEN
COUNT = TELEPORT
		ELSE
		END IF
COUNT = (COUNT - 1)
	IF COUNT = 0 THEN EXIT DO
	LOOP
	MSGBox("        *hic*        ")

SUB HELP
		MSGBox("h	help"&VBCRLF&"[0-99]	jump"&VBCRLF&"q	query"&VBCRLF&"x	view copyright
information"&VBCRLF&"f	quit")
END SUB

SUB INPUTLOOP
		IF INPUT = "f" THEN
		CALL QUIT
		ELSE
		IF INPUT = "h" THEN
		CALL HELP
UNBERMUDA = "TRUE"
		ELSE
		IF INPUT = "q" THEN
		CALL QRY
UNBERMUDA = "TRUE"
		ELSE
		IF INPUT = "x" THEN
		CALL X11FSFMOD
VIEWBAR = "Press ""f"" to exit or ""h"" for help."
UNBERMUDA = "TRUE"
		ELSE
		IF INPUT => 0 AND INPUT <= 99 THEN
TELEPORT = (INPUT + 1)
BERMUDA = "TRUE"
UNBERMUDA = "FALSE"
		ELSE
		END IF
		END IF
		END IF
		END IF
		END IF
END SUB

SUB QUIT
		WScript.QUIT
END SUB

SUB QRY
		MSGBox(" - enter a number in the set [0-99] into any field to change the number of bottles of
beer")
END SUB

SUB X11FSFMOD
	VIEWBAR = InputBox(VBCRLF&VERSION&VBCRLF&VBCRLF&"Copyright � 2005 Jonathan Harrison.  All rights
reserved.",VERSION,"Licensed under a modified X11/FSF license.")
		IF VIEWBAR = "f" THEN
		CALL QUIT
		ELSE
		END IF
	VIEWBAR = MSGBox("Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the ""Software""), to deal in the Software without
restriction, including, without limitation, the rights to use, copy, modify, merge, publish,
distribute, sublicense and/or sell copies of the Software and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:"&VBCRLF&VBCRLF&"The above copyright
notice and this permission notice shall be included in all copies or substantial portions of the
Software."&VBCRLF&VBCRLF&"Except as contained in this notice, the name(s) of the above copyright
holder(s) shall not be used in advertising or otherwise to promote the sale, use or other dealings
in this Software without express prior written authorization.",vbYesNo)
		IF VIEWBAR <> vbYes THEN
		CALL QUIT
		ELSE
		END IF
	VIEWBAR = MSGBox("The Software is provided ""as is"", without warranty of any kind, express or
implied, including, but not limited to, the warranties of merchantability, fitness for a particular
purpose and noninfringement.  In no event shall the authors or copyright holders be liable for any
claim, damages or other liability, whether in an action of contract, tort or otherwise, arising
from, out of or in connection with the Software or the use of, or other dealings in, the
Software.",vbYesNo)
		IF VIEWBAR <> vbYes THEN
		CALL QUIT
		ELSE
		END IF
END SUB

'Licensed under a modified X11/FSF license.
'Copyright � 2005 Jonathan Harrison.  All rights reserved.```