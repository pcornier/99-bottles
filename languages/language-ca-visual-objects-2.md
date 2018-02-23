
## Language CA-Visual Objects 2.0 ##
---
- Author: Ervin STECKL
- Date: 02/17/06
- Info: http
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ca-visual-objects-2.0-1057.html
---

```TEXTBLOCK Comments
/*
// 1. Create an empty application.
// 2. Paste this code in module "Start". There should be 5 entities after,
//    including this textblock.
// 3. The only library you have to include is "Terminal Lite".
// Should also run under CA-Visual Objects 1.x
*/

GLOBAL cBob := " bottles of beer" AS STRING

FUNCTION Start()
  LOCAL i AS INT
  LOCAL cOtw := " on the wall" AS STRING
  LOCAL cTod := "Take one down and pass it around, " AS STRING
	
  FOR i := 99 DOWNTO 0
    ? FLU(Bob(i)) + cOtw + ", " + Bob(i) + "."
    IF i == 0
      ? "Go to the store and buy some more, " + Bob(99) + cOtw + "."
    ELSE
      ? cTod + (Bob(i-1)) + cOtw + "."
    ENDIF
    ?
  NEXT i
  wait  // to see the result...
RETURN

FUNCTION Bob(i AS INT) AS STRING  // Bottles Of Beer function
  LOCAL cRes AS STRING
	
  DO CASE
    CASE i == 0
      cRes := "no more" + cBob
    CASE i == 1
      // I utilize the fact that there is only one "s" in cBob 
      cRes := "1" + StrTran(cBob, "s", "")	
    OTHERWISE
      cRes := LTrim(Str(i)) + cBob
  ENDCASE

RETURN cRes

FUNCTION FLU(cStr AS STRING) AS STRING	// First Letter to Upper case
RETURN Upper(Left(cStr,1)) + SubStr(cStr,2)```