
## Language Gambas ##
---
- Author: Medical-Wei
- Date: 03/26/07
- Info: http
- Score:  (3.00 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gambas-1428.html
---

```(With Console mode and create a new startup class.)

STATIC PUBLIC SUB Main()
DIM X AS Integer
DIM ProcStr AS String
FOR X=99 TO 0 STEP -1
ProcStr=X & " bottles of beer"
IF X=1 THEN ProcStr="1 bottle of beer"
IF X=0 THEN ProcStr="No more bottles of beer"
IF X<>99 THEN PRINT "Take one down and pass it around, " & ProcStr & " on the wall."
PRINT ProcStr & " on the wall, " & ProcStr &"."
NEXT
PRINT "Go to the store and buy some more, 99 bottles of beer on the wall."
END```