
## Language Goto++ ##
---
- Author: Sib
- Date: 12/06/05
- Info: http
- Score:  (3.78 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-goto++-976.html
---

```#! 99 bottles of beer in Goto++ (Language by Sidoine)
   (http://gpp.niacland.net/ (in french))

   This version by Sib (sibylangel?gmail!com)
   Tested with Goto++ 0.29
!#

niveaugourou 0

GOTO Vars
msgBtle = � bottle�
msgWall = � of beer on the wall�
msgBeer = � of beer.;n�
msgTake = �Take one down, pass it around, �
newLine = �;n;n�
msgEnd  = �Go to the store and buy some more, �
msgNoN  = �No more�
msgNon  = �no more�
plural  = *`s'
beers   = *(99)

GOTO Loop
�1
GOTOPRINTDUTEXTE() &msgWall &plural &msgBtle &beers
GOTOPRINTDUTEXTE() &msgBeer &plural &msgBtle &beers *` ' *`,'
GOTOPRINTDUTEXTE() &msgTake
beers = &beers ++ *(-1)
AUTOGOTOZ } &beers eg *(1) {
    plural = ��
AC
AUTOGOTOZ } &beers eg *(0) {
    beers  = &msgNon
    plural = *`s'
AC
GOTOPRINTDUTEXTE() &newLine *`.' &msgWall &plural &msgBtle &beers
GOTONONNULPOURLESNULS %1 &beers

GOTO Last verses of the song
GOTOPRINTDUTEXTE()  &msgWall &plural &msgBtle &msgNoN
GOTOPRINTDUTEXTE() &msgBeer &plural &msgBtle &msgNon *` ' *`,'
GOTOPRINTDUTEXTE() &msgEnd
GOTOPRINTDUTEXTE() &newLine *`.' &msgWall &plural &msgBtle �99�```