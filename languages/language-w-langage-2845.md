
## Language W-Langage ##
---
- Author: ABDev
- Date: 03/11/12
- Info: http
- Score:  (2.25 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-w-langage-2845.html
---

```BottlesTotal is int = 99
LyricFirstLine is string = "%1 bottle%2 of beer on the wall, %3 bottle%4 of beer." + CR
LyricSecondLine is string = "Take one down and pass it around, %5 bottle%6 of beer on the wall." +
CR + CR
EndOfSong is boolean = False

WHILE BottlesTotal > 2
	Trace(StringBuild(LyricFirstLine + LyricSecondLine, BottlesTotal, "s", BottlesTotal, "s",
BottlesTotal - 1, "s"))
	BottlesTotal--
	Info(BottlesTotal)
END

IF BottlesTotal = 2 THEN
	Trace(StringBuild(LyricFirstLine + LyricSecondLine, BottlesTotal, "s", BottlesTotal, "s",
BottlesTotal - 1, ""))
	BottlesTotal--
	Info(BottlesTotal)
END

IF BottlesTotal = 1 THEN
	Trace(StringBuild(LyricFirstLine + LyricSecondLine, BottlesTotal, "", BottlesTotal, "", "no more",
"s"))
	EndOfSong = True
	Info(BottlesTotal)
END

IF EndOfSong THEN Trace(StringBuild(LyricFirstLine + "Go to the store and buy some more, 99 bottles
of beer on the wall.", "No more", "s", "no more", "s"))```