
## Language ENIAC ##
---
- Author: Jose R. Valverde
- Date: 10/19/05
- Info: http
- Score:  (3.24 in 29 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-eniac-918.html
---

```#
#   99 bottles of beer
#
#   	CODED IN ASSEMBLER FOR THE ENIAC
#
#   The ENIAC was the first electrical computer. It was built in 1943 
#   to substitute the Bush Differential Analyzer, a mechanical computer 
#   invented in 1925.
#
#   The ENIAC was programmed by wiring cable connections and setting 
#   three thousand switches on the function tables. 
#
#   To run this code you need access to an ENIAC emulator and assembler.
#
#   The only one I have found on the Net is a copy used on a course in
#   the University of Alberta. According to the site, the original and
#   its documentation were lost after the hurricane Katrina hit the US
#   coast on 2005.
#
#   The emulator, an assembler and binary-to-ascii converters, come as
#   a single package. The only docs available are from the course
#   assignment: 
#
#   http://www.ee.ualberta.ca/~cwc/courses/CMPUT379/Assignment%2001.html
#
#   Should you want to run this on an actual ENIAC, you need to convert
#   it to binary (using the assembler in the package) and use the binary
#   to direct your cable plugging :-).
#
#   (C) Jose R. Valverde, 19-oct-2005
#   	EMBnet/CNB
#   	jrvalverde AT acm DOT org
#
	.list	1
;
.	=	0
;
; STATIC STRINGS
;   NOTE: they are WRONG! characters are coded using 32 bits each!
;   Should be packed to have four chars in each 32bit address. This
;   however complicates the logic quite a bit. BTW, I have used ASCII
;   which didn't exist at the time!
;
; %d bottles of bear on the wall,
v1:	.data	32, 98, 111, 116, 116, 108, 101, 115, 32, 111, 102, 32, 98, 101,
    	.data	101, 114, 32, 111, 110, 32, 116, 104, 101, 32, 119, 97, 108, 
	.data	108, 44, 10
;
; %d bottles of beer!
v2: 	.data	32, 98, 111, 116, 116, 108, 101, 115, 32, 111, 102, 32, 98, 101,
    	.data	101, 114, 33, 10
;
; Take one down, pass it around.
v3: 	.data	84, 97, 107, 101, 32, 111, 110, 101, 32, 100, 111, 119, 110,
    	.data	44, 32, 112, 97, 115, 115, 32, 105, 116, 32, 97, 114, 111, 117,
	.data	110, 100, 46, 10
;
;   lookup table for numbers
;   '0', '1', '2', ... , '9'
digit:	.data	48, 49, 50, 51, 52, 53, 54, 55, 56, 57
;
; NUMERIC CONSTANTS
C0:	.data	0
C1:	.data	1
C10:	.data	10
C99:	.data	99
V1L:	.data	30	; length of first verse
V2L:	.data	18  	; length of second verse
V3L:	.data	31  	; length of third verse
;
; VARIABLES
; counters
i:	.res	1		; space for I
j:	.res	1		; space for J
k:  	.res	1   	    	; space for K
; AUXILIARY REGISTERS
rmd:	.res	1   	    	; remainder
dcn:	.res	1   	    	; decenes
;
ir	=	0x3ffffff       ; input register
or      =       0x3fffffe       ; output register
;
.	=	0x100		; start code
;
; loop from 99 down to 1
    	mov 	j,C99	    	; j = 99
DO: 	    	    	    	; do {
;
;   convert j to text and output it
    	mov 	dcn,j	    	;   dcn = j
	div 	dcn,C10     	;   dcn /= 10
	mov 	rmd,j	    	;   rmd = j
	rem 	rmd,C10     	;   rmd %= 10
	mov 	or,digit[dcn]	;   output digit[dcn]
	mov 	or,digit[rmd]	;   output digit[rmd]
;
; output first verse
	mov	i,C0		;   i = 0
DO1:	    	    	    	;   do {
    	mov	or,v1[i]	;   	output v1[i]
	add	i,C1		;   	i += 1
	cmp	i,V1L		;   } while (i < V1L)
	jlt	DO1		;   goto DO
;
; repeat number
	mov 	or,digit[dcn]	;   output digit[dcn]
	mov 	or,digit[rmd]	;   output digit[rmd]
;
; output second verse
	mov	i,C0		;   i = 0
DO2:	    	    	    	;   do {
	mov	or,v2[i]	;   	output v2[i]
	add	i,C1		;   	i += 1
	cmp	i,V2L		;   } while (i < V2L)
	jlt	DO2		;   goto DO
;
; output third verse
	mov	i,C0		;   i = 0
DO3:	    	    	    	;   do {
	mov	or,v3[i]	;   	output v3[i]
	add	i,C1		;   	i += 1
	cmp	i,V3L		;   } while (i < V3L)
	jlt	DO3		;   goto DO
;
    	sub 	j,C1	    	;   j -= 1
	cmp 	j,C0	    	; } while (j > 0)
	jgt 	DO  	    	; goto DO
;
EXIT:	hlt	0		; done```