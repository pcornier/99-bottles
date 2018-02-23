
## Language DEBUG ##
---
- Author: Han ten Have
- Date: 02/05/06
- Info: n/a
- Score:  (4.07 in 167 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-debug-1042.html
---

```F100 400 0
A
;    DEBUG    source program                    5 Feb 2006
;
;     for   99-BOTTLES-OF-BEER           by  Han ten Have
;
;
;  Surprisingly so far after > 880 others nobody used the
;  language for which the creating program is the most
;  World-Widely available : DEBUG.EXE  It came with early
;  DOS versions as DEBUG.COM and now comes with Windows-XP
;  There is no special language-packet needed, so :
;
;  MOST PC OWNERS CAN RUN THIS PROGRAM IMMEDIATELY !
;
;  The downloadable version can be used unmodified as
;  input file with all DOS and Windows versions. It tells
;  first time users of the Command Prompt and DEBUG how at
;  the file end. The program displays 5 verses at a time.
;  Press any key for the next 5 , and <Esc> exits.
;
;  Questions and comments welcome at progfun@hotmail.com
;
;----------------------------------------------------------
;
;  Intermediate Language :
;
;  A tiny, dedicated "beer"-language was created.
;  The data in the e (enter) commands show the essence of
;  the 99-bottles-of-beer problem clearly, noting that :
;  d a  represent hex data bytes for CR LF since all is
;  hex in DEBUG country, no clumsy 0xd or 0Dh formats !
;  And 'Text' is DEBUG's way for entering ASCII strings. 
;  Five e-commands are used to avoid line breaks in what
;  really is only one string of 195 characters.
;
;  For each verse the program scans a universal text and
;  displays only the parts appropriate for the bottle
;  count of the moment. For this an IF THEN ELSE END
;  construct was needed of which the ELSE part can
;  contain another IF THEN ELSE END. For the IF part
;  only two fixed tests were sufficient and therefore all
;  parts could be condensed into only one character each :
;
;     '='     IF counter = "00" THEN
;     '#'     IF counter # "01" THEN
;     '/'     ELSE
;     '|'     END
;     '('     ELSE  (internally nested)
;     ')'     END       "         "
;     '%'     DISPLAY  bottle-counter if not "00"
;     '*'     COUNT  down or loop from "00" to "99"

e1a9   d a'%=No more| bottle#s| of beer on the wall'
e1d3   ', %=no more| bottle#s| of beer.'d a
e1f4   '=Go to the store and buy some more'
e216   '(Take #one/it| down and pass it around)'
e23d   ', *%=no more| bottle#s| of beer on the wall.'d a 0
A100
;----------------------------------------------------------
;
; DH keeps 2 scan-control flags : bit0 Skip, bit1 Brackets
;
MOV	CX,3939  ; init beerbottle-counter to ASCII "99"
MOV	BX,5     ; init verses counter to 5
MOV	SI,1A9   ; init data pointer to 1A9
MOV	DH,0     ; clear scan-control flags 
LODSB		 ; LOaDStringByte : MOV AL, [SI] ; INC SI
CMP	AL,0	 ; 0 terminates data
JZ	115
CALL	124      ; tests on flags and chars
JMP	10B
DEC	BX
JNZ	106
MOV	AH,8	 ; DOS-read-keyboard-no-echo
INT	21
CMP	AL,1B	 ; <Esc> exits the endless loop
JNZ	103
MOV	AH,0	 ; DOS-terminate-program
INT	21
;
TEST	DH,1	 ; Skip-flag
JNZ	18F
CMP	AL,25    ; '%' DISPLAY
JNZ	143
CMP	CH,30
JZ	13D      ; no leading '0'
MOV	DL,CH
CALL	18A      ; write char in DL
MOV	DL,CL
CALL	18A      ; write char in DL
RET
CMP	CL,30 
JNZ	137
RET
CMP	AL,2A    ; '*' COUNT
JNZ	15B
CMP	CL,30
JZ	14E
DEC	CX
RET
MOV	CL,39
CMP	CH,30
JZ	158
DEC	CH
RET
MOV	CH,39    ; re-inited to "99"
RET
CMP	AL,3D    ; '=' IF counter = "00" THEN
JNZ	169
CMP	CX,3030
JZ	168
OR	DH,1     ; set Skip-flag , cleared by '|' '/' '(' 
RET
CMP	AL,23    ; '#' IF counter # "01" THEN
JNZ	174
CMP	CX,3031
JZ	165
RET
CMP	AL,7C    ; '|' END
JZ	173
CMP	AL,29    ; ')' END  (nested)
JZ	173
CMP	AL,2F    ; '/' ELSE
JZ	165
CMP	AL,28    ; '(' ELSE (nested)
JNZ	188
OR	DH,3     ; set BOTH flags : Skip and Brackets
RET              ;     Only cleared by ')'
MOV	DL,AL
MOV	AH,2     ; DOS-write-char-in-DL 
INT	21
RET
;
TEST	DH,2     ; 18F: Entry point when Skip-flag is ON
JZ	19C
CMP	AL,29    ; ')' END (nested)
JNZ	19B
AND	DH,FC    ; 198: clear both flags
RET
;
CMP	AL,28    ; '(' ELSE (nested)
JZ	198
CMP	AL,2F    ; '/' ELSE
JZ	198
CMP	AL,7C    ; '|' END
JZ	198
RET	         ; keep skipping
;
; End of code, data was already placed hereafter at 1A9.
;----------------------------------------------------------
; CHECK : Above is only one line with '-' characters.
;
;  Note : This file had its comment lines reduced to 79
;         char's to stop old versions of DEBUG from
;         beeping for minutes when chewing on it, but
;         the result was still OK ! (DOS3.30  Mar 1987)
;  Note : This file had its lines reduced again to 59
;         char's because sending it via E-mail as an
;         attachment today (Jan 2006) had its contents
;         modified by inserting extra linefeeds and
;         therefore making it useless as source-file !
;
;                             View this file with NotePad
; QUICK METHOD
;
;   to RUN the  DEBUG99.COM  program under  Windows-XP
;
; 
;  -Follow the naming and typing instructions precisely-
;
;  1.  Place a copy of this file on the
;      DeskTop and make sure its name is :   DEBUG99.txt
;
;      Renaming can be done via the menu which appears
;      after right-clicking on the icon of the file.
;
;  2.  With the mouse go to  Start/Programs/Accessories/
;      System Tools/Command Prompt-  and click on it.
;
;  3.  In the now appearing window, after the > type
;
;      DEBUG<DeskTop\DEBUG99.txt    and press Enter.
;
;  4.  When you see the > prompt again, read points
;      5. and 6. first, memorize them and only then
;
;      type   DEBUG99    and press Enter.
;
;  5.  The program should display the first five verses
;      now. Press the spacebar for the next five and so
;      on. Keep pressing until the interesting part
;      below 10 bottles and somewhat further appears
;      and check the variations.
;
;      When seen enough press the Esc-key to exit.
;
;  6.  After the > prompt type   exit   and press Enter
;      to leave the window.
;
;----------------------------------------------------------
; A fully BLANK LINE ends the A (Assembly) command :

rbx
0
rcx
16c
nDEBUG99.com
w
q```