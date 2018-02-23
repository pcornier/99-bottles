
## Language LiLi ##
---
- Author: Martin Beckmann
- Date: 05/22/05
- Info: http
- Score:  (2.88 in 17 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lili-685.html
---

```;written in LiLi ( see http://sourceforge.net/projects/littlisp )
;LiLi is a small and unconventional lisp-dialect...

(defun bottleno (n)
  (cond ((eq n 1) { bottle})
	(t { bottles})))

(defun take-beer-down (bottles)
  (cond ((eq bottles 0) (print {Go buy new beer!!!}))
	(t (sequentially
	    (print (conc (str bottles) (conc (bottleno bottles) { of beer on the
wall.})))
	    (print {Take one down and pass it around,})
	    (take-beer-down (- bottles 1))
	   ))))  

(take-beer-down 99)```