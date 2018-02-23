
## Language scheme ##
---
- Author: Ricardo Malafaia
- Date: 08/29/05
- Info: http
- Score:  (2.96 in 25 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scheme-852.html
---

```;; rmalafaia@gmail.com, 2005-08-29
;; slightly shorter and more efficient
;; some more language features shown as well

(let ((str+ string-append)
      (n->s number->string))
  (define (bottles n)
    (str+ (case n
	    ((0) "No more bottles")
	    ((1) "One bottle")
	    (else (str+ (n->s n)
			" bottles")))
	  " of beer"))
  (define (beer n)
    (if (> n 0)
	(let ((bn (bottles n))
	      (msg (lambda (b cmp)
		     (display (str+ b cmp))
		     (newline))))
	  (msg bn " on the wall")
	  (msg bn "")
	  (msg "Take one down, pass it around" "")
	  (msg (bottles (- n 1)) " on the wall")
	  (newline)
	  (beer (- n 1)))))
  (beer 99))```