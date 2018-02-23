
## Language Aurora ##
---
- Author: Gary Willoughby (Kale)
- Date: 11/02/06
- Info: http
- Score:  (3.00 in 23 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-aurora-1319.html
---

```Declare Import, Beep(int Frequency, int Duration);
Declare Import, Sleep(int Milliseconds);

Sub PlaySong(string Music, int Duration)
{
	for (x = 1 ; x < Len(Music) ; x++)
	{
		Select(StrMid(Music, x, 1))
		{
			Case "A":
				Beep(220, Duration);
			Case "D":
				Beep(147, Duration);
			Case "E":
				Beep(165, Duration);
			Case "F":
				Beep(185, Duration);
			Case "G":
				Beep(196, Duration);
			Case "0":
				Sleep(Duration);
		}
	}
}

Global Sub main()
{
	string Text = " bottle(s) of beer";
	string TextEnd = " on the wall";
	for (x = 99;x > 0;x--)
	{
		Print(" " + Str$(x) + Text + TextEnd + ",");
		PlaySong("GGGDDDGGGG000", 130);
		Print(" " + Str$(x) + Text + ".");
		PlaySong("AAAEEEA0000", 130);
		Print(" Take one down, pass it around,");
		PlaySong("GFFFFFFFFFF000", 130);
		Print(Chr$(32) + Str$(x - 1) + Text + TextEnd + Chr$(46));
		PlaySong("DDDDEFGGGG000", 130);
		Print(Chr$(32));
	}
}```