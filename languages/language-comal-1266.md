
## Language COMAL ##
---
- Author: >>_I)@�kl��(I_<<
- Date: 09/08/06
- Info: n/a
- Score:  (3.00 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-comal-1266.html
---

```// 99 bottles of beer
// Damien montgomery
// september 2006
//
FOR count% := 99 TO 1 STEP -1 DO
    bottles (count%, TRUE)
    bottles (count%, FALSE)
    PRINT "Take one down, pass it around."
    bottles (count% - 1, FALSE)
NEXT count%
END
//
PROC bottles (number%, wall) CLOSED
    PRINT number%;
    text$ := " bottle"
    IF number% <> 1 THEN
        text$ := text$ + "s"
    ENDIF
    PRINT text$; " of beer";
    IF wall THEN
        PRINT " on the wall";
    ENDIF
    PRINT "."
ENDPROC bottles```