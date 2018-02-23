
## Language Irken ##
---
- Author: Mike Gogulski
- Date: 03/03/11
- Info: http
- Score:  (3.00 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-irken-2609.html
---

```;; -*- Mode: Irken -*-
;;
;; By Mike Gogulski <mike@gogulski.com> 3 March 2011
;;
;; Irken is a simplified, statically-typed dialect of Scheme. It uses an
;; ML-like type system supporting parametetric polymorphism (i.e., "let
;; polymorphism") and algebraic datatypes. With type inference and a
;; pattern-matching syntax, it could be considered ML with a lisp/scheme
;; syntax.
;;
;; Language author: Sam Rushing
;; Language home page: http://www.nightmare.com/rushing/irken/irken/lang.html
;;
;; Tested under Linux 2.6.35-24-generic-pae #42-Ubuntu SMP i686 GNU/Linux
;;
;; Derived from http://99-bottles-of-beer.net/language-scheme-2524.html

(include "lib/core.scm")
(include "lib/pair.scm")
(include "lib/string.scm")

((lambda (f count) (f f count))
 (lambda (f count) 
   (cond ((= count 0) 
          (print-string (string-append "No more bottles of beer on the wall, " 
                                "no more bottles of beer. "))
          (newline)
          (print-string (string-append "Go to the store and buy some more, "
                                "99 bottles of beer on the wall."))
          (newline))
         (else (print-string (string-append (int->string count)
                                     (if (> count 1) " bottles "
                                         " bottle ")
                                     "of beer on the wall, "
                                     (int->string count)
                                     (if (> count 1) " bottles "
                                         " bottle ") 
                                     "of beer."))
               (newline)
               (print-string (string-append "Take one down, pass it around, "
                                     (if (= count 1) "no more"
                                         (int->string (- count 1)))
                                     (if (= count 2) " bottle "
                                         " bottles ")
                                     "of beer on the wall"))
               (newline) (newline)
               (f f (- count 1))))) 
 99)```