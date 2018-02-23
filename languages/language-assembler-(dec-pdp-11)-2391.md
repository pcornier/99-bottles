
## Language Assembler (DEC PDP-11) ##
---
- Author: Kuzmich S.
- Date: 05/13/10
- Info: http
- Score:  (3.22 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(dec-pdp-11)-2391.html
---

```. = 1000
ostat = 0177564
odata = 0177566
istat = 0177560
idata = 0177562
	
start:
	mov #1000,sp
	jsr pc, newline
	
bottles:
	clr r1
	clr r2
	add #143,r1
	add #142,r2

bottles_loop:
	mov r2, -(sp)
	mov r1, -(sp)
	mov r1, -(sp)
	mov #s3, -(sp)
	jsr pc, printf
	add #2*4, sp
	tst r2
	beq no_more_bottles
	dec r1
	dec r2
	br bottles_loop

no_more_bottles:
	mov #s4, -(sp)
	jsr pc, printf
	add #2, sp

end:
	jsr pc, newline
	halt

	
; ===== printf =====
; int printf (const char *format, ...);
printf:
	mov r5, -(sp)
	mov sp, r5
	add #4, r5
	mov r4, -(sp)
	mov r3, -(sp)
	mov r2, -(sp)
	mov r1, -(sp)
	
	clr r1						; charcount
	mov (r5)+, r4				; *format -> r4
	
printf_while:
	movb (r4)+, r3				; format++ -> r3
	cmpb #0, r3
	beq printf_end				; while char != EOF
	cmpb r3, #'\
	beq printf_slash		
	cmpb r3, #'%
	beq printf_percent
	br printf_normal_print

printf_slash:
	movb (r4)+, r3
	cmpb r3, #'n
	beq printf_slash_n
	mov #'\ , r3
	br printf_normal_print
	
printf_percent:
	movb (r4)+, r3				; format++ -> r3
	mov (r5)+, r2				; arg++ -> r2 
	cmpb  r3, #'d	
	beq printf_percent_d
	cmpb  r3,#'o
	beq printf_percent_o
	cmpb  r3,#'c
	beq printf_percent_c
	cmpb  r3,#'s
	beq printf_percent_s
	mov #'n , r3
	br printf_normal_print

printf_slash_n:
	inc r1
	jsr pc, newline
	br printf_while


printf_percent_d:
	mov r2, -(sp)
	jsr pc, putdec
	add #2, sp
	add r0, r1					
	br printf_while
	
printf_percent_o:
	mov r2, -(sp)
	jsr pc, putoct
	add #2, sp
	add r0, r1
	br printf_while
	
printf_percent_c:
	mov r2, -(sp)
	jsr pc, putch
	add #2, sp
	inc r1
	br printf_while
	
printf_percent_s:
	mov r2, -(sp)
	jsr pc, puts
	add #2, sp
	add r0, r1
	br printf_while
	
printf_normal_print:
	mov r3, -(sp)
	jsr pc, putch
	add #2, sp
	inc r1
	br printf_while
	
	
  
printf_end:
	mov r1, r0				; return count of printed symbols
	mov (sp)+, r1
	mov (sp)+, r2
	mov (sp)+, r3
	mov (sp)+, r4
	mov (sp)+, r5
	rts pc

; ===== newline =====
; void putch ('/n')
newline:
	tstb @#ostat
	bpl newline
	mov #12, @#odata ;
	rts pc
; end

; ===== putch =====
; void putch (char a);
putch:
	mov r5, -(sp)
	mov sp, r5
	add #4, r5
	
putch_loop:
	tstb @#ostat
	bpl putch_loop
	mov (r5), @#odata
	mov (sp)+, r5
	rts pc
; end
	
; ===== putdec =====
; int putdec (int n);
putdec:
	mov r5, -(sp)
	mov sp, r5
	add #4, r5
	mov r4, -(sp)
	mov r3, -(sp)
	mov r2, -(sp)
	mov r1, -(sp)
	mov (r5), r5			; n -> r5
	clr r1					; charcount 
	cmp #0, r5
	ble putdec_pre_loop
	
putdec_if_negative:	
	mov #'-, -(sp)
	jsr pc, putch			; putch ('-')
	add #2, sp
	inc r1
	neg r5
	
putdec_pre_loop:
	mov #0, r2				; numcount
	
putdec_loop:				; do {
	clr r4
	div #10., r4			; r4 = n / 10.
							; r5 = n % 10.
	add #'0, r5
	mov r5, -(sp)
	inc r2
	mov r4, r5
	cmp #0, r4				; }
	bne putdec_loop			; while (n)
	
putdec_loop2:				; do {
	jsr pc, putch
	add #2, sp		
	inc r1
	dec r2
	cmp #0, r2				; }
	bne putdec_loop2		; while (numcount)
	
putdec_end:	
	mov r1, r0				; return charcount
	mov (sp)+, r1
	mov (sp)+, r2
	mov (sp)+, r3
	mov (sp)+, r4
	mov (sp)+, r5
	rts pc
; end
	
; ===== putoct =====
; int putoct (int n)
putoct:
	mov r5, -(sp)
	mov sp, r5
	add #4, r5
	mov r4, -(sp)
	mov r3, -(sp)
	mov r2, -(sp)
	mov r1, -(sp)
	mov (r5), r5			; n -> r5
	clr r1					; charcount 
	cmp #0, r5
	ble putoct_pre_loop
	
putoct_if_negative:	
	mov #'-, -(sp)
	jsr pc, putch			; putch ('-')
	add #2, sp
	inc r1
	neg r5
	
putoct_pre_loop:
	mov #0, r2				; numcount
	mov #7, r3
	com r3
	
putoct_loop:				; do {
	mov r5, r4
	bic r3, r4
	add #'0, r4
	mov r4, -(sp)
	inc r2
	asr r5
	asr r5
	asr r5
	cmp #0, r5				; }
	bne putoct_loop			; while (n)
	
putoct_loop2:				; do {
	jsr pc, putch			; putch ()
	add #2, sp		
	inc r1					; charcount++
	dec r2
	cmp #0, r2				; }
	bne putoct_loop2		; while (numcount)
	
putoct_end:	
	mov r1, r0				; return charcount
	mov (sp)+, r1
	mov (sp)+, r2
	mov (sp)+, r3
	mov (sp)+, r4
	mov (sp)+, r5
	rts pc
; end
	
; ===== puts =====
; int puts (char *a)
puts:
	mov r5, -(sp)
	mov sp, r5
	add #4, r5
	mov r4, -(sp)
	mov (r5), r5			; *a -> r5
	clr r4					; charcount === i
	
puts_loop:					; while a[i] != EOF {
	cmpb (r5), #0
	beq puts_end
	movb (r5)+, -(sp)
	jsr pc, putch			; putch (a[i])
	add #2, sp
	inc r4					; charcount++
	br puts_loop			; }
	
puts_end:
	mov r4, r0				; return charcount
	mov (sp)+, r4
	mov (sp)+, r5
	rts pc	

s3:	
	.ASCIZ "%d bottles of beer on the wall, %d bottles of beer.\nTake one down and pass it around, %d
bottles of beer on the wall.\n\n"
s4:	
	.ASCIZ "No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy
some more, 99 bottles of beer on the wall.\n"
 
.end```