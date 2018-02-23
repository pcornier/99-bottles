
## Language ISM/SML ##
---
- Author: Alain Brunet
- Date: 04/20/05
- Info: n/a
- Score:  (2.83 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ism-sml-339.html
---

```SML is the language used in ISM/Openmaster, the BULL 
Administrative Platform. ISM/SML (for Integrated System Management 
/ System Management Language).

; Code Begin
; A.Brunet@frcl.bull.fr (Alain Brunet)

(defun beer(cap)
  (dotimes (i cap)
    (print (- cap i) " bottle" (if (= i (- cap 1)) "" "s") " of beer on the wall.")
    (print "Take one down, pass it around.\n")
  )
  (print "Time to buy more beer !")
)

(beer 99)```