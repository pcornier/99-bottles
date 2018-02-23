
## Language Scheme ##
---
- Author: Tim Goodwin
- Date: 04/20/05
- Info: n/a
- Score:  (4.08 in 609 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scheme-582.html
---

```;;; Tim Goodwin (tim@pipex.net)

(define bottles
  (lambda (n)
    (cond ((= n 0) (display "No more bottles"))
          ((= n 1) (display "One bottle"))
          (else (display n) (display " bottles")))
    (display " of beer")))

(define beer
  (lambda (n)
    (if (> n 0)
        (begin
          (bottles n) (display " on the wall") (newline)
          (bottles n) (newline)
          (display "Take one down, pass it around") (newline)
          (bottles (- n 1)) (display " on the wall") (newline)
          (newline)
          (beer (- n 1))))))

(beer 99)```