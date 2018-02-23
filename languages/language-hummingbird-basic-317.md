
## Language Hummingbird Basic ##
---
- Author: Eric Korpela
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 52 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hummingbird-basic-317.html
---

```' Hummingbird Basic version of the Beer Song
' By Eric Korpela (http://setiathome.ssl.berkeley.edu/~korpela)

Function DisplayBox(verse$, i%)
  If (i<>1) Then
    DisplayBox=Msgbox(verse, 4, "Verse")
  Else
    DisplayBox=Msgbox(verse, 0, "Verse")
  End If  
End Function

Function Plural$(i%)
  If (i%=1) Then Plural="" Else Plural="s" 
End Function

Function NewFormat$(i%)
  If (i%=0) Then NewFormat="No" Else NewFormat=Format(i%)
End Function

Sub Main
  Dim verse$, i%
  For i%=99 to 1 step -1
    verse=Format(i%) & " bottle" & Plural(i%) & " of beer on the wall." & chr$(13)
    verse=verse & Format(i%) & " bottle" & Plural(i%) & " of beer."& chr$(13) 
    verse=verse & "You take one down and pass it around" & chr$(13)
    verse=verse & NewFormat(i%-1) & " bottle" & Plural(i%-1) 
    verse=verse & " of beer on the wall." & chr$(13) & chr$(13)
    If (i<>1) Then verse=verse & "Drink more?"
    If (DisplayBox(verse, i)=7) Then 
      Msgbox "What a light weight!",48,"Wimp Out"
      Exit For
    End If 
  Next i%
End Sub```