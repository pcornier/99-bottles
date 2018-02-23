
## Language Irken ##
---
- Author: Sam Rushing
- Date: 01/27/12
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-irken-2823.html
---

```
;; -*- Mode: Irken -*-

;; https://github.com/samrushing/irken-compiler

(include "lib/core.scm")
(include "lib/pair.scm")
(include "lib/string.scm")

(define B
  0 -> "no more bottles"
  1 -> "1 bottle"
  x -> (format (int x) " bottles")
  )

(for-range
    i 99
    (let ((n (- 99 i)))
      (print-string
       (format (B n) " of beer on the wall, " (B n) " of beer.\n"
	       "Take one down and pass it around, "
	       (B (- n 1)) " of beer on the wall.\n\n"))))

(print-string "No more bottles of beer on the wall, no more bottles of beer.\n")
(print-string "Go to the store and buy some more, 99 bottles of beer on the wall.\n")```