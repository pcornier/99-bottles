
## Language CLIPS ##
---
- Author: Bill Ensinger
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clips-130.html
---

```;Written by Bill Ensinger (Bill222E@aol.com) on Saturday February 24, 1996
;8:00 - 9:41 pm Eastern Standard time at Taylor University.
;All praise to God; note that we just pass the beer, but don't drink!

(deftemplate beer
  (field ninetynine))

(deffacts bottles
  (beer (ninetynine 99)))


(defrule Bottlesninetynine ""
  (beer (ninetynine ?bottlenum))
  ?fl <- (beer (ninetynine ?bottlenum))
  (test (> ?bottlenum 2))
  =>
  (printout t ?bottlenum " bottles of beer on the wall," t)
  (printout t ?bottlenum " bottles of beer." t)
  (printout t "Take one down, pass it around," t)
  (printout t (- ?bottlenum 1) " bottles of beer on the wall." t)
  (printout t " " t)
  (modify ?fl (ninetynine =(- ?bottlenum 1)))
)
(defrule Bottlestwo ""
  (beer (ninetynine 2))
  ?fl <- (beer (ninetynine ?bottlenum))
  =>
  (printout t ?bottlenum " bottles of beer on the wall," t)
  (printout t ?bottlenum " bottles of beer." t)
  (printout t "Take one down, pass it around," t)
  (printout t (- ?bottlenum 1) " bottle of beer on the wall." t)
  (printout t " " t)
  (modify ?fl (ninetynine =(- ?bottlenum 1)))
)

(defrule Bottlesone ""
  (beer (ninetynine 1))
  ?fl <- (beer (ninetynine ?bottlenum))
  =>
  (printout t ?bottlenum " bottle of beer on the wall," t)
  (printout t ?bottlenum " bottle of beer." t)
  (printout t "Take one down, pass it around," t)
  (printout t "No more bottles of beer on the wall!" t)
)```