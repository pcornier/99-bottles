
## Language Reflection Basic Script ##
---
- Author: Jukka Rajakangas
- Date: 08/21/06
- Info: http
- Score:  (2.91 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-reflection-basic-script-1244.html
---

```Sub Main
	With Application
	
	Open "c:\temp\lyrics.txt" For Output As #1
	
	Dim i%
	Dim row1$, row2$, row3$
	
	i = 99

	row3 = "Take one down and pass it around, no more bottles of beer on the wall." & _
                   Chr(10) & Chr(10) & _
		   "No more bottles of beer on the wall, no more bottles of beer." & Chr(10) & _
		   "Go to the store and buy some more, 99 bottles of beer on the wall."
	
	while i > 0 
		row1 = i & " bottles of beer on the wall, " & i & " bottles of beer."
		row2 = "Take one down and pass it around, " & i-1 & " bottles of beer on the wall." & Chr(10)
		
		Print #1, row1
		
		If i > 1 Then
			Print #1, row2
		Else
			Print #1, row3
		End If	
		i = i - 1
	wend

	End With
End Sub```