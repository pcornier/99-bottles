
## Language Sax Basic ##
---
- Author: Markus Welz
- Date: 02/17/10
- Info: http
- Score:  (2.93 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sax-basic-2316.html
---

```Option Explicit

'This script writes the song "99 Bottles of Beer" to the Immediate window of the code editor.
Sub Main
  Dim i As Long

  'Clear previous output. This function is probably the only difference to VBA ;-)
  Debug.Clear

  For i = 99 To 0 Step -1

    Select Case i
      Case 2
        Debug.Print i & " bottles of beer on the wall, " & i & " bottles of beer."
        'Special case singular.
        Debug.Print "Take one down and pass it around, " & i-1 & " bottle of beer on the wall."
      Case 1
        'Special case singular.
        Debug.Print i & " bottle of beer on the wall, " & i & " bottle of beer."
        'Special case zero.
        Debug.Print "Take one down and pass it around, no more bottles of beer on the wall."
      Case 0
        'Special case zero.
        Debug.Print "No more bottles of beer on the wall, no more bottles of beer."
        Debug.Print "Go to the store and buy some more, 99 bottles of beer on the wall."
      Case Else
        'Common case.
        Debug.Print i & " bottles of beer on the wall, " & i & " bottles of beer."
        Debug.Print "Take one down and pass it around, " & i-1 & " bottles of beer on the wall."
    End Select

    'An empty line.
    Debug.Print ""

  Next i

End Sub```