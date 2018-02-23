
## Language Selcopy ##
---
- Author: Pete Berrecloth
- Date: 11/19/07
- Info: http
- Score:  (4.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-selcopy-1631.html
---

```// EXEC SELCOPY,SIZE=250K

    *******************************************************************
    **** 99 BOTTLES OF BEER WRITTEN IN SELCOPY (JUNE 2004)         ****
    **** THIS VARIANT TESTED ON IBM DOS/VSE MAINFRAME              ****
    ****                                                           ****
    **** AUTHOR: PETE BERRECLOTH                                   ****
    ****                                                           ****
    **** SELCOPY IS AN INFORMATION RETRIEVAL PACKAGE FOR IBM       ****
    **** MAINFRAMES, AS400, PC, AND UNIX (WEBSITE: WWW.CBL.COM)    ****
    *******************************************************************

    READ CARD WORKLEN 1000

    IF INCOUNT EQ 1
       THEN POS   1 MOD '99 BOTTLES OF BEER ON THE WALL, '
       THEN POS 101 MOD '99 BOTTLES OF BEER,    '
       THEN POS 301 MOD X'099C'

    CVPC 2 FROM 301 TO 1 FORMAT 'Z9'

NUVVA-BOTTLE

    CVPC 2 FROM 301 TO 101 FORMAT 'Z9'

    IF POS 301 GT X'009C'
       THEN MOVE 32 FROM 1   TO 901
       THEN MOVE 22 FROM 101 TO 933
    ELSE    MOVE 31 FROM 2   TO 901
       THEN MOVE 22 FROM 102 TO 932
       THENIF POS 301 EQ X'001C'
          THEN MOVE 39 FROM 910 TO 909
          THEN MOVE 10 FROM 940 TO 939
          THEN POS 947 MOD ',  '

    PRINT FROM 901 LRECL 55
    PRINT 'TAKE ONE DOWN AND PASS IT AROUND,'
    SUB 1 FROM 2 AT 301

    CVPC 2 FROM 301 TO 1 FORMAT 'Z9'

    IF POS 301 EQ X'001C'
       THEN PRINT '1 BOTTLE OF BEER ON THE WALL'
    ELSEIF POS 301 GT X'009C'
       THEN PRINT FROM 1 LRECL 30
       ELSE PRINT FROM 2 LRECL 29

    IF POS 301 NE X'000C'
       THEN GOTO NUVVA-BOTTLE

    STOP
END
DUMMY CARD```