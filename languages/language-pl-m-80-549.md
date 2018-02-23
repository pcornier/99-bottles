
## Language PL/M-80 ##
---
- Author: John Durbetaki
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pl-m-80-549.html
---

```/*
 * 99 bottles of beer in PL/M-80
 *
 * by John Durbetaki using AEDIT
 *
 */
Ninety$Nine:
Do;

declare as              LITERALLY   'LITERALLY'
declare CRLF            as          '0Dh,0Ah'

declare Beers           BYTE DATA(99);
declare Message1(*)     BYTE DATA(' of beer on the wall,',CRLF);
declare Message2(*)     BYTE DATA(' of beeeeer . . . . ,',CRLF);
declare Message3(*)     BYTE DATA('Take one down, pass it around,',CRLF);
declare Message4(*)     BYTE DATA(' of beer on the wall.',CRLF);
declare End$Message(*)  BYTE DATA(CRLF,'Time to buy more beer!',CRLF);
declare STATUS          BYTE;
declare How$Many(128)   BYTE;
declare How$Many$Count  BYTE;

Copy: PROCEDURE(Ap,Bp,Count);
    declare Ap              ADDRESS;
    declare A BASED Ap      BYTE;
    declare Bp              ADDRESS;
    declare B BASED Bp      BYTE;
    declare Count           BYTE;

    DO WHILE Count > 0;
        B=A;
        Ap=Ap+1;
        Bp=Bp+1;
        Count=Count-1;
        END;
    END;

Make$How$Many: PROCEDURE(Beers);
    declare Beers           BYTE;

    if Beers = 0 THEN DO;
        CALL Copy(.('No more bottles'),.How$Many(0),How$Many$Count=15);
        END;
    else if Beers = 1 THEN DO;
        CALL Copy(.('One more bottle'),.How$Many(0),How$Many$Count=15);
        END;
    else DO;
        if Beers > 10 THEN DO;
            How$Many(0)='0'+(Beers/10);
            How$Many(1)='0'+(Beers MOD 10);
            CALL Copy(.(' bottles'),.How$Many(2),8);
            How$Many$Count=10;
            END;
        else DO;
            How$Many(0)='0'+Beers;
            CALL Copy(.(' bottles'),.How$Many(1),8);
            How$Many$Count=9;
            END;
        END;
    END;

Chug: PROCEDURE(Beers);
    declare Beers           BYTE;

    CALL Make$How$Many(Beers);
    CALL WRITE(0,.How$Many,Count,.STATUS);
    CALL WRITE(0,.Message1,SIZE(Message1),.STATUS);
    CALL WRITE(0,.How$Many,Count,.STATUS);
    CALL WRITE(0,.Message2,SIZE(Message2),.STATUS);
    CALL WRITE(0,.Message3,SIZE(Message3),.STATUS);
    CALL Make$How$Many(Beers-1);
    CALL WRITE(0,.How$Many,Count,.STATUS);
    CALL WRITE(0,.Message4,SIZE(Message4),.STATUS);
    END;

    DO WHILE Beers > 0;
        CALL Chug(Beers);
        Beers=Beers-1;
        END;
    CALL WRITE(0,.End$Message,SIZE(End$Message),.STATUS);
    END;```