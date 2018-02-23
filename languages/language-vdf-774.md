
## Language VDF ##
---
- Author: A Paul Anthony
- Date: 07/01/05
- Info: http
- Score:  (3.00 in 25 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vdf-774.html
---

```Procedure mPrintBeer
    Integer iMax iCount iBottles
    String sCRLF sVerse

    Move 100 to iMax
    Move (character(13) + character(10)) to sCRLF

    For iCount from 0 to iMax
        Move (iMax - iCount) to iBottles

        Move (String(iBottles) * "Bottles of beer on the wall,";
            * String(iBottles) * "bottles of beer." + sCRLF ;
            + "Take one down and pass it around,";
            * if((iBottles = 1), "no", String(iBottles - 1));
            * "bottle of beer on the wall." + sCRLF ) to sVerse

        ShowLn sVerse
    Loop

    Move ("No more bottle of beer on the wall.";
       * "No more bottles of beer..." + sCRLF;
       + "Go to the store and buy some more...";
       * "99 bottles of beer.") to sVerse

    ShowLn sVerse
End_Procedure```