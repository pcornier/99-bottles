
## Language Assembler ##
---
- Author: Ralf Horstmann
- Date: 05/20/06
- Info: http
- Score:  (3.49 in 35 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-1158.html
---

```/***********************************************************************
 * 99 Bottles of Beer in SPARC assembly language for Sun Solaris
 * Compile with: as -o bottles.o bottles.s; ld -o bottles bottles.o
 * Author: Ralf Horstmann <ralf.horstmann@gmx.de>
 ***********************************************************************/
        .section ".rodata"
        .align 4
.botl0: .asciz "no more bottles"
.botl1: .asciz " bottle"
.botl2: .asciz " bottles"
.strg1: .asciz " of beer on the wall, "
.strg2: .asciz " of beer.\n"
.strg3: .asciz "Take one down and pass it around, "
.strg4: .asciz " of beer on the wall.\n\n"
.strg5: .ascii "Go to the store and buy some more,"
        .asciz " 99 bottles of beer on the wall.\n"
        SYSCALL_EXIT=1
        SYSCALL_WRITE=4
        STDOUT=1
        .section ".text"
        .globl main
/***********************************************************************/
main:   save    %sp, -96, %sp
        mov     99, %l0                 ! put the bottles onto the wall
loop:   call    putbtl
        mov     %l0, %o0                ! delay slot
        sethi   %hi(.strg1), %o0
        call    puts
        or      %o0, %lo(.strg1), %o0
        call    putbtl
        mov     %l0, %o0
        sethi   %hi(.strg2), %o0
        call    puts
        or      %o0, %lo(.strg2), %o0
        cmp     %l0, 0
        be      oob                     ! out of beer
        dec     %l0                     ! n - 1
        sethi   %hi(.strg3), %o0
        call    puts
        or      %o0, %lo(.strg3), %o0
        call    putbtl
        mov     %l0, %o0
        sethi   %hi(.strg4), %o0
        call    puts
        or      %o0, %lo(.strg4), %o0
        ba      loop
        nop
oob:    sethi   %hi(.strg5), %o0        ! no beer anymore
        call    puts
        or      %o0, %lo(.strg5), %o0
        call    exit
        mov     0, %o0                  ! exit code
/***********************************************************************
 * print "n bottle(s)"/"no bottles" string, number in o0
 */
putbtl: save    %sp, -96, %sp
        cmp     %i0, 1
        ble     1f
        nop
        call    putn                    ! > 1 bottle
        mov     %i0, %o0
        sethi   %hi(.botl2), %o0
        call    puts
        or      %o0, %lo(.botl2), %o0
        ret
        restore
1:      cmp     %i0, 0
        be      1f
        nop
        call    putn                    ! = 1 bottle
        mov     %i0, %o0
        sethi   %hi(.botl1), %o0
        call    puts
        or      %o0, %lo(.botl1), %o0
        ret
        restore
1:      sethi   %hi(.botl0), %o0        ! no bottles
        call    puts
        or      %o0, %lo(.botl0), %o0
        ret
        restore
/***********************************************************************
 * print number in o0 to stdout
 */
putn:   save    %sp, -(96 + 8), %sp     ! we need some stack space here
        udiv    %i0, 10, %o0            ! o0 = i0 / 10
        umul    %o0, 10, %o2            ! o2 = o0 * 10
        sub     %i0, %o2, %o2           ! o2 = i0 - o2 => remainder
        cmp     %o0, 0                  ! if quotient is not 0, we call
        bz      1f                      ! putn recursively with
        nop                             ! quotient as parameter.
        call    putn
        nop
1:      add     %o2, 0x30, %o2          ! convert remainder to ascii
        stb     %o2, [%sp + 96]         ! store remainder to stack
        add     %sp, 96, %o1            ! put stack address into o1
        mov     STDOUT, %o0
        call    write                   ! print remainder to stdout
        mov     1, %o2                  ! one character only
        ret
        restore
/***********************************************************************
 * print zero terminated string, o0: string pointer
 */
puts:   save    %sp, -96, %sp
        mov     %i0, %o0
1:      ldub    [%o0], %o1              ! load next byte from buffer
        cmp     0, %o1
        bne,a   1b                      ! ,a: inc instruction is only
        inc     %o0                     ! executed if branch is taken
        sub     %o0, %i0, %o2           ! strlen is in o2 now
        mov     %i0, %o1
        call    write
        mov     STDOUT, %o0
        nop
        ret
        restore
/***********************************************************************
 * write syscall, o0: fd, o1: string pointer, o2: length
 */
write:  mov     SYSCALL_WRITE, %g1      ! syscall number passed in g1
        ta      8
        retl
        nop
/***********************************************************************
 * exit syscall, exit code in o0
 */
exit:   mov     SYSCALL_EXIT, %g1
        ta      8```