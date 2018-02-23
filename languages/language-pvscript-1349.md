
## Language PVScript ##
---
- Author: R.J. Groothuis
- Date: 12/11/06
- Info: http
- Score:  (3.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pvscript-1349.html
---

```'99 Bottles of Beer in PVscript
'By R.J. Groothuis

Sub OnLabel2Click()
   For i = 99 To 0 Step -1
       Select Case i
           Case 1
               msg i & " Bottle of beer on the wall, " & i & " bottle of beer."
               msg "Take one down and pass it around, no more bottles of beer on the wall."
           Case 0
               msg "No more bottle of beer on the wall. No more bottles of beer..."
               msg "Go to the store and buy some more... 99 bottles of beer."
           Case Else
               msg i & " Bottles of beer on the wall, " & i & " bottles of beer."
               msg "Take one down and pass it around, " & i - 1 & " bottles of beer on the wall."
       End Select
   Next
End Sub

Sub msg(message)
    MsgBox message, , "99 Bottles of Beer"
End Sub```