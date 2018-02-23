
## Language CDC CPU COMPASS ##
---
- Author: K. D. Olsen
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cdc-cpu-compass-122.html
---

```            IDENT  BOTTLES
             ENTRY  BOTTLES
             SYSCOM B1=1

             COMMENT  COPYRIGHT CONTROLFREAKS 2004
             TITLE  BOTTLES - CLASSIC 99 BOTTLES OF BEER.
   ***       BOTTLES - CLASSIC 99 BOTTLES OF BEER.
   *
   *         K. D. OLSEN  04/02/14

    OBUFL    EQU    401B

    BC       DATA   99          BOTTLE COUNT
    M1       DATA   H*        -- BOTTLES OF BEER ON THE WALL, -- BOTTLES*
             DATA   H* OF BEER.  TAKE ONE DOWN, PASS IT AROUND. -- BOTTL*
             DATA   C*ES OF BEER ON THE WALL.*
    M2       DATA   C*        NO MORE BOTTLES OF BEER ON THE WALL.*
    M3       DATA   C* *
    M4       DATA   C* BUT 7-11 IS JUST DOWN THE STREET.*

    OUTPUT   FILEC  OBUF,OBUFL

    BOTTLES  SB1    1
             SX2    OUTPUT      FET ADDRESS
    BTL1     SA1    BC          BOTTLE COUNT
             SX6    X1-1
             ZR,X1  BTL2        IF NO MORE BOTTLES
             SA6    A1
             SB5    X6
             RJ     =XCDD=      CONVERT COUNT TO DISPLAY
             SA3    M1+4        -- BOTTLES
             SA6    M1          PUT FIRST CONVERTED AMOUNT IN MESSAGE
             MX7    6*2
             BX3    -X7*X3      .. BOTTLES
             SX1    B5
             BX4    X7*X4       99........
             SA5    M1+9          -- BOTTL
             MX0    -2*6
             BX7    X4+X3       99 BOTTLES
             LX0    -2*6        ..**......
             SA7    A3
             RJ     =XCDD=
             BX5    -X0*X5        .. BOTTL
             LX6    6*6           99
             BX6    X0*X6       ..99......
             BX6    X5+X6         99 BOTTL
             SA6    A5+
             WRITEC OUTPUT,M1   DISPLAY THE CURRENT COUNT MESSAGE
             EQ     BTL1

    BTL2     WRITEC X2,M2       * NO MORE BOTTLES...* MESSAGE
             WRITEC X2,M3       * *
             WRITEC X2,M4       * 7-11 ...* MESSAGE
             WRITER X2,R        CLOSE OUTPUT
             ENDRUN

    OBUF     BSS    OBUFL       OUTPUT BUFFER

             END    BOTTLES```