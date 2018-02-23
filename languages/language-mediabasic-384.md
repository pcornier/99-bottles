
## Language MediaBASIC ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mediabasic-384.html
---

```'99 bottles of beer using  a TListbox in MediaBASIC ;)
'For more info on MediaBASIC, please visit http://www.uolang.org/mediabasic

Sub Main ()

Form = Self.Create("TForm") 
Form.Caption = "[99 Bottles of Beer]"
 
ListBox = Form.Create("TListBox")
  With ListBox 
    .Parent = Form
    .Align= "alClient"
End With

For b = 99 To 1 Step -1
with Listbox.Items
      .Add (b & " bottle(s) of beer on the wall, " & b & " bottle(s) of beer.")
      .Add ("Take one down, pass it around, " & (b-1) & " bottle(s) of beer on the wall.")
      .Add ("")
End With
Next

Form.ShowModal 
Form.Free 
End Sub```