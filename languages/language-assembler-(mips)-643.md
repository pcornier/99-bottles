
## Language Assembler (MIPS) ##
---
- Author: Dean Liu
- Date: 05/13/05
- Info: n/a
- Score:  (3.50 in 264 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(mips)-643.html
---

```####################################################
#Author:	Dean Liu
#Contact: 	deanliu@cs.ucsb.edu
#		deanliu@umail.ucsb.edu
#Date:		May 1st,2005
#Description:	MIPS Assembly version of
#               99 bottles 
#		of beer on the wall
####################################################
	.data			#data portion
strng:	.asciiz	" bottles of beer on the wall, "
strng2:	.asciiz	" bottles of beer "
strng3: .asciiz "\ntake one down and pass it around, "
strng4: .asciiz " bottle of beer on the wall "
strng5: .asciiz " bottle of beer "
strng6: .asciiz " bottles of beer on the wall.\n "
one:	.word	1	
	.text			#code section
main:				#main
	li	$a2, 1		#
	li	$a3, 99		#start with 99 
loop:	jal	PRNTB		#prnt bottle count
	la	$a0, strng	#print strng
	li	$v0, 4		#
	syscall			#
	jal	PRNTB		#
	la	$a0, strng2	#print strng2
	li	$v0, 4		#
	syscall			#
	la	$a0, strng3	#print strng3
	li	$v0, 4		#
	syscall			#
	sub	$a3, $a3, 1	#subtract one 
	jal	PRNTB		#
	la	$a0, strng6	#print strng6
	li	$v0, 4		#
	syscall			#
	bne	$a3, $a2, skip	#handles one 
                                #bottle on wall
	jal	ONEBOT		#
skip:	bnez	$a3, loop	#Loop if not equal
                                #to 0
	li	$v0, 10		#exit
	syscall			#
####################################################
# Routine:	PRINTB($a0)
# Description:	Prints out current bottle count
####################################################
PRNTB:	move	$a0, $a3	#prnt bottle count
	li	$v0, 1		#
	syscall			#
	jr	$ra		#return from method
####################################################
# Routine:	ONEBOT($a0)
# Description:	Handles one bottle count.
####################################################
ONEBOT: addi	$sp,$sp,-4	#allocate
	sw	$ra,0($sp)	#store rtrn 
                                #address
	jal	PRNTB		#
	la	$a0, strng4	#print strng4
	li	$v0, 4		#
	syscall			#
	jal	PRNTB		#
	la	$a0, strng5	#print strng5
	li	$v0, 4		#
	syscall			#
	la	$a0, strng3	#print strng3
	li	$v0, 4		#
	syscall			#
	sub	$a3, $a3, 1	#subtract one 
	jal	PRNTB		#
	la	$a0, strng6	#print strng6
	li	$v0, 4		#
	syscall			#
	lw	$ra,0($sp)	#load address
	addi	$sp,$sp,4	#pop
	jr	$ra		#rtrn from method```