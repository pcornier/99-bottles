
## Language Thoroughbred BASIC ##
---
- Author: Steve Armstrong
- Date: 08/18/07
- Info: http
- Score:  (3.00 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-thoroughbred-basic-1580.html
---

```00010 REM "99 Bottles

00110 BEGIN

00120 PRINT 'CS',

00130 LET BOTS$="bottles", OF$=" of beer", WALL$=" on the wall", TAKE$="Take one

 down, pass it around, ", STORE$="Go to the store and buy some more, "

00500 FOR I=99 TO 1 STEP -1

00510 LET BOTTLE$=BOTS$; IF I=1 THEN LET BOTTLE$=BOTS$(1,STL(BOTS$)-1)

00520 LET BOT_QTY1$=STR(I); IF I=0 THEN LET BOT_QTY1$="No more"

00530 PRINT IOL=FIRST_LINE

00540 LET BOTTLE$=BOTS$; IF I-1=1 THEN LET BOTTLE$=BOTS$(1,STL(BOTS$)-1)

00570 LET BOT_QTY2$=STR(I-1); IF I=1 THEN LET BOT_QTY2$="No more"

00580 PRINT IOL=SECOND_LINE,'LF'

00590 NEXT I

00700 LET BOT_QTY1$=BOT_QTY2$, BOT_QTY2$="99", TAKE$=STORE$, BOTTLE$=BOTS$

00710 PRINT IOL=FIRST_LINE

00720 PRINT IOL=SECOND_LINE

09500 FIRST_LINE: IOLIST BOT_QTY1$," ",BOTTLE$,OF$,WALL$,", ",CVT(BOT_QTY1$,4096

)," ",BOTTLE$,OF$,"."

09510 SECOND_LINE: IOLIST TAKE$,CVT(BOT_QTY2$,4096)," ",BOTTLE$,OF$,WALL$,"."

09999 END```