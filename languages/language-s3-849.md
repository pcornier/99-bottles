
## Language S3 ##
---
- Author: Steve Hammond
- Date: 08/24/05
- Info: n/a
- Score:  (2.96 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-s3-849.html
---

```MODULE BOTTLES
 
EXT (<PREFIX "ICLCTM">) PROC (
    REF () BYTE              ,
    RESPONSE                 ) SEND_MESSAGE ;
 
GLOBAL STATIC (<STATUS 5>) PROC BOTTLES IS () :
 
BEGIN
      INT          I_RESPONSE    ;
      INT          I_COUNT := 99 ;
 
      () BYTE      S_OUTPUT :=
                   "** bottles of beer on the wall" X"15"
                   "** bottles of beer" ;
 
      REF () BYTE  PART1 IS S_OUTPUT (0 SIZE 2)  ;
      REF () BYTE  PART2 IS S_OUTPUT (31 SIZE 2) ;
 
      FOR   I_COUNT FROM 99 TO 0 BY -1
      DO
            UNPACKS (
                  S'D'I_COUNT ,
                  PART1       ,
                  0           ,
                  NIL         ) ;
 
            MOVE (
                  PART1       ,
                  PART2       ,
                  0           ,
                  0           ,
                  NIL         ,
                  NIL         ) ;
 
            SEND_MESSAGE (
                  S_OUTPUT   ,
                  I_RESPONSE )
 
      REPEAT
 
END ;
ENDMODULE```