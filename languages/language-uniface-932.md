
## Language Uniface ##
---
- Author: Thomas Bieligk
- Date: 11/07/05
- Info: http
- Score:  (2.65 in 17 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-uniface-932.html
---

```; 99 bottles of beer, using Uniface 7
; Uniface is a 4GL development environment from Compuware
;
; Technical Info: 
; Only the <EXEC>-Trigger is shown.
; One Non-Database/Non-modell entity "roundofbeer" 
; with one editbox "msg" (Interface C80 / Syntax NED,NPR) painted.
; 
variables
  numeric numberOfBottles
endvariables

numberOfBottles = 99
repeat
  call take_bottle(numberOfBottles)
  numberOfBottles = numberOfBottles - 1
until (numberOfBottles < 0)

setocc "roundofbeer", 1		; Go to top.
display				; Display result on screen.

; ---------------------------------------------------------------------
entry take_bottle
params
  numeric bottles: IN
endparams
variables
  string line
endvariables

  selectcase (bottles) 
    case 0
      line = "No more bottles can be found."
    case 1 
      line = "One bottle of beer on the wall. Take it down, pass it around."
    elsecase
      line = "%%bottles%%% bottles of beer on the wall. Take one down, pass it around."
  endselectcase
  
  if (! $empty(roundofbeer)) creocc "roundofbeer", -1 	; Create new line
  msg.roundofbeer = line

end;  take_bottle```