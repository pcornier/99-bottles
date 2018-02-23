
## Language RosAsm ##
---
- Author: James Daughtry
- Date: 04/03/06
- Info: http
- Score:  (2.88 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rosasm-1105.html
---

```; Macro for CDECL calling convention
[ccall
    #if #N=1
        #error 'No arguments detected: use call instruction'
    #else
        &9=0 | ccall2 #1 #L>2
    #endif
]
[ccall2 | &9=&9+4 | push #2 | #+1 | call #F | add esp &9]

; Clean termination macro
[exit | push 0 | call 'Kernel32.ExitProcess']

__________________________________________________________


main:
    mov ebx,9

    L0: ccall beer,ebx
        ccall iteration,ebx
        ; Take a beer down
        dec ebx
        ccall beer,ebx
        call 'msvcrt._fgetchar'
    test ebx,ebx | jnz L0<
exit


iteration:
    [@msg2: B� '%d bottles of beer',10,0]
    [@msg2b: B� '1 bottle of beer',0]
    [@msg3: B� 'Take one down, pass it around',0]

    cmp D�esp+4,1 | jne L0>
        ccall 'msvcrt.puts',@msg2b
        jmp L1>
    L0: ccall 'msvcrt.printf',@msg2,ebx
    L1: ccall 'msvcrt.puts',@msg3
ret


beer:
    [@msg1: B� '%d bottles of beer on the wall',10,0]
    [@msg1b: B� '1 bottle of beer on the wall',0]
    [@msg4: B� 'No more bottles of beer on the wall',0]

    cmp D�esp+4,1 | jbe L0>
        ccall 'msvcrt.printf',@msg1,ebx
        jmp L2>
    L0: jne L1>
        ccall 'msvcrt.puts',@msg1b
        jmp L2>
    L1: ccall 'msvcrt.puts',@msg4
    L2:
ret```