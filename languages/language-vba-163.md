
## Language VBA ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.38 in 34 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-vba-163.html
---

```' VBA/Access version of 99 Bottles of beer (Bottles.mdb)
' Philipp Winterberg, http://www.winterbergs.de
'
' How to use:
' 1. Create a new database (Bottles.mdb)
' 2. Create a new module
' 3. Paste this code snippet
' 4. Click "Play"-button and enjoy ;)
'
Public Function Bottles()
On Error GoTo Bottles_Err
Dim b As Integer

For b = 99 To 1 Step -1
  If MsgBox(b & " bottle(s) of beer on the wall, " & vbCr & b & " bottle(s) of beer." & vbCr & _
     "Take one down, pass it around, " & vbCr & (b - 1) & " bottle(s) of beer on the wall.", _
     65, "99 Bottles of Beer") = 2 Then
    Exit Function
  End If
Next

Bottles_Exit:
    Exit Function

Bottles_Err:
    MsgBox Error$
    Resume Bottles_Exit
    
End Function```