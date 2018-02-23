
## Language Pilot ##
---
- Author: Akira Kida
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pilot-546.html
---

```R: PILOT version of 99 Bottles of Beer
 : hacked by Akira KIDA, <SDI00379@niftyserve.or.jp>

C:BOTTLES=99

U:*BEERS
*LOOP
T:$T of beer on the wall, $T.
T:Take one down, pass it around.
C:BOTTLES=BOTTLES-1
U:*BEERS
T:$T on the wall.
T:
J(BOTTLES>0):*LOOP
E:

*BEERS
C(BOTTLES=0):$T=No more bottles
C(BOTTLES=1):$T=1 bottle
C(BOTTLES>1):$T=#BOTTLES bottles
E:```