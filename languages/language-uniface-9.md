
## Language Uniface 9.3 ##
---
- Author: Theo Neeskens
- Date: 01/03/10
- Info: http
- Score:  (3.00 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-uniface-9.3-2287.html
---

```; 99 bottles of beer, using Uniface 9.3
; Uniface is a 4GL development environment from Compuware
;
; Technical Info: 
; Only the <EXEC>-Trigger is used.
; One Non-Database/Non-model entity "DUMMY" 
; with one outputbox (!) "LYRICS"

variables
  numeric vBottles
endvariables

vBottles = 99
repeat
  selectcase(vBottles) 
    case 0
      LYRICS.DUMMY = "No more bottles can be found."
    case 1 
      LYRICS.DUMMY = "One bottle of beer on the wall. Take it down, pass it around.%%^"
    elsecase
      LYRICS.DUMMY = "%%vBottles%%% bottles of beer on the wall. Take one down, pass it around.%%^"
  endselectcase
  show
  vBottles -= 1
until (vBottles < 0)
display```