
## Language Focal-8 ##
---
- Author: Akira Kida
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 122 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-focal-8-260.html
---

```01.10 c Focal-8 version of 99 Bottles of beer
01.20 c Hacked by Akira KIDA, <SDI00379@niftyserve.or.jp>

10.10 set bottles = 99
10.20 do 20
10.30 quit

20.10 for i = bottles, 1, -1; do 30
20.20 return

30.10 set b = i
30.20 do 40 ; type " on the wall, "
30.30 do 40 ; type ".", ! , "Take one down, pass it around.", !
30.40 set b = i - 1
30.50 do 40 ; type " on the wall.", !, !
30.60 return

40.10 do 50
40.20 type " of beer"
40.30 return

50.10 if (b - 1) 50.20, 50.40, 50.60
50.20 type "No more bottles"
50.30 return
50.40 type %1.0, b, " bottle"
50.50 return
50.60 type %1.0, b, " bottles"
50.70 return```