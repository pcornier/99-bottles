
## Language IBM/3x0 Assembler ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 26 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ibm-3x0-assembler-320.html
---

```This one is in IBM 360/370/390 assembler, and is known 
to assemble under HLASM/390. Identifiers start in 
column 1, opcodes/instructions in column 10, and 
operands in column 16, with continuation characters in column 72 
when needed. Isn't emulating punched cards fun?

BEER     CSECT
* Standard entry linkage.
          STM   14,12,12(13)
          LR    12,15
          USING BEER,12
          LA    14,BEERSV
          ST    13,4(,14)
          ST    14,8(,13)
          LR    13,14
* The meat of the thing.
          OPEN  (BEERDCB,(OUTPUT))
MOREBEER CP    BOTTLES,=P'0'
          BE    NOBEER
          MVC   LINE1(4),=X'40202120'
          MVC   LINE2(4),=X'40202120'
          MVC   LINE5(4),=X'40202120'
          ED    LINE1(4),BOTTLES
          ED    LINE2(4),BOTTLES
          MVI   LINE1,C'0'
          PUT   BEERDCB,LINE1
          PUT   BEERDCB,LINE2
          PUT   BEERDCB,LINE3
          PUT   BEERDCB,LINE4
          SP    BOTTLES,=P'1'
          ED    LINE5(4),BOTTLES
          PUT   BEERDCB,LINE5
          B     MOREBEER
NOBEER   DS    0H
          CLOSE (BEERDCB)
* Standard exit linkage.
          L     13,4(,13)
          LM    14,12,12(13)
          XR    15,15
          BR    14
          LTORG
BEERSV   DC    18F'0'
BOTTLES  DC    PL2'99'
LINE1    DC    CL132'     bottles of beer on the wall,'
LINE2    DC    CL132'     bottles of beer!'
LINE3    DC    CL132'  Take one down,'
LINE4    DC    CL132'  Pass it around,'
LINE5    DC    CL132'     bottles of beer on the wall!'
BEERDCB  DCB   DDNAME=BEEROUT,                                         X
                DSORG=PS,                                               X
                RECFM=FA,                                               X
                MACRF=PM,                                               X
                LRECL=132
          END   BEER```