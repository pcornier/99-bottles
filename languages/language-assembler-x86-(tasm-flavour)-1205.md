
## Language Assembler x86 (TASM Flavour) ##
---
- Author: Vladimir V. Kalashnikov
- Date: 07/05/06
- Info: http
- Score:  (3.07 in 29 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-x86-(tasm-flavour)-1205.html
---

```;
; "99 Stanzas on how to drink beer ;-)" TASM v3.0 (x86 assembler)
;

        .model  tiny

        .code
        org     100h

start:  call    print

stanza  macro   howmany,what
        db      '&howmany','&what',13,10
        display '&howmany&&what'
        endm

bottles =       99
        rept    99
        stanza  %bottles,< bottles of beer on the wall>
        stanza  %bottles,< bottles of beer>
        stanza  ,<take one down, pass it around>
bottles =       bottles-1
        stanza  %bottles,< bottles of beer on the wall>
        endm
        stanza  0,< bottles of beer>
        stanza  ,<go to the store and buy some more>
        db      '$'

print:  pop     dx
        mov     ah,9
        int     21h
        ret

        end     start```