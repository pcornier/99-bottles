
## Language WordBasic ##
---
- Author: Cory Sandahl
- Date: 04/20/05
- Info: n/a
- Score:  (2.83 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-wordbasic-160.html
---

```' Word Basic version of 99 bottles of beer
' by Cory Sandahl (sandahl@u.washington.edu) 12/10/96

Sub MAIN

FileNew .NewTemplate = 1, .Template = "Normal.DOT"
StartOfDocument
s$ = "s"

For NumberOfBeers = 99 To 1 Step - 1

    Insert Str$(NumberOfBeers) + " bottle" + s$ + " of beer on the wall," + Chr$(11)
    Insert Str$(NumberOfBeers) + " bottle" + s$ + " of beer..." + Chr$(11)
    Insert "Take one down, pass it around," + Chr$(11)
    
    If (NumberOfBeers - 1) < 2 Then
        s$ = ""
    End If

    Insert Str$(NumberOfBeers - 1) + " bottle" + s$ + " of beer on the wall. " + Chr$(11) +
Chr$(11)

Next
Insert Chr$(11) + Chr$(11) + "No more beer.  Bye-bye."

End Sub```