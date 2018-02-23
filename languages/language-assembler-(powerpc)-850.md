
## Language Assembler (PowerPC) ##
---
- Author: Berthold St�ger
- Date: 08/25/05
- Info: n/a
- Score:  (3.36 in 139 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(powerpc)-850.html
---

```# 99 bottles of beer in PowerPC-Assembler on Linux
# Compile with "gcc -nostdlib -s bottle.s"
# Tested with gcc version 3.3.5 on Linux 2.6.12 for PPC
	.section	.rodata
	.align 1
	.byte	"0No more bottles of beer on the wall, no more bottles of beer."
	.byte	'\n'
	.byte	"Go to the store and buy some more, 99 bottles of beer on the wall."
	.byte	'\n'
	.byte	"0Take one down and pass it around, | bottle{ of beer on the wall."
	.byte	'\n','\n'
	.byte	"0| bottle{ of beer on the wall, | bottle{ of beer."
	.byte	'\n'
.s1:
	.byte	"0no more"
.nomore:

	.section	.text
	.align 2
	.globl _start
_start:
	mr	15,1		# r15 = stack base
	subi	1,1,200		# make place for string
	li	16,99		# r16 = counter
.l3:
	lis	2,.s1@ha
	la	2,.s1@l(2)
	bl	.print
	subi	16,16,1
	bl	.print
	cmpwi	0,16,0
	bne	.l3
	bl	.print

	li	0,1		# SYS_exit
	li	3,0		# returncode = 0
	sc			# syscall

.print:
	mr	4,15
.l1:
	lbzu	3,-1(2)

	cmpwi	0,3,'0'
	beq	.l1_exit
	cmpwi	0,3,'{'
	blt	.l1_char
	bgt	.l1_count
	cmpwi	0,16,1
	beq	.l1
	li	3,'s'
	stbu	3,-1(4)
	b	.l1
.l1_count:
	cmpwi	0,16,0
	bgt	.l1_pos
	lis	5,.nomore@ha
	la	5,.nomore@l(5)
.l2:
	lbzu	3,-1(5)
	cmpwi	0,3,'0'
	beq	.l1
	stbu	3,-1(4)
	b	.l2
.l1_pos:
	li	6,10
	divw	3,16,6		# Urgh. PPC doesn't supply
	mullw	6,3,6		# the remainder of divisions...
	sub	5,16,6
	addi	5,5,'0'
	stbu	5,-1(4)
	cmpwi	0,3,0
	ble	.l1
	addi	3,3,'0'
	stbu	3,-1(4)
	b	.l1
.l1_char:
	stbu	3,-1(4)
	b	.l1
.l1_exit:
	li	0,4		# SYS_write
	li	3,1		# fd = stdout
	sub	5,15,4		# len
	sc			# syscall

	blr```