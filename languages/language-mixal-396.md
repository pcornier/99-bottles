
## Language MIXAL ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-mixal-396.html
---

```* MIXAL VERSION OF 99 BOTTLES OF BEER
* LAURENT VOGEL,  HTTP://LVOGEL.FREE.FR

BUF     EQU  2000

        ORIG 3000
CRLF    STJ  XCRLF
        OUT  BUF(18)
        JBUS *
        J4Z  2F
1H      STZ  BUF,4
        DEC4 1
        J4P  1B
2H      STZ  BUF,4
        ENT3 0
XCRLF   JMP  *

PUTCH   STJ  XPUTCH
        INC3 9
        CMP3 =54=
        JL   1F
        ENT3 9
        INC4 1
1H      ST3  2F(4:4)
2H      STX  BUF,4
XPUTCH  JMP  *

PUTS    STJ  XPUTS
        ENT1 9
        ENTX 0
1H      ST1  2F(4:4)
2H      LDX  0,2
        CMPX =47=
        JE   XPUTS
        INC1 9
        CMP1 =54=
        JL   3F
        ENT1 9
        INC2 1
3H      JMP  PUTCH
        JMP  1B
XPUTS   JMP  *

PNUM    STJ  XP
        J5Z  2F
        ENTA 0,5
        CHAR 
        CMP5 =10=
        JL   1F
        SRC  1
        JMP  PUTCH
        SLC  1
1H      JMP  PUTCH
        JMP  3F
2H      ENT2 NOMORE
        JMP  PUTS
3H      ENT2 BOTTLE
        JMP  PUTS
        CMP5 =1=
        JE   1F
        ENTX 22
        JMP  PUTCH
1H      ENT2 OFBEER
        JMP  PUTS
XP      JMP  *

START   ENT5 99
        ENT4 0
        ENT3 0
LOOP    JMP  PNUM
        ENT2 WALL
        JMP  PUTS
        ENTX 41
        JMP  PUTCH
        JMP  CRLF
        JMP  PNUM
        ENTX 40
        JMP  PUTCH
        JMP  CRLF
        DEC5 1
        ENT2 TAKE
        JMP  PUTS
        ENTX 41
        JMP  PUTCH
        JMP  CRLF
        JMP  PNUM
        ENT2 WALL
        JMP  PUTS
        ENTX 40
        JMP  PUTCH
        JMP  CRLF
        J5Z  1F
        JMP  CRLF
        JMP  LOOP
1H      HLT  

        ORIG BUF+24
BOTTLE  ALF   BOTT
        ALF  LE/  
OFBEER  ALF   OF B
        ALF  EER/ 
WALL    ALF   ON T
        ALF  HE WA
        ALF  LL/  
TAKE    ALF  TAKE 
        ALF  ONE D
        ALF  OWN, 
        ALF  PASS 
        ALF  IT AR
        ALF  OUND/
NOMORE  ALF  NO MO
        ALF  RE/  
  
        END  START```