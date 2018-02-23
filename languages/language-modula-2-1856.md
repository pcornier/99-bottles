
## Language Modula-2 ##
---
- Author: Terry Ross
- Date: 08/25/08
- Info: n/a
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-modula-2-1856.html
---

```(* ISO Modula-2 version of 99 Bottles of Beer	      *)
(* Formatted to follow the example on the lyrics page *)
(* XDS Modula-2, Sourge Mage GNU/Linux		      *)
(* Programmer: Terry Ross terry@aliboom.com	      *)
(* Modified from the version submitted by Jeremy Rule *)
MODULE BottlesOfBeerISO;

FROM SWholeIO IMPORT WriteCard;
FROM STextIO  IMPORT WriteString, WriteLn;

CONST
  BOTTLES = 99;
VAR
  counter : CARDINAL;
BEGIN
  counter := BOTTLES;
  REPEAT
    WriteLn;
    WriteCard( counter, 1 );
    WriteString(" bottles of beer on the wall,");
    WriteCard( counter, 0 );
    WriteString(" bottles of beer."); WriteLn;
    WriteString("Take one down, and pass it around,");
    DEC( counter );
    WriteCard( counter, 0 );
    WriteString(" bottle");
    IF counter > 1 THEN WriteString("s") END;
    WriteString(" on the wall."); WriteLn;
  UNTIL ( counter = 1 );
  WriteLn;
  WriteString("1 bottle of beer on the wall, 1 bottle of beer"); WriteLn;
  WriteString("Take it down and pass it around, ");
  WriteString("No more bottles of beer on the wall."); WriteLn;
  WriteLn;
  WriteString("No more bottles of beer on the wall, no more bottles of beer."); WriteLn;
  WriteString("Go to the store and buy some more, 99 bottles of beer on the wall."); WriteLn;

END BottlesOfBeerISO.```