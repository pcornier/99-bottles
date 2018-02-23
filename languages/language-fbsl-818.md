
## Language FBSL ##
---
- Author: Gerome GUILLEMIN
- Date: 08/02/05
- Info: http
- Score:  (3.00 in 39 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fbsl-818.html
---

```'*99 bottles of beer on the wall      *
'*FBSL Scripting Language             *
'*http://gedd123.free.fr/FBSLv3bin.zip*
Option explicit
#DllDeclare Kernel32("Sleep" As Wait, "Beep")
Dim %beer = 99, %x

Repeat beer
	Locate(10, 2, 1): ? beer & " bottles of beer on the wall " & beer & " bottles of beer"
	beer = beer - 1 : x = x + 1
	Locate(11, 2, 1): ? "Take one down and pass it around " & beer & " bottles of beer on the wall"
	If x > 33 Then
		x = 1: Cls
	Else
		If beer = 9 Then
			Cls
		Else
			Wait(150)
		End if
	End If
	Locate(12, x) : ? Space(x), "{==}"
End Repeat
Wait(500): Cls
? " No more bottle of beer on the wall. No more bottles of beer..."
? " Go to the store and buy some more...99 bottles of beer.", CrLf
Beep(100, 50): Beep(200, 75): Beep(300, 50)
Pause```