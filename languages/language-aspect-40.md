
## Language Aspect ##
---
- Author: Michael LaGrasta
- Date: 04/20/05
- Info: n/a
- Score:  (2.79 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-aspect-40.html
---

```; ASPECT version of 99 Bottles of beer
; (aspect is the scripting language of PROCOMM PLUS)
; This program requires Procomm Plus version 2.0
; programmer: Michael LaGrasta lagrasta@zimage.com
proc main
integer bottles
string szVerse_a
string szVerse_b
string szChorus
string szTemp_a
string szTemp_b
bottles = 99
szVerse_a = " bottles of beer"
szVerse_b = " on the wall"
szChorus = "Take one down and pass it around"
numtostr bottles szTemp_a
numtostr bottles szTemp_b
strcat szTemp_a szVerse_a
strcat szTemp_a szVerse_b
termwrites szTemp_a
termwritec 0x0d
termwritec 11
strcat szTemp_b szVerse_a
termwrites szTemp_b
termwritec 0x0d
termwritec 11
termwrites szChorus
termwritec 0x0d
termwritec 11
szTemp_a = ""
bottles = bottles - 1
numtostr bottles szTemp_a
strcat szTemp_a szVerse_a
strcat szTemp_a szVerse_b
termwrites szTemp_a
termwritec 0x0d
termwritec 11
termwritec 0x0d
termwritec 11
szTemp_a = ""
szTemp_b = ""
while bottles > 2
  numtostr bottles szTemp_a
  numtostr bottles szTemp_b
  strcat szTemp_a szVerse_a
  strcat szTemp_a szVerse_b
  termwrites szTemp_a
  termwritec 0x0d
  termwritec 11
  strcat szTemp_b szVerse_a
  termwrites szTemp_b
  termwritec 0x0d
  termwritec 11
  termwrites szChorus
  termwritec 0x0d
  termwritec 11
  szTemp_a = ""
  bottles = bottles - 1
  numtostr bottles szTemp_a
  strcat szTemp_a szVerse_a
  strcat szTemp_a szVerse_b
  termwrites szTemp_a
  termwritec 0x0d
  termwritec 11
  termwritec 0x0d
  termwritec 11
  szTemp_a = ""
  szTemp_b = ""
endwhile
termwrites "1 bottle of beer on the wall ?!?!"
termwritec 0x0d
termwritec 11
termwrites "Uh oh! LAST BOTTLE!"
termwritec 0x0d
termwritec 11
termwrites "I ain't passin' this one around!"
termwritec 0x0d
termwritec 11
termwrites "AAAAAAAAAAAAA!!! No more beer!!!"
termwritec 0x0d
termwritec 11
endproc```