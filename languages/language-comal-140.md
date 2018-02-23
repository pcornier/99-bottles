
## Language COMAL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.67 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-comal-140.html
---

```Common Algorithmic Language.
0010  // bottles of beer
0020
0030  FOR x# := 99 TO 1 STEP -1 DO
0040     bottles(x#, TRUE)
0050     bottles(x#, FALSE)
0060     PRINT "Take one down, pass it around."
0070     bottles(x#-1, FALSE)
0080  ENDFOR x#
0090
0100  END
0110
0120  PROC bottles(num#, wall) CLOSED
0130     PRINT num#;
0140
0150     text$ := "bottle"
0160
0170     IF num# <> 1 THEN
0180        text$ := text$ + "s"
0190     ENDIF
0200
0210     PRINT text$," of beer";
0220
0230     IF wall = TRUE
0240        PRINT "on the wall";
0250     ENDIF
0260
0270     PRINT "."
0280  ENDPROC bottles```