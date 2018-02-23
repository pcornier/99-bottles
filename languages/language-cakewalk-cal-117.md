
## Language Cakewalk CAL ##
---
- Author: Tom Murphy
- Date: 04/20/05
- Info: n/a
- Score:  (2.92 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cakewalk-cal-117.html
---

```Cakewalk Application Language (v3). Cakewalk is a MIDI sequencing 
program which can manipulate midi data using CAL programs.  This 
program is multi-file and file name breaks are in italics.

<i>-- BEER.CAL --</i>
;  BEER.CAL by Tom Murphy 7 <poop@cmu.edu> for Cakewalk CAL 
; (version 3)
; It will even play the song along if you have a MIDI device 
; hooked up, otherwise it is REALLY boring.
;  <9.9.97>

(do
	(int beer 99)
	(while (!= beer 0) (do
	(if (!= beer 1)
       (message beer "bottles of beer on the wall")
       (message "1 more bottle of beer on the wall...")
	)
	(include "part1.cal")
	(if (!= beer 1)
       (message beer "bottles of beer")
       (message "1 more bottle of beer...")
	)
		 (delay 600)
      (include "part2.cal")
   (message "Take one down, pass it around")
   (delay 600) (include "part3.cal")
		(-- beer)
	(delay 600)
	(if (!= beer 1)
       (message beer "bottles of beer on the wall")
       (message "1 more bottle of beer on the wall...")
	)
    (include "part4.cal") (delay 600)
		))
   (pause "We're out of beer, dude.")
)


<i>-- PART1.CAL --</i>
; PART1.CAL
; replace this (and the other PART?.CAL files) with:
; (do
;    NIL
; )
; if you want it to not make sounds.

(do
  (sendMIDI -1 1 NOTE 48 64)
      (sendMIDI -1 1 NOTE 60 64) (delay 300) (sendMIDI -1 1 NOTE 60 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 60 64) (delay 300) (sendMIDI -1 1 NOTE 60 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 60 64) (delay 300) (sendMIDI -1 1 NOTE 60 0)
   (sendMIDI -1 1 NOTE 48 0) (delay 100) (sendMIDI -1 1 NOTE 43 64)
      (sendMIDI -1 1 NOTE 55 64) (delay 300) (sendMIDI -1 1 NOTE 55 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 55 64) (delay 300) (sendMIDI -1 1 NOTE 55 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 55 64) (delay 300) (sendMIDI -1 1 NOTE 55 0)
  (sendMIDI -1 1 NOTE 43 0) (delay 100) (sendMIDI -1 1 NOTE 48 64)
      (sendMIDI -1 1 NOTE 60 64) (delay 300) (sendMIDI -1 1 NOTE 60 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 60 64) (delay 300) (sendMIDI -1 1 NOTE 60 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 60 64) (delay 300) (sendMIDI -1 1 NOTE 60 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 60 64) (delay 600) (sendMIDI -1 1 NOTE 60 0)
   (sendMIDI -1 1 NOTE 48 0)
)

<i>-- PART2.CAL --</i>
(do
  (sendMIDI -1 1 NOTE 50 64)
      (sendMIDI -1 1 NOTE 62 64) (delay 300) (sendMIDI -1 1 NOTE 62 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 62 64) (delay 300) (sendMIDI -1 1 NOTE 62 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 62 64) (delay 300) (sendMIDI -1 1 NOTE 62 0)
   (sendMIDI -1 1 NOTE 50 0) (delay 100) (sendMIDI -1 1 NOTE 45 64)
      (sendMIDI -1 1 NOTE 57 64) (delay 300) (sendMIDI -1 1 NOTE 57 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 57 64) (delay 300) (sendMIDI -1 1 NOTE 57 0)
    (delay 100)
      (sendMIDI -1 1 NOTE 57 64) (delay 300) (sendMIDI -1 1 NOTE 57 0)
  (sendMIDI -1 1 NOTE 45 0) (delay 100) (sendMIDI -1 1 NOTE 50 64)
      (sendMIDI -1 1 NOTE 62 64) (delay 1200) (sendMIDI -1 1 NOTE 62 0)
   (sendMIDI -1 1 NOTE 50 0)
)

<i>-- PART3.CAL --</i>
(do
   (sendMIDI -1 1 NOTE 43 64)
   (sendMIDI -1 1 NOTE 59 64) (delay 400) (sendMIDI -1 1 NOTE 59 0)
   (delay 300) (sendMIDI -1 1 NOTE 59 64) (delay 300)
   (sendMIDI -1 1 NOTE 59 0) (delay 100) (sendMIDI -1 1 NOTE 59 64)
   (delay 600) (sendMIDI -1 1 NOTE 59 0) (delay 400)
   (sendMIDI -1 1 NOTE 59 64) (delay 250) (sendMIDI -1 1 NOTE 59 0)
   (delay 100) (sendMIDI -1 1 NOTE 59 64) (delay 250)
   (sendMIDI -1 1 NOTE 59 0) (delay 100) (sendMIDI -1 1 NOTE 59 64)
   (delay 250) (sendMIDI -1 1 NOTE 59 0) (delay 100)
   (sendMIDI -1 1 NOTE 59 64) (delay 500) (sendMIDI -1 1 NOTE 59 0)
   (sendMIDI -1 1 NOTE 43 0)
)

<i>-- PART4.CAL --</i>
<PRE>
(do
   (sendMIDI -1 1 NOTE 43 64)
   (sendMIDI -1 1 NOTE 55 64) (delay 400) (sendMIDI -1 1 NOTE 55 0)
   (delay 300) (sendMIDI -1 1 NOTE 55 64) (delay 300)
   (sendMIDI -1 1 NOTE 55 0) (delay 100) (sendMIDI -1 1 NOTE 57 64)
   (delay 600) (sendMIDI -1 1 NOTE 57 0) (delay 100)
   (sendMIDI -1 1 NOTE 59 64) (delay 250) (sendMIDI -1 1 NOTE 59 0)
   (sendMIDI -1 1 NOTE 43 0) (delay 100) (sendMIDI -1 1 NOTE 36 64)
   (sendMIDI -1 1 NOTE 60 64) (delay 250) (sendMIDI -1 1 NOTE 60 0)
   (delay 100) (sendMIDI -1 1 NOTE 60 64) (delay 250)
   (sendMIDI -1 1 NOTE 60 0) (delay 100) (sendMIDI -1 1 NOTE 60 64)
   (delay 250) (sendMIDI -1 1 NOTE 60 0) (delay 100)
   (sendMIDI -1 1 NOTE 60 64) (delay 500) (sendMIDI -1 1 NOTE 60 0)
   (sendMIDI -1 1 NOTE 36 0)
)```