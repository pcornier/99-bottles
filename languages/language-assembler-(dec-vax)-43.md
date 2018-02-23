
## Language Assembler (DEC VAX) ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.03 in 36 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(dec-vax)-43.html
---

```.TITLE	Beers 99 Bottles of Beer on the Wall

;++
; This program will produce the output for the song "99 Bottles of Beer"
; and display it to the logical device SYS$OUTPUT.  VMS makes this
; simple due to its wealth of library routines.
;
; Thrilling, isn't it?
;
; This presumes a VAX processor, and the VMS operating system (VAX/VMS
; or OpenVMS).  Novices are encouraged to reference the following:
;
;	VAX Macro and Instruction Set Reference Manual
;	VMS System Services Reference Manual
;	VMS Run-Time Library (LIB$) Manual
;
; Author : David A. Seagle
; Date   : 02-Jul-2003
;--

;
; Define symbols, constants, etc. used in this module.
;

	MAX_SIZE	= 128		; max text buffer length in bytes
	TOTAL_BEERS	= 99		; how many beers to consume

;
; Define templates for the various output lines.  Note that we must
; use ASCII string descriptors since that is what the library routines
; (and the system services they call) expect.  Also, we embed control
; strings for use by the $FAO system service within these templates,
; and substitute values for them during the run.
;

NUM_BEERS:	.ASCID	'!SL bottle!%S of beer on the wall!/'-
			'!SL bottle!%S of beer'

THE_BRIDGE:	.ASCID	'Take one down, and pass it around!/'-
			'!SL bottle!%S of beer on the wall!/'

NO_MORE:	.ASCID	'Take it down, and pass it around!/'-
			'Then go to the store and buy us some more'

;
; Set up a text buffer for use as an output line.  Also, set up the
; string descriptor to describe this buffer.  We are "rolling our own"
; here for convenience because we do not have a static text buffer
; value as we did with the output templates.  This also makes it more
; obvious where the descriptor length is located since we plan to
; manipulate it during the run.
;

OUT_BUFFER:	.BLKB MAX_SIZE		; output buffer/line

OUT_DESC:	.WORD MAX_SIZE		; output buffer length in bytes
		.BYTE DSC$K_DTYPE_T	; code for "use string data type"
		.BYTE DSC$K_CLASS_S	; code for "use fixed descriptor"
		.ADDRESS OUT_BUFFER	; pointer to the output text buffer

;
; Allocate a longword to store any failure status value we might see
;

ERROR_CODE:	.BLKL 1			; last error code encountered


;******************************
;* Entry Point for Program!!! *
;******************************

	.ENTRY BEERS,^M<R7>		; entry point, save R7 automatically

;
; Initialize.
;

START:
	MOVL	#TOTAL_BEERS, R7	; initialize beer counter (use R7)
	MOVL	#SS$_NORMAL, ERROR_CODE	; initialize error code to normal
	BRB	DISPLAY_COUNT		; start by displaying the count

;
; Output the bridge text using the current value of the beer counter.
;
; Remember that the library routines expect their parameters in the order
; given in the documentation for their formal parameters, and will read
; them as offsets from the stack pointer.  So, we must push these actuals
; onto the stack in reverse order to accommodate.
;
; Keep in mind that we have set things up such that calls to the $FAO
; system service will write the length of the text buffer it constructed
; back into the output buffer's descriptor.  This requires us to reset the
; descriptor before each call.  If we do not, $FAO might return an error
; indicating that the buffer is too small for its output result based upon
; a stale length in the descriptor.
;

DISPLAY_BRIDGE:
	MOVW	#MAX_SIZE, OUT_DESC	; reset buffer length to maximum

	PUSHL	R7			; count of the beer we are consuming
	PUSHAQ	OUT_DESC		; address of output buffer descriptor
	PUSHAW	OUT_DESC		; final formatted buffer length
	PUSHAQ	THE_BRIDGE		; input template descriptor
	CALLS	#4, G^LIB$SYS_FAO	; create formatted ASCII output buffer

	CMPL	R0, #SS$_NORMAL		; ensure $FAO was successful
	BNEQ	FAILURE_EXIT		; branch to failure exit if not

	PUSHAQ	OUT_DESC		; address of output line descriptor
	CALLS	#1, G^LIB$PUT_OUTPUT	; display output buffer on SYS$OUTPUT

;
; Output the current beer text to SYS$OUTPUT.  Each $FAO template has
; substitution placeholders embedded, so remember to load those runtime
; values (in reverse order) onto the stack as well.
;

DISPLAY_COUNT:
	MOVW	#MAX_SIZE, OUT_DESC	; reset buffer length to maximum

	PUSHL	R7			; second substitution value to use
	PUSHL	R7			; first substitution value to use
	PUSHAQ	OUT_DESC		; address of output buffer descriptor
	PUSHAW	OUT_DESC		; final formatted buffer length
	PUSHAQ	NUM_BEERS		; input template descriptor
	CALLS	#5, G^LIB$SYS_FAO	; create formatted ASCII output buffer

	CMPL	R0, #SS$_NORMAL		; ensure $FAO was successful
	BNEQ	FAILURE_EXIT		; branch to failure exit if not

	PUSHAQ	OUT_DESC		; address of output line descriptor
	CALLS	#1, G^LIB$PUT_OUTPUT	; display output buffer on SYS$OUTPUT

	SOBGTR	R7, DISPLAY_BRIDGE	; consume a beer, continue if non-zero

;
; If our beer counter is not greater than zero, output the final tag line
; to SYS$OUTPUT before we exit.
;

DISPLAY_FINAL:
	MOVW	#MAX_SIZE, OUT_DESC	; reset buffer length to maximum

	PUSHAQ	OUT_DESC		; address of output buffer descriptor
	PUSHAW	OUT_DESC		; final formatted buffer length
	PUSHAQ	NO_MORE			; input string template descriptor
	CALLS	#3, G^LIB$SYS_FAO	; create formatted ASCII output buffer

	CMPL	R0, #SS$_NORMAL		; ensure $FAO was successful
	BNEQ	FAILURE_EXIT		; branch to failure exit if not

	PUSHAQ	OUT_DESC		; address of output line descriptor
	CALLS	#1, G^LIB$PUT_OUTPUT	; display output buffer on SYS$OUTPUT

	MOVL	#SS$_NORMAL, ERROR_CODE	; set error code to normal
	BRB	COMMON_EXIT		; exit with normal completion status

;
; Generic error handler which converts the error code into a text message
; equivalent, and displays it to SYS$OUTPUT prior to terminating the image
; with the last error code we encountered.
;

FAILURE_EXIT:
	MOVL	R0, ERROR_CODE		; save error code for use in $EXIT

	MOVW	#MAX_SIZE, OUT_DESC	; reset buffer length to maximum

	PUSHAQ	OUT_DESC		; address of output buffer descriptor
	PUSHAW	OUT_DESC		; final formatted buffer length
	PUSHAL	ERROR_CODE		; error code to translate
	CALLS	#3, G^LIB$SYS_GETMSG	; create text message from error code

	PUSHAQ	OUT_DESC		; address of output line descriptor
	CALLS	#1, G^LIB$PUT_OUTPUT	; display output buffer on SYS$OUTPUT

COMMON_EXIT:
	$EXIT_S	ERROR_CODE		; exit with our error status

	.END BEERS```