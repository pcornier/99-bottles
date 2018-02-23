
## Language DIBOL ##
---
- Author: Bob Welton
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dibol-214.html
---

```.TITLE - "Program to display 99 bottles of beer on the wall"
;
;=======================================================================================================
;	Author: Bob Welton (welton@pui.com)
;		Projects Unlimited Inc.
;		Dayton, OH  45414
;
;	Language: DIBOL or DBL
;=======================================================================================================

RECORD MISC
    NUMBOTTLES	,D2,99			;Default # of bottles to 99
    ANUMBOTTLES	,A2			;Used to mask the output of bottles


.PROC
    XCALL FLAGS (0007000000,1)		;Suppress STOP message
    OPEN (8,O:C,"TT:")        		;Open the terminal/display
    REPEAT
	BEGIN
	ANUMBOTTLES = NUMBOTTLES,'ZX'
	WRITES (8,ANUMBOTTLES+" Bottles of Beer on the wall,")
	ANUMBOTTLES = NUMBOTTLES,'ZX'
	WRITES (8,ANUMBOTTLES+" Bottles of Beer,")
	WRITES (8,"   Take one down, pass it around,")
	DECR NUMBOTTLES	      		;Reduce # of bottles by 1
	IF (NUMBOTTLES .LE. 1) EXITLOOP	;If just 1 bottle left, get out
	ANUMBOTTLES = NUMBOTTLES,'ZX'
	WRITES(8,ANUMBOTTLES+" Bottles of Beer on the wall.") 
	WRITES (8," ")
	END
    ANUMBOTTLES = NUMBOTTLES,'ZX'
    WRITES(8,ANUMBOTTLES+" Bottle of Beer on the wall.") 
    WRITES (8," ")
    WRITES (8,ANUMBOTTLES+" Bottle of Beer on the wall,")
    WRITES (8,ANUMBOTTLES+" Bottle of Beer,")
    WRITES (8,"   Take one down, pass it around,")
    WRITES (8," ")
    WRITES (8," ")
    WRITES (8, "Hey the Beer's gone, I am out of here...")
    SLEEP 2
    CLOSE 8
    STOP
.END```