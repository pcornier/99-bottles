
## Language HOP ##
---
- Author: jeeve
- Date: 04/03/10
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hop-2355.html
---

```(define (bottles n)
  (cond ((= n 0) "No more bottles of beer")
        ((= n 1) "One bottle of beer")
        (else (string-append (integer->string n) " bottles of beer"))))

(define (beer n)
  (if (>= n 0)
      (append
       (list 
        (<TR>
         (<TD> (bottles n) " on the wall, " (bottles n) ".")) 
        (if (> n 0)
            (<TR>
             (<TD> "Take one down, pass it around, " 
                   (bottles (- n 1)) 
                   " on the wall."))
            (<TR>
             (<TD> "Go to the store and buy some more, " 
                   (integer->string beers-number) 
                   " bootles of beer on the wall.")))           
        (<TR> 
         (<TD> (<P>))))
       (beer (- n 1)))
      '()))   

(define beers-number 99)

(define-service (beers)
  (<HTML>
   (<BODY>
    (<TABLE>
     (beer beers-number)))))```