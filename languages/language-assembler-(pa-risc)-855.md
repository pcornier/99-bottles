
## Language Assembler (PA-RISC) ##
---
- Author: Berthold St�ger
- Date: 08/31/05
- Info: n/a
- Score:  (3.33 in 138 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(pa-risc)-855.html
---

```	; Compiled and tested with
	; "as bottle.s ; ld -N bottle.o ; strip a.out"
	; under HP-UX 11.0 on a HP9000/L2000
	.LEVEL 1.1
	.COPYRIGHT "Berthold St�ger, 2005"
	.SPACE $TEXT$
	.SUBSPA $LIT$,ACCESS=0x2c
s	.STRING "\x01 bottle\x02 of beer on the wall, \x01 bottle\x02 of beer.\x0a\x00"
	.STRING "Take one down and pass it around, \x01 bottle\x02 of beer on the wall."
	.STRING "\x0a\x0a\x00"
	.STRING "No more bottles of beer on the wall, \x01 bottle\x02 of beer.\x0a"
	.STRING "Go to the store and buy some more, 99 bottles of beer on the wall.\x0a\x00"
nomore	.STRING	"no more\x00"

	.SUBSPA $CODE$,ACCESS=0x2c
	.EXPORT $START$,ENTRY,PRIV_LEV=3
print2
	addi		-1,%r15,%r15
	subi,<>		-1,%r16,%r0
	ldi		9,%r16
print
	copy		%r14,%r5
l1	ldb,ma		1(%r4),%r6
	cmpib,<>,n	1,%r6,l1_notnum
	cmpib,<>,n	0,%r15,l1_not0
	cmpib,<>,n	0,%r16,l1_not0
	ldil		LR'nomore,%r3
	ldo		RR'nomore(%r3),%r3
l2	ldb,ma		1(%r3),%r6
	cmpib,<>,n	0,%r6,l2
	stb,ma		%r6,1(%r5)		; Branch delay slot
	b,n		l1
l1_not0
	cmpib,=		0,%r15,l1_ign0
	addi		"0",%r16,%r6		; Branch delay slot
	addi		"0",%r15,%r7
	stb,ma		%r7,1(%r5)
l1_ign0
	b		l1
	stb,ma		%r6,1(%r5)		; Branch delay slot
l1_notnum
	cmpib,<>,n	2,%r6,l1_nots
	subi,<>		1,%r16,%r0
	cmpib,=		0,%r15,l1
l1_s
	ldi		"s",%r6			; Branch delay slot (result discarded!)
	b		l1
	stb,ma		%r6,1(%r5)		; Branch delay slot
l1_nots
	cmpib,<>,n	0,%r6,l1
	stb,ma		%r6,1(%r5)		; Branch delay slot

	ldi		4,%r22                  ; SYS_write
	ldi		1,%r26			; fd = stdout
	copy		%r14,%r25		; buf
	be	    	4(%sr7,%r18)		; syscall
	sub		%r5,%r14,%r24		; len (Branch delay slot)

$START$
	ldil		L'0xC0000000,%r18

	ldil		LR'bss,%r14
	ldo		RR'bss(%r14),%r14

	ldi		9,%r15
	ldi		9,%r16
l3
	ldil		LR's,%r4
	b,l		print,%r31
	ldo		RR's(%r4),%r4		; Branch delay slot

	b,l		print2,%r31
	addi,>=		-1,%r16,%r16		; Branch delay slot

	add,=		%r15,%r16,%r0
	b,n		l3

	b,l,n		print,%r31
	nop

	ldi		1,%r22                  ; SYS_exit
	be,l		4(%sr7,%r18)		; syscall
	ldi		0,%r26			; returncode = 0 (Branch delay slot)

	; What follows are compatibility-symbols to make the
	; HP-UX objectloader happy.
	.SUBSPA $COMPAT$,ACCESS=0x1f
	.EXPORT $UNWIND_START
	.EXPORT $UNWIND_END
$UNWIND_START
$UNWIND_END

	; Temporary Buffer
	.SPACE $PRIVATE$
	.SUBSPA $BSS$,QUAD=1,ACCESS=0x1f
bss	.COMM	200```