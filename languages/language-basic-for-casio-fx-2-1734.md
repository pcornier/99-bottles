
## Language Basic for Casio FX 2 ##
---
- Author: Jan Prazak
- Date: 03/24/08
- Info: n/a
- Score:  (2.33 in 33 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-basic-for-casio-fx-2-1734.html
---

```'99 bottles of beer
'for
'Casio Algebra FX 2
'By Jan Prazak, www.amarok.cz
'Note: "->" is the assignment arrow, it's a special symbol;
'function "GetKey" returns key codes to the variable "Ans",
'0 = no key, 47 = ESC (escape)

For 99->B To 1 Step -1

ClrText

4->X
If B<10
Then 3->X
IfEnd

Locate 1,1,B
Locate X,1,"BOTTLE(S) OF BEER"
Locate 1,2,"ON THE WALL,"
Locate 1,3,B
Locate X,3,"BOTTLE(S) OF BEER"

Locate 1,4,"-- TAKE ONE DOWN"
Locate 1,5,"AND PASS IT AROUND,"

4->X
If B-1<10:Then 3->X
IfEnd

Locate 1,6,B-1
Locate X,6,"BOTTLE(S) OF BEER"
Locate 1,7,"ON THE WALL"

Do:GetKey
LpWhile Ans=0

If Ans=47:Then Break
IfEnd

Next

ClrText```