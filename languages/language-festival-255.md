
## Language Festival ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 94 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-festival-255.html
---

```; 99 Bottles of beer said by the festival speech synthesis program

(define bottles
  (lambda (n)
      (cond ((eq n 0) (SayText "No more bottles"))
            ((eq n 1) (SayText "One bottle"))
            ((> n 1) (SayText n) (SayText " bottles")))
      (SayText " of beer")))

(define beer
  (lambda (n)
    (if (> n 0)
        (begin
          (bottles n) (SayText " on the wall")
          (bottles n)
          (SayText "Take one down, pass it around ")
          (bottles (- n 1)) (SayText " on the wall")
          (beer (- n 1))))))

(beer 99)```