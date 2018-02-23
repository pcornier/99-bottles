
## Language AMOS Professional ##
---
- Author:  Fran�ois Lionet
- Date: 04/21/06
- Info: http
- Score:  (2.84 in 38 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-amos-professional-1131.html
---

```Rem AMOS Professional (The Creator) Basic version for Commodore Amiga computers
Rem of "99 bottles of beer"
Rem There is a compiler available for this Basic.
Rem Written by Thierry Predavec
Rem This prints exactly the same output as seen at
Rem http://www.99-bottles-of-beer.net/lyrics.html
Rem (Assuming that the URL has not been changed, nor the output as of April 17, 2006)

B=99
Do
   Print str$(B)-" ";" bottles of beer on the wall,";B;" bottles of beer."
   Dec B
   Exit If B<2
   PRINT "Take one down and pass it around,";B;" bottles of beer on the wall.";Chr$(13)
Loop
Print "Take one down and pass it around, 1 bottle of beer on the wall.";Chr$(13)
Print "1 bottle of beer on the wall, 1 bottle of beer."
Print "Take one down and pass it around, no more bottles of beer on the wall.";Chr$(13)
Print "No more bottles of beer on the wall, no more bottles of beer."
Print "Go to the store and buy some more, 99 bottles of beer on the wall."```