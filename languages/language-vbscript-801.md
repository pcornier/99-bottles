
## Language VBScript ##
---
- Author: exec
- Date: 07/19/05
- Info: n/a
- Score:  (3.00 in 66 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vbscript-801.html
---

```'99 Bottles of Beer in VBS
'coded by exec

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

Sub msg(message)
    MsgBox message, , "99 Bottles of Beer"
End Sub```