
## Language HP 48 Calculator ##
---
- Author: Kiyoshi Akima
- Date: 04/28/06
- Info: http
- Score:  (3.00 in 19 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-hp-48-calculator-1147.html
---

```( 99 Bottles of Beer   )
( HP 48 SysRPL Version )
( by Kiyoshi Akima     )
( 2006.04.27           )

ASSEMBLE
    NIBASC  /HPHP48-B/
RPL
::
    AtUserStack
    RECLAIMDISP ClrDA1IsStat TURNMENUOFF
    NULL$ SEVEN NDUPN DROP
    ' ::
        3GETLAM 4GETLAM 5GETLAM 6GETLAM 7GETLAM 8GETLAM
        9PUTLAM 8PUTLAM 7PUTLAM 6PUTLAM 5PUTLAM 4PUTLAM
        3PUTLAM
        3GETLAM  4GETLAM  5GETLAM  6GETLAM  7GETLAM  8GETLAM  9GETLAM
        DISPROW1 DISPROW2 DISPROW3 DISPROW4 DISPROW5 DISPROW6 DISPROW7
    ;
    99
    NULLLAM NINE NDUPN {}N BIND
    BEGIN
        1GETLAM #>$
        " bottle" &$
        1GETLAM #1<> IT :: CHR_s >T$ ;
        " of beer" &$
        DUP 2GETEVAL
        " on the wall," 2GETEVAL
        CHR_. >T$ 2GETEVAL
        "Take one down," 2GETEVAL
        " pass it around." 2GETEVAL
        1GETLAM #1- 1PUTLAM
        1GETLAM #0=ITE
            "No more"
            :: 1GETLAM #>$ ;
        " bottle" &$
        1GETLAM #1<> IT :: CHR_s >T$ ;
        " of beer" &$
        2GETEVAL
        " on the wall." 2GETEVAL
    1GETLAM #0= UNTIL
    TURNMENUON RECLAIMDISP ClrDAsOK
    ABND
;```