
## Language QPAC ##
---
- Author: Christof B�rgi
- Date: 11/23/05
- Info: http
- Score:  (2.83 in 18 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-qpac-955.html
---

```//UseridT JOB (1,1),'BOB',CLASS=x,MSGCLASS=A,NOTIFY=Userid
//* 
//BOB     EXEC PGM=QPAC
//QPACLIST  DD SYSOUT=A
//OPF       DD SYSOUT=*
//SYSIN     DD *
*. file definition
OPF=SQ,CLR=NO
*. field definition
0001=OLINE,CL80
0001=ONOMORE,CL7
0006=OTEN,CL1
0006=ONUMBER,ZL2
0009=OBOTTLE,CL7
0016=OBEER,CL8
0024=OWALL,CL13
*. initialisation
SET X1 = 99
*. main loop                                      
DO-UNTIL X1 = 0
  SET ONUMBER = X1
  IF X1 < 10 THEN SET OTEN = SPACE IFEND
  SET OBOTTLE = C'bottles'
  SET OBEER-X2 = C' of beer'
  SET OWALL-X2 = C' on the wall,'
  PUT-OPF
  SET OWALL-X2,CL13 = C','
  PUT-OPF
  SET OLINE = C'take one down and pass it around,'
  PUT-OPF
  SET OLINE = SPACE
  SET X1 = X1 - 1
  IF X1 = 0 THEN
    SET ONOMORE = C'no more'
    SET X2 = 0
  ELSE
    SET ONUMBER = X1
    IF X1 < 10 THEN SET OTEN = SPACE IFEND
    IF X1 = 1 THEN SET X2 = 1 IFEND
  IFEND
  SET OBOTTLE = C'bottles'
  SET OBEER-X2 = C' of beer'
  SET OWALL-X2 = C'.'
  PUT-OPF
  SET OLINE = SPACE
  PUT-OPF
DOEND
END
//*```