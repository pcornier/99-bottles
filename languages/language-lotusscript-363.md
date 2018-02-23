
## Language LotusScript ##
---
- Author: Sean Heffernan
- Date: 04/20/05
- Info: n/a
- Score:  (2.80 in 107 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lotusscript-363.html
---

```Sub Click(Source As Button)
        ' -----------------------------------------------------
        ' 99 Bottle of Beer on the Wall, in LotusScript
        ' By Sean Heffernan
        ' -----------------------------------------------------

        Dim ui As New NotesUIWorkspace
        Dim s As String
        Dim n As Integer
       
        For n = 99 To 1 Step -1
                If n > 1 Then
                        s = Cstr(n) + " bottles of beer on the wall. " +
Cstr(n) + " bottles of beer. Take one down, pass it around. " + Cstr(n-1)
+ " bottles of beer on the wall."
                Else
                        s =  "Only one more bottle of beer on the wall.
Only one more bottle of beer. Take it down, pass it around. No more
bottles of beer on the wall."
                End If
                Call ui.Prompt ( PROMPT_OK, "99 Bottles of Beer ...", s )
        Next
       
End Sub```