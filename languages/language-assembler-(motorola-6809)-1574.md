
## Language Assembler (motorola 6809) ##
---
- Author: Rik Hughes
- Date: 08/16/07
- Info: http
- Score:  (3.52 in 144 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(motorola-6809)-1574.html
---

```c:\meta\i\6809/
	intel
	title   "99 bottles of beer"
	.tab    8,8,8,80
;
	public  bottlebeer
;
	segment 'ram'
tmp     ds.b    1
;
	segment 'eprom'
;
;*** 99 bottles of Beer
;*** Rik Hughes, 16/08/2007
;*** written for the intel 6809 cpu
;
bottlebeer:
bbeer0:	ldab	#99
bbeer1:	ldx	#0
	tstb
	beq	bbeer2:
	jsr	shwnum		; show number of bottles left
	bra	bbeer3
bbeer2:	ldx	#notxt		; 0 = "no"
	jsr	shwtxt
bbeer3:	ldx	#btltxt		; bottle
	jsr	shwtxt
	cmpb	#1
	beq	bbeer4
	ldaa	#'s'		; not 1, then show an 's'
bbeer4:	ldx	#bertxt		; "of beer"
	jsr	shwtxt
	ldx	#waltxt		; "on the wall"
	jsr	shwtxt
	ldx	#crtxt		; do a cr
	jsr	shwtxt
bbeer5:	ldx	#0
	tstb
	beq	bbeer6:
	jsr	shwnum		; show number of bottles left
	bra	bbeer7
bbeer6:	ldx	#notxt		; 0 = "no"
	jsr	shwtxt
bbeer7:	ldx	#btltxt		; bottle
	jsr	shwtxt
	cmpb	#1
	beq	bbeer8
	ldaa	#'s'		; not 1, then show an 's'
bbeer8:	ldx	#bertxt		; "of beer"
	jsr	shwtxt
	ldx	#crtxt		; do a cr
	jsr	shwtxt
	tstb			; is it 'no bottles of beer?'
	beq	bbeer9
	ldx	#pastxt		; "take one down, pass it around" \n
	jsr	shwtxt
	decb			; lose a bottle
	bra	bber10
bbeer9:	ldx	#mortxt
bber10:	bra	bbeer0		; go back to the start
	rts

; show 2 digit number stored in x
shwnum:	pshs	a		; preserve accumulator
	pshs	x
	ldx	#10
	pshs	x
	jsr	div16		; divide x on stack by 10
	puls	a		; get result
	puls	a		; remembering to forget high byte
	tsta			; is it 0?
	beq	shwnm1		; yes, so don't display it.
	staa	stdout		; display 10's
shwnm1:	puls	a		; get remainder
	puls	a
	staa	stdout		; display units always
	puls 	a		; restore accumulator

;show text string stored in x
shwtxt:	pshs	b		;preserve register
	clr	b		;reset pointer
shwtx1:	pshs	x		;preserve address of text
	puls 	x
	abx			;get pointer in text
	lda	0,x
	beq	shwtx2
	staa	stdout		;display char
	incb
	bra	shwtxt1		;move to next char
shwtxt2	puls	b
	rts

;
;*** Divide two sixteen bit values on the system stack
;
div16:	pshs	d,x
	tfr	s,x
	ldx	8,x	; get dividend
	pshs	x
	ldx	#0	
	pshs	x
	lda	#16	
	tfr	s,x
div162:	rol	13,x	
	rol	12,x	
	rol	1,x	
	rol	0,x	
	pshs	a
	ldd	0,x	
	subd	10,x	
	bcs	div161	
	std	0,x	
div161:	puls	a
	deca	
	bne	div162	
	rol	13,x	
	rol	12,x	
	com	13,x	
	com	12,x	
	ldd	0,x	
	std	10,x	
	puls	x
	puls	x
	puls	d,x,pc

.btltxt	dc.b	"bottle",0
.bertxt dc.b	" of beer",0
.waltxt	dc.b	" on the wall",13,10,0
.notxt	dc.b	"no ",0
.pastxt dc.b	"take one down, pass it around,",13,10,0
.crtxt	dc.b	13,10,0
.mortxt	dc.b	"Go to the store and buy some more,",13,10,0

	end```