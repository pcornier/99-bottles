
## Language Assembler (SPARC) ##
---
- Author: Justin
- Date: 11/15/10
- Info: http
- Score:  (2.71 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(sparc)-2543.html
---

```/*
 SPARC Assembly Version of "99 Bottles of Beer"
*/

	.global 	main
	
	.section 	".text"
	.align 		4
	
main:

	save	%sp, -96, %sp
	
	set		99, %l0		! %l0: bottles left
	
loop:

	set		bottlesonwall, %o0
	mov		%l0, %o1
	call	printf
	nop
	
	set		bottles, %o0
	mov		%l0, %o1
	call	printf
	nop
	
	set		takedown, %o0
	call	printf
	nop
	
	sub		%l0, 1, %l0
	
	cmp		%l0, 1
	ble		oneleft
	nop
	
	set		bottlesonwall, %o0
	mov		%l0, %o1
	call	printf
	nop
	
	set		endline, %o0
	call	printf
	nop
	
	ba		loop
	nop
	
oneleft:

	set		bottlesonwall_1, %o0
	mov		%l0, %o1
	call	printf
	nop
	
	set		endline, %o0
	call	printf
	nop
	
	set		bottlesonwall_1, %o0
	mov		%l0, %o1
	call	printf
	nop
	
	set		bottles_1, %o0
	mov		%l0, %o1
	call	printf
	nop
	
	set		takedown, %o0
	call	printf
	nop
	
	set		finale1, %o0
	call	printf
	nop
	
	set		finale2, %o0
	call	printf
	nop
	
	set		finale3, %o0
	call	printf
	nop
	
	ret
	restore
	
	.section 	".data"
	.align		4

bottlesonwall:
	.asciz		"%d bottles of beer on the wall"
	.align 		4
	
bottlesonwall_1:
	.asciz		"%d bottle of beer on the wall"
	.align		4
	
bottles:
	.asciz		", %d bottles of beer.\n"
	.align 		4

bottles_1:
	.asciz		", %d bottle of beer.\n"
	.align		4
	
takedown:
	.asciz		"Take one down and pass it around, "
	.align		4
	
endline:
	.asciz		".\n\n"
	.align 		4
	
finale1:
	.asciz		"no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no m"
	.align		4
	
finale2:
	.asciz		"ore bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on th"
	.align 		4

finale3:
	.asciz		"e wall.\n"
	.align		4```