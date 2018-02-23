
## Language ObjectPAL ##
---
- Author: James R. (Jake) Mireles
- Date: 08/18/06
- Info: http
- Score:  (2.96 in 112 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-objectpal-1240.html
---

```method run(var eventInfo Event)

; ObjectPAL version of "99 Bottles Of Beer On The Wall"

; By James R. (Jake) Mireles
; Houston, TX
; 8/17/2006

; Save this as a Paradox script (*.ssl file).
; It will run under any version of Paradox for Windows.

var
	i SmallInt
endVar

for i from 99 to 1 step -1

	; Use immediate-if branching to properly format plurals.
   msgInfo("99 Bottles Of Beer On The Wall",
   	string(i) + " bottle" + iif(i = 1, "", "s") + " of beer on the wall.\n" +
   	string(i) + " bottle" + iif(i = 1, "", "s") + " of beer.\n" +
      "You take one down, pass it around.\n" +
   	iif(i-1 = 0, "No", string(i-1)) + " bottle" + iif(i-1 = 1, "", "s") + " of beer on the wall."
      )

endFor

; Now for the big, rousing finish.
msgInfo("99 Bottles Of Beer On The Wall",
	"NO bottles of beer on the wall.\n\n" +
	"NO bottles of beer!\n\n" +
   "You go to the store and BUY SOME MORE.\n\n" +
   "Nine-ty-nine bot-tles of beer-on-the-wall!"
   )

endMethod```