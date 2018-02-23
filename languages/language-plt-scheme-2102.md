
## Language PLT Scheme ##
---
- Author: Thure D�hrsen
- Date: 05/27/09
- Info: http
- Score:  (3.02 in 44 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-plt-scheme-2102.html
---

```(define (bottles n)
  (display
   (string-append 
    (cond ((= n 0) "No more bottles")
          ((= n 1) "One bottle")
          (else (string-append (number->string n) " bottles"))) " of beer")))

(define (beer n)
  (if (> n 0)
      (begin
        (bottles n) (display " on the wall") (newline)
        (bottles n) (newline)
        (display "Take one down, pass it around") (newline)
        (bottles (- n 1)) (display " on the wall") (newline)
        (newline)
        (beer (- n 1))
        )      
      null
      )
  )

(beer 99)```