
## Language Assembler (8051) ##
---
- Author: Bill Webster
- Date: 04/20/05
- Info: n/a
- Score:  (3.11 in 37 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(8051)-42.html
---

```;/ bottles on the wall in 8051 assembler
;/
;/ bill webster 2003
;/____________________________________________________________________________

; sfr definitions
SCON  data 0x98
SBUF  data 0x99
PCON  data 0x87
TMOD  data 0x89
TH1   data 0x8D
B     data 0xF0

; bit definitions
TI    bit 0x99
TR1   bit 0x8E

;/ start vector
;/____________________________________________________________________________
cseg at 0

    jmp start


cseg at 0x30

;/ print number in r0 as decimal - limited to numbers in [0..99]
;/____________________________________________________________________________
putn:
        mov a, r0
        mov b, #10
        div ab
        jz units
        call printDigit

units:
        mov  a, b

        ; fall through

;/ convert number in [0..9] to ascii digit & print
;/____________________________________________________________________________
printDigit:

        add a, #'0'

        ; fall through

;/ character out
;/____________________________________________________________________________
putch:

        jnb TI, putch
        clr TI
        mov SBUF, a
        ret

;/ print string at dptr
;/____________________________________________________________________________
puts:
        clr a
        movc a, @a + dptr
        jnz more
        ret

more:
        call putch
        inc dptr
        jmp puts

;/
;/____________________________________________________________________________
start:

        ; initialize serial port
        orl TMOD, #0x20
        setb TR1
        mov SCON, #0x50

        mov TH1, #0xFE
        orl PCON, #0x80
        setb TI

        ; bottles to begin with
        mov r0, #99

verse:
        call putn

        mov dptr, #line1
        call puts

        call putn

        mov dptr, #line2
        call puts

        dec r0
        call putn

        mov dptr, #line1
        call puts

        mov dptr, #eoln
        call puts

        cjne r0, #0, verse

        jmp $

;/ string constants
;/____________________________________________________________________________

cr      equ 0x0D
lf      equ 0x0A

line1:  db ' bottles of beer on the wall,'
eoln:   db cr, lf, 0

line2:  db ' bottles of beer,', cr, lf
        db 'Take one down, pass it around,', cr, lf, 0

end```