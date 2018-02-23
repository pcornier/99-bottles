
## Language Purebasic ##
---
- Author: Gary Willoughby (Kale)
- Date: 11/02/06
- Info: http
- Score:  (3.00 in 38 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-purebasic-1318.html
---

```Procedure PlaySong(Music.s, Duration)
	For x.l = 1 To Len(Music)
		Select Mid(Music, x, 1)
			Case "A" : Beep_(220, Duration)
			Case "D" : Beep_(147, Duration)
			Case "E" : Beep_(165, Duration)
			Case "F" : Beep_(185, Duration)
			Case "G" : Beep_(196, Duration)
			Case "0" : Delay(Duration)
		EndSelect
	Next x
EndProcedure

OpenConsole()
a$ = " bottle(s) of beer" : ConsoleTitle("99" + a$) : c$ = " on the wall" : ClearConsole()
For b = 99 To 1 Step -1
	PrintN(" " + Str(b) + a$ + c$ + ",") : PlaySong("GGGDDDGGGG00", 125)
	PrintN(" " + Str(b) + a$ + ".") : PlaySong("AAAEEEA0000", 125)
	PrintN(" Take one down, pass it around,") : PlaySong("GFFFFFFFFFF00", 125)
	PrintN(Chr(32) + Str(b - 1) + a$ + c$ + Chr(46)) : PlaySong("DDDDEFGGGG00", 125)
	PrintN(Chr(32))
Next b
CloseConsole()
End```