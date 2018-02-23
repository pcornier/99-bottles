
## Language Scheme ##
---
- Author: lambda the ultimate
- Date: 10/14/10
- Info: n/a
- Score:  (2.96 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scheme-2524.html
---

```((lambda (f count) (f f count))
 (lambda (f count) 
   (cond ((= count 0) 
          (write (string-append "No more bottles of beer on the wall, " 
                                "no more bottles of beer. "))
          (newline)
          (write (string-append "Go to the store and buy some more, "
                                "99 bottles of beer on the wall."))
          (newline))
         (else (write (string-append (number->string count)
                                     (if (> count 1) " bottles "
                                         " bottle ")
                                     "of beer on the wall, "
                                     (number->string count)
                                     (if (> count 1) " bottles "
                                         " bottle ") 
                                     "of beer."))
               (newline)
               (write (string-append "Take one down and pass it around, "
                                     (if (= count 1) "no more"
                                         (number->string (- count 1)))
                                     (if (= count 2) " bottle "
                                         " bottles ")
                                     "of beer on the wall"))
               (newline) (newline)
               (f f (- count 1))))) 
 99)```