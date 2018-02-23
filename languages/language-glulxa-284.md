
## Language Glulxa ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: http
- Score:  (3.01 in 113 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-glulxa-284.html
---

```;  Glulxa version of 99 bottles of beer
;  Laurent Vogel,  http://lvogel.free.fr
;  Glulx toolcase found at http://www.plover.net/~jaybird/glulx.zip

stack 256
ext 1024

section code

:main   dc.b 0xc0 0x00 0x00
        copy 0x01.l (sp) 
        copy 0x03.l (sp)
        copy 0x00.l (sp) 
        copy 0x00.l (sp) 
        copy 0x00.l (sp) 
        glk 0x23.b 0x05.b (:glk_winnum).l
        copy (:glk_winnum).l (sp)
        glk 0x2f.b 0x01.b (:glk_result).l

        copy 99 (:n).l
:loop   call :p.l 0 0
        call :w.l 0 0
        streamchar 0x2c
        streamchar 0x0a
        call :p.l 0 0
        streamchar 0x2e
        streamchar 0x0a
        streamchar 0x54
        streamchar 0x61
        streamchar 0x6b
        streamchar 0x65
        streamchar 0x20
        streamchar 0x6f
        streamchar 0x6e
        streamchar 0x65
        streamchar 0x20
        streamchar 0x64
        streamchar 0x6f
        streamchar 0x77
        streamchar 0x6e
        streamchar 0x2c
        streamchar 0x20
        streamchar 0x70
        streamchar 0x61
        streamchar 0x73
        streamchar 0x73
        streamchar 0x20
        streamchar 0x69
        streamchar 0x74
        streamchar 0x20
        streamchar 0x61
        streamchar 0x72
        streamchar 0x6f
        streamchar 0x75
        streamchar 0x6e
        streamchar 0x64
        streamchar 0x2c
        streamchar 0x0a
        sub (:n).l 1 (:n).l
        call :p.l 0 0
        call :w.l 0 0
        streamchar 0x2e
        streamchar 0x0a
        streamchar 0x0a
        jnz (:n).l :loop.l     
        quit

:w      dc.b 0xc0 0x00 0x00
        streamchar 0x20
        streamchar 0x6f
        streamchar 0x6e
        streamchar 0x20
        streamchar 0x74
        streamchar 0x68
        streamchar 0x65
        streamchar 0x20
        streamchar 0x77
        streamchar 0x61
        streamchar 0x6c
        streamchar 0x6c
        return 0
        
:p      dc.b 0xc0 0x00 0x00
        jnz (:n).l :nz.l
        streamchar 0x4e
        streamchar 0x6f
        streamchar 0x20
        streamchar 0x6d
        streamchar 0x6f
        streamchar 0x72
        streamchar 0x65
        jump :bot
:nz     streamnum (:n).l
:bot    streamchar 0x20
        streamchar 0x62
        streamchar 0x6f
        streamchar 0x74
        streamchar 0x74
        streamchar 0x6c
        streamchar 0x65
        jeq (:n).l 1 :one.l
        streamchar 0x73
:one    streamchar 0x20
        streamchar 0x6f
        streamchar 0x66
        streamchar 0x20
        streamchar 0x62
        streamchar 0x65
        streamchar 0x65
        streamchar 0x72
        return 0
        
section vdata
:n      ds.l 1
:glk_winnum ds.l 1
:glk_result ds.l 1```