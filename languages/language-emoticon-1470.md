
## Language Emoticon ##
---
- Author: Mike Stone
- Date: 05/01/07
- Info: http
- Score:  (2.94 in 105 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-emoticon-1470.html
---

```** Initialize song lyrics, useful integer constants and bottle counter **
Song:-O bottles of beer on the wall, bottles of beer. Take one down and pass it around, bottles
        of beer on the wall.
SongN:-O 21
Final:-O Go to the store and buy some more, 99
FinalN:-O 8
bottle:-O bottle
No:-O No
no:-O no
more:-O more
T:-O 3
B:-O 99

** Beggining of main loop **
:-(

** Print the current verse of the song **
B:-P S:-P
SongN:-O
Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P
Song:-@ Song:-P S:-P Song:-@ B:-P S:-P Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P
Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P
S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@

** Decrement the bottle counter and continue printing **
B:-O -1 B:+} SongN:-O
B:-P S:-P Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@
Song:-P S:-P Song:-@ Song:-P S:-P Song:-@

** Continue looping while the bottle counter is above the verse for 2 bottles **
B:-O
T:<\
:-E
:-)

*********************
** Verse 2 bottles **
*********************

B:-P S:-P
SongN:-O
Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P
Song:-@ Song:-P S:-P Song:-@ B:-P S:-P Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P
Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P
S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@

B:-O -1 B:+} SongN:-O
B:-P S:-P bottle:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@
Song:-P S:-P Song:-@ Song:-P S:-P Song:-@

********************
** Verse 1 bottle **
********************

B:-P S:-P
bottle:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P
Song:-@ Song:-P S:-P Song:-@ B:-P S:-P bottle:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P
Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P
S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@

B:-O -1 B:+} SongN:-O
no:-P S:-P more:-P S:-P Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P
Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@

***************************
** Verse no more bottles **
***************************

No:-P S:-P more:-P S:-P
Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P
Song:-@ Song:-P S:-P Song:-@ no:-P S:-P more:-P S:-P Song:-P S:-P Song:-@ Song:-P S:-P Song:-@
Song:-P S:-P Song:-@

** Print the special go to store lyrics **
FinalN:-O
Final:-P S:-P Final:-@ Final:-P S:-P Final:-@ Final:-P S:-P Final:-@ Final:-P S:-P Final:-@
Final:-P S:-P Final:-@ Final:-P S:-P Final:-@ Final:-P S:-P Final:-@ Final:-P S:-P Final:-@
Final:-P S:-P Final:-@

** Skip unnecessary lyrics and print the rest **
SongN:-O
Song:-@ Song:-@ Song:-@ Song:-@ Song:-@ Song:-@ Song:-@
Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P Song:-@ Song:-P S:-P
Song:-@ Song:-P S:-P Song:-@```