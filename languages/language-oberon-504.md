
## Language Oberon ##
---
- Author: Andrejs Jansons
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 69 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-oberon-504.html
---

```MODULE BottlesOfBeers; (* Andrejs Jansons 27.10.95 *)

      IMPORT Out;

      PROCEDURE Start*;
           VAR
                bottles: INTEGER;
           BEGIN
                bottles := 99;

                REPEAT
                    Out.Int(bottles, 2);
                    Out.String(" bottles of beer on the wall, ");
                    Out.Int(bottles, 2);
                    Out.String(" bottles of beer.");
                    Out.Ln;
                    Out.String("Take one down, pass it around, ");

                    DEC(bottles);

                    Out.Int(bottles, 2);
                    Out.String(" bottles of beer on the wall.");
                    Out.Ln
                UNTIL bottles = 1;

                Out.String("1 bottle of beer on the wall, one bottle of beer.");
                Out.Ln;
                Out.String("Take one down, pass it around,");
                Out.String(" no more bottles of beer on the wall");
                Out.Ln
           END Start;

END BottlesOfBeers.```