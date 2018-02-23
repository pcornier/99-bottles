
## Language Assembler (System/370) ##
---
- Author: R. Heemskerk
- Date: 04/20/05
- Info: n/a
- Score:  (3.05 in 38 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-assembler-(system-370)-48.html
---

```* 99 bottles of beer
* Assembler program for IBM System/370 (and up)
* (c) R. Heemskerk, systeemprogrammeur@zonnet.nl
* The program expects a sequential output dataset allocated to ddname OUTDD, FB80
BOTTLE99 CSECT
         SAVE  (14,12),,BOTTLE99
         LR    12,15
         USING BOTTLE99,12
         LR    11,13
         CNOP  0,4
         BAL   13,START
         DC    20A(0)
START    ST    13,8(11)
         ST    11,4(13)
         OPEN  (OUTFILE,(OUTPUT))
         MVI   EXTRA1,C's'
         MVI   EXTRA2,C's'
         LA    4,99
LOOP     CVD   4,DEC
         MVC   CNVNUM,MASK
         ED    CNVNUM,DECNUM
         MVC   OUTNUM1,CNVNUM+2
         MVC   OUTNUM2,CNVNUM+2
         CL    4,=F'1'
         BNE   PUT
         MVI   EXTRA1,C' '
         MVI   EXTRA2,C' '
PUT      PUT   OUTFILE,OUTLINE1
         PUT   OUTFILE,OUTLINE2
         BCT   4,LOOP
         PUT   OUTFILE,OUTLINE3
         PUT   OUTFILE,OUTLINE4
DONE     CLOSE OUTFILE
EXIT     L     13,4(13)
         RETURN (14,12),RC=0
CNVNUM   DS    XL4
MASK     DC    X'40202120'
DEC      DS    0D
         DS    XL6
DECNUM   DS    XL2
OUTLINE1 DC    CL80' '
         ORG   OUTLINE1
OUTNUM1  DS    CL2
         DC    C' bottle'
EXTRA1   DC    C' '
         DC    C' of beer on the wall, '
OUTNUM2  DS    CL2
         DC    C' bottle'
EXTRA2   DC    C' '
         DC    C' of beer.'
         ORG   OUTLINE1+80
OUTLINE2 DC    CL80'Take one down, pass it around.'
OUTLINE3 DC    CL80'No more bottles of beer on the wall, no more bottleX
               s of beer.'
OUTLINE4 DC    CL80'Go to the store and buy some more.'
OUTFILE  DCB   DSORG=PS,DDNAME=OUTDD,MACRF=(PM)
         LTORG
         END```