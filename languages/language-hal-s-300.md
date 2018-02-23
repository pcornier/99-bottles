
## Language HAL/S ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.44 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hal-s-300.html
---

```C 2003 RUPERT SCAMMELL / PUBLIC DOMAIN
C THIS PROGRAM WILL PRINT THE POPULAR FOLK SONG
C 99 BOTTLES OF BEER ON THE WALL IN THE HAL/S
C PROGRAMMING LANGUAGE, A REAL TIME FLIGHT CONTROL
C LANGUAGE PRIMARILY USED FOR FLIGHT CONTROL SOFTWARE ON
C US SPACE SHUTTLES.
C FOR MORE INFO, SEE http://www.netcomuk.co.uk/~spaceuk/hals/hals.html
                                                                                   
NINETY_NINE_BOTTLES:
PROGRAM;
        DECLARE NUM_BOTTLES INTEGER;
        DECLARE BBWALL CHAR(30);
        DECLARE BBEER CHAR(30);
        DECLARE TWDOWN CHAR(50);
        BBWALL = ' Bottles of Beer on the Wall';
        BBEER = ' Bottles of Beer';
        TWDOWN = 'Take one down, and pass it around...';
                                                                                   
        DO NUM_BOTTLES = 100 TO 1 BY -1:
                WRITE(6) NUM_BOTTLES||BBWALL;
                WRITE(6) NUM_BOTTLES||BBEER;
                WRITE(6) TWDOWN;
        END;
        WRITE(6) 'NO MORE BOTTLES OF BEER ON THE WALL!'
CLOSE NINETY_NINE_BOTTLES;```