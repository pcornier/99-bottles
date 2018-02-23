
## Language Word ##
---
- Author: Mark Pilgrim
- Date: 04/20/05
- Info: n/a
- Score:  (2.59 in 17 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-word-159.html
---

```Sub MAIN
REM "99 bottles of beer on the wall"
REM Microsoft Word WordBasic macro language version
REM written by Mark Pilgrim, f8dy@netaxs.com
FileNew
beer$ = "99"
bottle$ = " bottles "
For  count = 99 To 1 Step - 1
  Insert beer$ + bottle$ + "of beer on the wall,"
  InsertPara
  Insert beer$ + bottle$ + "of beer,"
  InsertPara
  Insert "Take "
  If count > 1 Then
    Insert "one"
  Else
    Insert "it"
  End If
  Insert " down, pass it around,"
  InsertPara
  If count > 1 Then
    beer$ = Str$(count - 1)
    beer$ = Right$(beer$, Len(beer$) - 1)
    If count = 2 Then bottle$ = " bottle "
    Insert beer$ + bottle$ + "of beer on the wall."
    InsertPara
  Else
    Insert "No more bottles of beer on the wall."
  End If
  InsertPara
Next
End Sub```