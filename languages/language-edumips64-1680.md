
## Language edumips64 ##
---
- Author: Giordano Fidilio
- Date: 01/29/08
- Info: http
- Score:  (3.50 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-edumips64-1680.html
---

```                .data
format_str:     .asciiz "%d bottles of beer on the wall,"
format_str_2:   .asciiz " %d bottles of beer.%s"
format_str_3:   .asciiz " %d bottles of beer on the wall.\n\n"
format_str_4:   .asciiz "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it
around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles
of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
string_addr:    .asciiz "\nTake one down and pass it around,"

arg_syscall_5:  .space  4
int:            .word   99
string:         .space  4



                .code
daddi r5, r0, 1
scrittura:

                daddi r3, r0, format_str
                sw r3, arg_syscall_5(r0)
                daddi r3, r0, string_addr
                sw r3, string(r0)
                daddi r14, r0, arg_syscall_5
                syscall 5

                daddi r3, r0, format_str_2	; seconda ripetizione - 2nd ripetition
                sw r3, arg_syscall_5(r0)
                daddi r3, r0, string_addr
                sw r3, string(r0)
                daddi r14, r0, arg_syscall_5
                syscall 5

		ld r2, int(r0)
		dsub r2, r2, r5			; dsub r2, r2, r5 === daddi r2, r2, -1
		sw r2, int(r0)

                daddi r3, r0, format_str_3	; meno una bottiglia - less 1 bottle
                sw r3, arg_syscall_5(r0)
                daddi r3, r0, string_addr
                sw r3, string(r0)
                daddi r14, r0, arg_syscall_5
                syscall 5


ld r4, int(r0)
daddi r4, r4, -1
bnez r4, scrittura

                daddi r3, r0, format_str_4	; una sola bottiglia - one single bottle
                sw r3, arg_syscall_5(r0)
                daddi r3, r0, string_addr
                sw r3, string(r0)
                daddi r14, r0, arg_syscall_5
                syscall 5
                syscall 0


; Written by  GIORDANO FIDILIO
; 29 January 2008, Comiso (Italy)

; I hate this language, i hate this exam
; finally i passed it, i will never want to put my hands on this stuff again!!!  :)```