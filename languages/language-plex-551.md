
## Language PLEX ##
---
- Author: Staale Andersen
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 134 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-plex-551.html
---

```! The main program "99 bottles ..." programmed in PLEX  !
! Programmer Staale Andersen   etosta@eto.ericsson.se   !

! Comment: The need for an own parameterlist and a signal survey, !
! leads to the whole beer program beeing in 3 parts.              !



DOCUMENT BEERPROGRAM;

DECLARE;
          GLOBAL NSYMB COCA99 (#FFFF);
          GLOBAL STRING BEERS (7);
          STRING VARIABLE ONWALL1 31 DS;
          STRING VARIABLE ONWALL2 63 DS;
          STRING VARIABLE BOTTLES 31 DS;
          STRING VARIABLE TAKEDOWN 63 DS;
          VARIABLE CBEER 16 DS;
          VARIABLE CIOID 16 DS;
          VARIABLE TIOID 16;
          VARIABLE TSTARTPHASE 16;
          VARIABLE TSIGNALKEY 16;
          VARIABLE TBLOCKINFO 16;

END DECLARE;
PROGRAM BEERPROGRAM;
PLEX;

          ENTER STTOR  WITH
                    +,                   
                    TSTARTPHASE,         
                    +,                   
                    +,                   
                    +,                   
                    +,                   
                    TSIGNALKEY;          

          TBLOCKINFO = #100;
 
          SEND STTORRY  WITH
                          TSIGNALKEY,    
                          TBLOCKINFO,    
                          5,             
                          255;           
 
                EXIT;
  
          COMMAND BEERS TYPE COCA99,
            ID IS TIOID;
          CIOID = TIOID;
          ONWALL1 = " BOTTLES OF BEER ON A WALL, ";
          ONWALL2 = " BOTTLES OF BEER ON A WALL.";
          BOTTLES = " BOTTLES OF BEER";
          TAKEDOWN = "TAKE ONE DOWN AND PASS IT AROUND, ";
          ON CBEER FROM 99 DOWNTO 1 DO
            CASE CBEER IS
            WHEN 1 DO
              BOTTLES = " BOTTLE OF BEER";
              ONWALL1 = " BOTTLE OF BEER ON A WALL, ";
              ONWALL2 = "NO MORE BOTTLES OF BEER ON A WALL.";
            WHEN 2 DO
              ONWALL2 = " BOTTLE OF BEER ON A WALL.";
            OTHERWISE DO;
            ESAC;
            INSERT VALUE CBEER, ID IS CIOID,
              FORMAT IS 5;
            INSERT STRING ONWALL1, ID IS CIOID;
            INSERT VALUE CBEER, ID IS CIOID,
                FORMAT IS 5;
            INSERT STRING BOTTLES, ID IS CIOID;
            WRITE AFTER 1 NL, ID IS CIOID,
              ABRANCH IS ERROR;
            
            INSERT STRING TAKEDOWN, ID IS CIOID;
            IF CBEER /= 1 THEN
              INSERT VALUE (CBEER-1), ID IS CIOID,
                FORMAT IS 5;
            FI;
            INSERT STRING ONWALL2, ID IS CIOID;
            WRITE AFTER 1 NL, ID IS CIOID,
              ABRANCH IS ERROR;
            
          NO;
          
    ERROR)
          RELEASE DEVICE, ID IS CIOID,
            ABRANCH IS EXIT; 
    EXIT)
          EXIT;

END PROGRAM;          

DATA;

END DATA;          

*END;

ID BEERPROGRAM TYPE DOCUMENT;
CLA 19055;
NUM CAA 100 99;
REV A;
DAT 96-12-12;
DES ETO/TX/M/N STA;
RES ETO/TX/M/N STA;
APP ETO/TX/M/N TV;
END ID;

! The source parameter list !

DOCUMENT BEERSPARAM;

BLOCK   BEER;
TYPE     BTBEER;
TYPEEXT  BTEXTBEER;

USE     BEERPROGRAM;

NSYMB     BTBEER = #8000;   
NSYMB     BTEXTBEER= #4000;  

STRING BEERS = "BEERS";
NSYMB COCA99 = #0;


END BLOCK;
*END;
ID BEERSPARAM TYPE DOCUMENT;
CLA 19073;
NUM CAA 100 99;
REV A;
DAT 96-12-13;
DES ETO/TX/M/N STA;
RES ETO/TX/M/N STA;
APP ETO/TX/M/N TV;
END ID;

! Signal Survey  !
DOCUMENT BEERSURVEY;
SIGNALSURVEY;
USE BLOCK BEER;

STTOR          ,  R     ,  723/15514 - APZ210                  ;
STTORRY        ,  S     ,  724/15514 - APZ210                  ;

END SIGNALSURVEY;
*END;
ID BEERSURVEY TYPE DOCUMENT;
CLA 15514;
NUM CAA 100 99;
REV A;
DAT 96-12-13;
DES ETO/TX/M/N STA;
RES ETO/TX/M/N STA;
APP ETO/ETOTX/M/N TV;
END ID;```