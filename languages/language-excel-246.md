
## Language Excel ##
---
- Author: Christian Schmidt
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-excel-246.html
---

```Paste the following lines into an Excel 4 Macro file 
(.xlm extension - it wont work with a regular sheet) 
in the cells A1:A10.

99 bottles of beer - Excel 4 Macro - by Christian Schmidt
To run the macro: right click on cell A3 and select "Run ..."
=SET.VALUE(B1; 99)
=SET.VALUE(B2; "99 bottles of beer")
=SET.VALUE(B3; B2 & " on the wall, " & B2 & ", " & IF(B1 > 0; "take one down and pass it around, ";
\
 "go to the store and buy some more, "))
=SET.VALUE(B1; B1-1)
=SET.VALUE(B2; IF(B1>0; B1; IF(B1=0; "no more"; 99)) & " bottle" & IF(B1<>1; "s"; "") & " of beer")
=SET.VALUE(INDEX(C1:C100;99-B1;1);B3&B2&" on the wall")
=IF(B1>=0; GOTO(A5))
=HALT()```