
## Language Action! ##
---
- Author: Michal Kaczmarczyk
- Date: 11/22/07
- Info: http
- Score:  (3.00 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-action!-1635.html
---

```; 99 bottles of beer
; Action! version
; by Michal Kaczmarczyk
; (this is an Atari 8-bit
; programming language)

PROC Main()
  CARD i
  i=99
  WHILE i>0 DO
    PrintC(i)
    Print(" bottle")
    IF i<>1 THEN
      Print("s")
    FI
    PrintE(" of beer on the wall,")
    PrintC(i)
    Print(" bottle")
    IF i<>1 THEN
      Print("s")
    FI
    PrintE(" of beer,")
    PrintE("Take one down, pass it around,")
    i==-1
    IF i=0 THEN
      Print("No")
    ELSE
      PrintC(i)
    FI
    Print(" bottle")
    IF i<>1 THEN
      Print("s")
    FI
    PrintE(" of beer on the wall.")
    PrintE()
  OD
RETURN```