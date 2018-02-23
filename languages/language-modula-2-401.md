
## Language Modula 2 ##
---
- Author: Jeremy Rule
- Date: 04/20/05
- Info: n/a
- Score:  (2.80 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-modula-2-401.html
---

```(* Modula-2 version of 99 Bottles of Beer            *)
(* Tested on a VAX 7700 running OpenVMS              *)
(* Programmer: Jeremy Rule  rulej@tempest.adsnet.net *)
MODULE BottlesOfBeer;

FROM InOut IMPORT WriteCard, WriteString, WriteLn;

CONST
        BOTTLES = 99;
VAR
        counter : CARDINAL;
BEGIN
        counter := BOTTLES;
        REPEAT
                WriteCard( counter,2 );
                WriteString(" bottles of beer on the wall, ");
                WriteCard( counter,2 );
                WriteString(" bottles of beer."); WriteLn;
                WriteString(" Take one down, and pass it around, ");
                DEC( counter );
                WriteCard( counter,2 );
                WriteString(" bottles of beer on the wall."); WriteLn;
        UNTIL ( counter = 1 );
        WriteString("1 bottle of beer on the wall, 1 bottle of beer"); WriteLn;
        WriteString("Take it down and pass it around, ");
        WriteString("No more bottles of beer on the wall."); WriteLn;

END BottlesOfBeer.```