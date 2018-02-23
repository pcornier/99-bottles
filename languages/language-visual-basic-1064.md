
## Language Visual Basic ##
---
- Author: Seirian J. Pardoe
- Date: 02/27/06
- Info: http
- Score:  (2.98 in 49 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-visual-basic-1064.html
---

```'-------------------------------------------
'99 Bottles of Beer (scroling text version)
'by Seirian J. Pardoe
'in Visual Basic 6
'on 25/2/05
'-------------------------------------------

'Just start a starndard .exe project right click on the form
'click "view code" and paste in this code.

Option Explicit

'Verse data structure

Private Type cVerse
    Line1 As String
    Line2 As String
    Position As Double
End Type

Dim Verse() As cVerse

Dim Pan As Double

Dim EndNow As Boolean

'The speed of the text will vary depending on the speed of your computer
'so ajust this constant untill you get a pan speed of your liking

Const PanSpeed = 0.1

Private Sub Form_Load()
Dim X%
    
    'Set the starting number of bottles
    X = 99
    
    'Set the form's Title
    Form1.Caption = Str(X) + " Bottles of Beer"
    
    'Set the form's size
    Form1.Width = 8000
    Form1.Height = 5000
    
    'set the forms position to the centere of the screen
    Form1.Left = (Screen.Width / 2) - (Form1.Width / 2)
    Form1.Top = (Screen.Height / 2) - (Form1.Height / 2)
    
    'Set scale mode to pixel
    Form1.ScaleMode = 3
    
    'Start with all the text at the bottom of the form
    Pan = -Form1.ScaleHeight
    
    'Set background color to black
    Form1.BackColor = 0
    
    'Set the foreground color* to dark green (*text color in this case)
    Form1.ForeColor = RGB(25, 150, 25)
    
    'Set the form's font
    Form1.Font = "Arial"
    Form1.FontSize = 12
    
    'Turn on auto redraw for flicker free display
    Form1.AutoRedraw = True
    
    'Show the form, this is needed when an infinit loop is used
    Form1.Show
    
    'Write the song withe X number of bottles
    WriteSong X
    
    'Display the results as scroling text
    DisplayResults
    
End Sub

Sub WriteSong(NoOfBottles As Integer)
Dim i%, n%
    
    'Dont alow a negative number of bottles
    If NoOfBottles < 0 Then NoOfBottles = 0
    
    'Resize the verse array
    ReDim Verse(NoOfBottles)

    'Loop through the number of bottles
    For i = NoOfBottles To 0 Step -1
    
        'Set n to 0, it is used to select the phrase of the first line
        n = 0
        
        'Select the current verse
        With Verse(NoOfBottles - i)
        
        'Write first line of the verse

NextPhrase: '** Return here to write the second phrase of the first line

            If i > 0 Then .Line1 = .Line1 + Right(Str(i), Len(Str(i)) - 1)
            If i = 0 And n = 0 Then .Line1 = .Line1 + "No more"
            If i = 0 And n = 1 Then .Line1 = .Line1 + "no more"
            If i <> 1 Then .Line1 = .Line1 + " bottles of beer"
            If i = 1 Then .Line1 = .Line1 + " bottle of beer"
            If n = 0 Then .Line1 = .Line1 + " on the wall, ": n = 1: GoTo NextPhrase '**
            If n = 1 Then .Line1 = .Line1 + "."
            
            
            'Write the second line of the verse

            If i > 0 Then .Line2 = "Take one down and pass it around, "
            If i = 0 Then .Line2 = "Go to the store and buy "
            If i = 0 And NoOfBottles > 1 Then .Line2 = .Line2 + "some more, "
            If i = 0 And NoOfBottles = 1 Then .Line2 = .Line2 + "one more, "
            If i = 0 And NoOfBottles = 0 Then .Line2 = .Line2 + "no more, "
            If i > 2 Then .Line2 = .Line2 + Str(i - 1) + " bottles"
            If i = 2 Then .Line2 = .Line2 + Str(i - 1) + " bottle"
            If i = 1 Then .Line2 = .Line2 + "no more bottles"
            If i = 0 And NoOfBottles > 1 Then .Line2 = .Line2 + Str(NoOfBottles) + " bottles"
            If i = 0 And NoOfBottles = 1 Then .Line2 = .Line2 + Str(NoOfBottles) + " bottle"
            If i = 0 And NoOfBottles = 0 Then .Line2 = .Line2 + "no bottles"
            .Line2 = .Line2 + " of beer on the wall."
            
            
            'Set the text's position
            .Position = (NoOfBottles - i) * 60
            
        End With
    Next i
    
End Sub

Sub DisplayResults()
Dim i%

    Do
        'Clear the form
        Form1.Cls
        
        'Exit the loop when the app is closed
        If EndNow = True Then Exit Sub
        
        'loop through the verse array
        For i = 0 To UBound(Verse)
        
            With Verse(i)
            
                'Check if text is on screen
                If .Position - Pan > -60 And .Position - Pan < Form1.ScaleHeight + 60 Then
                    
                    'Print the first line
                    CurrentX = 20
                    CurrentY = .Position - Pan
                    Form1.Print .Line1
                    
                    'Print Line 2 (Y Position is automaticly set)
                    CurrentX = 20
                    Form1.Print .Line2
                    
                End If
            End With
        Next i
        
        'Increment the pan value once per frame
        Pan = Pan + PanSpeed
        
        'Do OS events
        DoEvents
        
    Loop
End Sub

Private Sub Form_Unload(Cancel As Integer)
    EndNow = True
    Unload Me
End Sub```