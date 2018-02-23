
## Language VFP (Visual FoxPro) ##
---
- Author: Daniel B. Johnson
- Date: 04/12/08
- Info: http
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vfp-(visual-foxpro)-1759.html
---

```* ===================================================================== *
* Program: Beer class                                                   *
* ===================================================================== *
* Purpose: List the complete lyrics to the song 99 bottles of Beer,     *
*          and create a txt file of same.                               *
*                                                                       *
* Created: 04/11/2008 10:47 AM                                          *
*  Author: Daniel B. Johnson                                            *
*                                                                       *
* ===================================================================== *
* To execute, start Visual FoxPro, execut at command prompt.            *
* ===================================================================== *

    oSong = CREATEOBJECT("BeerSong")
    oSong.sing()
    oSong = .NULL.

* ===================================================================== *
DEFINE CLASS BeerSong AS Session OLEPUBLIC
* ===================================================================== *

    PROTECTED nBeer AS Number 
    PROTECTED cBeer, ;
        cNextBeer as Character
        
        
PROCEDURE sing as Logical 
*************************
    SET TEXTMERGE TO beer.txt
    SET TEXTMERGE ON SHOW 

    WITH THIS
        FOR .nBeer = 99 TO 0 STEP -1
            \<<.cBeer>> bottle<<.cPlural(.nBeer)>> of beer on the wall,
            \\ <<LOWER(.cBeer)>> bottle<<.cPlural(.nBeer)>> of beer.
            IF .nBeer <> 0
                \Take one down and pass it around,
            ELSE 
                \Go to the store and buy some more,
            ENDIF                     
            \\ <<.cNextBeer>> bottle<<.cPlural(.nBeer-1)>> of beer on the wall.
            \
        ENDFOR 
    ENDWITH 

    SET TEXTMERGE OFF 
    SET TEXTMERGE TO 

RETURN .T.
ENDPROC


PROCEDURE cBeer_access
**********************
    RETURN IIF(.nBeer <> 0, ALLTRIM(PADR(.nBeer,2)), "No more")
ENDPROC 


PROCEDURE cNextBeer_access
**************************
    DO CASE 
        CASE .nBeer > 1
            RETURN ALLTRIM(PADR(.nBeer - 1,2))
        CASE .nBeer = 1
            RETURN "no more"
        CASE .nBeer = 0
            RETURN "99"
    ENDCASE 
ENDPROC 


PROTECTED PROCEDURE cPlural
***************************
    LPARAMETERS vnBottles
    RETURN IIF(vnBottles <> 1,'s','')
ENDPROC 


* ===================================================================== *
ENDDEFINE
* ===================================================================== *```