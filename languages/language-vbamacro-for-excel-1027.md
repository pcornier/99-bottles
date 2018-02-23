
## Language VBAMacro for Excel ##
---
- Author: Scott Schuler
- Date: 01/18/06
- Info: http
- Score:  (2.65 in 17 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vbamacro-for-excel-1027.html
---

```Sub BottlesOfBeer99()
'
' BottlesOfBeer99 Macro
' Macro recorded  by Scott Schuler
'

'
    Workbooks.Add
    myText1 = "bottles of beer on the wall"
    myText2 = "bottles of beer"
    myText3 = "You take one down and pass it around"
'
    myRow = 1
    myBeers = 99
    myColor = 1
    For x = 1 To 99
        Cells(myRow, 1).Select
        Cells(myRow, 1) = myBeers & " " & myText1 & ", " & myBeers & " " & myText2
        GoSub myColorSet
        myRow = myRow + 1
        Cells(myRow, 1).Select
        Cells(myRow, 1) = myText3 & ", " & myBeers - 1 & " " & myText1
        GoSub myColorSet
        myRow = myRow + 1
        myColor = myColor + 1
        If myColor = 11 Then
            myColor = 1
        End If
        myBeers = myBeers - 1
    Next x
'
    myRow = 1
    myBeers = 99
    For x = 1 To 99
        Cells(myRow, 3) = myBeers
        myRow = myRow + 1
        myBeers = myBeers - 1
    Next x
    Range("C1:C99").Select
    Charts.Add
    ActiveChart.ChartType = xl3DColumnClustered
    ActiveChart.SetSourceData Source:=Sheets("Sheet1").Range("C1:C99"), PlotBy _
        :=xlColumns
    ActiveChart.Location Where:=xlLocationAsObject, Name:="Sheet1"
    With ActiveChart
        .HasTitle = False
        .Axes(xlCategory).HasTitle = False
        .Axes(xlSeries).HasTitle = False
        .Axes(xlValue).HasTitle = False
    End With
    ActiveWindow.Visible = False
    Columns("C:C").Select
'    Selection.EntireColumn.Hidden = True
'
    Columns("A:A").Select
    Selection.Font.Bold = True
    Columns("A:A").EntireColumn.AutoFit
    Range("A1").Select
    Exit Sub
'

myColorSet:
    Select Case myColor
        Case 1
            Selection.Font.ColorIndex = 3
            Selection.Interior.ColorIndex = 35
        Case 2
            Selection.Font.ColorIndex = 45
            Selection.Interior.ColorIndex = 34
        Case 3
            Selection.Font.ColorIndex = 43
            Selection.Interior.ColorIndex = 46
        Case 4
            Selection.Font.ColorIndex = 50
            Selection.Interior.ColorIndex = 9
        Case 5
            Selection.Font.ColorIndex = 42
            Selection.Interior.ColorIndex = 4
        Case 6
            Selection.Font.ColorIndex = 41
            Selection.Interior.ColorIndex = 3
        Case 7
            Selection.Font.ColorIndex = 13
            Selection.Interior.ColorIndex = 36
        Case 8
            Selection.Font.ColorIndex = 48
            Selection.Interior.ColorIndex = 1
        Case 9
            Selection.Font.ColorIndex = 7
            Selection.Interior.ColorIndex = 36
        Case 10
            Selection.Font.ColorIndex = 44
            Selection.Interior.ColorIndex = 52
    End Select
    Return
End Sub```