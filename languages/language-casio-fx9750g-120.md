
## Language Casio FX9750G ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 168 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-casio-fx9750g-120.html
---

```The "Do" loops are only there to make it look a bit nicer - otherwise it just
shoots through too fast to read. Feel free to remove them.All lines must be
ended with the Enter character (EXE) It may work on some other Casio models 
as well.

For 99 -> K To 2 Step -1
Locate 1,1,K
Locate 4,1,"BOTTLES OF BEER ON"
Locate 4,2,"THE WALL"
50->X
Do
X - 1 ->X
LpWhile X =/=0
Locate 1,3,K
Locate 4,3,"BOTTLES OF BEER"
50->X
Do
X - 1 ->X
LpWhile X =/= 0
Locate 1,4,"YOU TAKE ONE DOWN"
20->X
Do
X - 1 ->X
LpWhile X =/= 0
Locate 1,5,"AND PASS IT AROUND"
20->X
Do
X - 1 ->X
LpWhile X =/= 0
Locate 1,6,K-1
If K > 1 Then Locate 4,6,"BOTTLES OF BEER ON"
Else Locate 4,6,"BOTTLE OF BEER ON"
Locate 4,7,"THE WALL"
ClrText
Next
"1  BOTTLE OF BEER ON"
"   THE WALL"
50->X
Do
X - 1 ->X
LpWhile X =/=0
"1  BOTTLE OF BEER"
50->X
Do
X - 1 ->X
LpWhile X =/=0
"YOU TAKE IT DOWN"
20->X
Do
X - 1 ->X
LpWhile X =/=0
"AND PASS IT AROUND"
20->X
Do
X - 1 ->X
LpWhile X =/=0
"NO MORE BOTTLES OF
"BEER ON THE WALL"```