
## Language Excel ##
---
- Author: Alejandro Julien
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-excel-247.html
---

```Admittedly, yet another VB application.

Sub Beers()
' 99 bottles of beer on the wall
' Visual Basic for Excel version
' by Alejandro Julien (ajulien@tonatiuh.sis.uia.mx)
' Done with Excel 7 (Windows '95)
'
' It will start from the first cell of the first worksheet
' and move on downwards.
    Dim Cervezas As Integer 'Cervezas = beer in spanish
    Dim miCelda As Integer  'miCelda = myCell in spanish
    Worksheets(1).Activate
    ' Colors
    Range("A1:AA1").Interior.Color = RGB(0, 0, 128)
    ActiveCell.Offset(1, 0).Value = "by Alejandro Julien"
    Range("A1:A204").Font.Color = RGB(0, 0, 128)
    ' Title
    Range("A1").Select
    With ActiveCell
        .Value = "The 99 bottles of beer on the wall song"
        .Font.Size = 18
        .Font.Color = RGB(255, 255, 255)
    End With
    With ActiveCell.Offset(2, 0)
        .Value = "(ajulien@tonatiuh.sis.uia.mx)"
        With .Font
            .Italic = True
            .Size = 8
        End With
    End With
    miCelda = 3
    ' GO!
    For Cervezas = 99 To 2 Step -1
        ActiveCell.Offset(miCelda, 0).Value = Cervezas & " bottles of beer on the wall, " & Cervezas
& " bottles of beer"
        miCelda = miCelda + 1
        ActiveCell.Offset(miCelda, 0).Value = "take one down and pass it around"
        miCelda = miCelda + 1
    Next
    ' ONE_BEER_EXCEPTION handling *whew!*
    ActiveCell.Offset(miCelda, 0).Value = "One bottle of beer on the wall, one bottle of beer"
    miCelda = miCelda + 1
    ActiveCell.Offset(miCelda, 0).Value = "take it down and pass it around"
    miCelda = miCelda + 1
    ' Beer's over
    ActiveCell.Offset(miCelda, 0).Value = "No more bottles of beer on the wall, no more bottles of
beer"
    miCelda = miCelda + 1
    ActiveCell.Offset(miCelda, 0).Value = "Go to the store and buy some more"
    miCelda = miCelda + 1
    ' Sponsor's message
    With ActiveCell.Offset(miCelda, 0)
        .Value = "...but make sure it's mexican beer!"
        .Font.Italic = True
        .Font.Size = 8
    End With
    Application.Caption = "Cerveza mexicana siempre!"
    ' No kidding. If you have the chance, try a good mexican beer (:
    '-------
    ' This piece of code goes for the "99 bottles of beer" homepage,
    ' and may be used by whoever finds it useful to show Language,
    ' way of doing the chore, or proof that programmers seem to have
    ' no life (even though this is not a complete truth...)
    ' <#include "disclaim.h>
End Sub```