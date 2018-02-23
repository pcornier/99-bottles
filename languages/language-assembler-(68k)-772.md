
## Language Assembler (68K) ##
---
- Author: Alex Peters
- Date: 06/29/05
- Info: http
- Score:  (3.29 in 59 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(68k)-772.html
---

```*
*  Motorola 68000 assembly code to '99 Bottles of Beer'
*  Written by Alex Peters, 29/6/2005
*

                org       $1000           code space
                move.l    #$7ffe,sp       initialise stack pointer
                move.b    #99,d1          initialise beer count

main_loop       bsr       print_b         print 'xx bottles of beer'
                lea       s_l1a,a1
                bsr       print_s         print ' on the wall, '
                bsr       print_b         print 'xx bottles of beer'
                lea       s_l1b,a1
                bsr       print_s         print full stop, new line
                lea       s_l2a,a1
                bsr       print_s         print 'Take one down, pass it around,'

                sub.b     #1,d1           decrement beer count

                bsr       print_b         print 'xx bottles of beer'
                lea       s_l2b,a1
                bsr       print_s         print ' on the wall.' and new line

                cmp.b     #0,d1
                bne       main_loop       repeat while there are beers

                lea       s_final,a1
                bsr       print_s         print final verse
                move.b    #TO_OS,d7
                trap      #14             return to OS

*  The print_b subroutine prints 'xx bottles of beer' to the screen where xx
*  is read from register d1.

print_b         move.b    #OUTCH,d7       prepare to display characters
                cmp.b     #0,d1
                beq       print_b_none    print 'no more' if zero

                clr.l     d2
                move.b    d1,d2           copy beer count
                divu      #10,d2          and split into two digits
                beq       print_b_unit    branch if no tens digit
                move.b    d2,d0
                add.b     #$30,d0         convert number to ASCII
                trap      #14             display tens digit

print_b_unit    lsr.l     #8,d2           shift other digit over
                lsr.l     #8,d2
                move.b    d2,d0
                add.b     #$30,d0         convert number to ASCII
                trap      #14             display units digit

                bra       print_b_bott

print_b_none    lea       s_nomore,a1
                bsr       print_s         print 'no more' for zero

print_b_bott    lea       s_bottle,a1
                bsr       print_s         print ' bottle'

                cmp.b     #1,d1           if beer count is not 1
                beq       print_b_of      then don't print 's'
                move.b    #'s',d0
                trap      #14             otherwise do

print_b_of      lea       s_ofbeer,a1
                bsr       print_s         print ' of beer'
                rts                       return to caller

*  The print_s subroutine prints a null-terminated string starting from a1.

print_s         move.b    #OUTCH,d7       prepare to display characters
                move.l    a1,a2           initialise memory pointer

print_s_loop    move.b    (a2)+,d0        read next character
                beq       print_s_done    branch if it's a null
                trap      #14             otherwise display it
                bra       print_s_loop

print_s_done    rts                       return to caller

*  String and constant declarations follow.

s_nomore        dc.b      'no more',NULL
s_bottle        dc.b      ' bottle',NULL
s_ofbeer        dc.b      ' of beer',NULL
s_l1a           dc.b      ' on the wall, ',NULL
s_l1b           dc.b      '.',CR,LF,NULL
s_l2a           dc.b      'Take one down, pass it around, ',NULL
s_l2b           dc.b      ' on the wall.',CR,LF,CR,LF,NULL
s_final         dc.b      'No more bottles of beer on the wall, '
                dc.b      'no more bottles of beer.',CR,LF
                dc.b      'Go to the store and buy some more... '
                dc.b      '99 bottles of beer!',CR,LF,NULL

NULL            equ         0
LF              equ        10
CR              equ        13
TO_OS           equ       228
OUTCH           equ       248

                end```