
## Language Scheme ##
---
- Author: Evan Farrer
- Date: 08/11/05
- Info: http
- Score:  (2.95 in 21 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-scheme-832.html
---

```;; 99 bottles implemented using a hygenic macro in Scheme (R5RS)
;; Evan Farrer Evan.Farrer@gmail.com
;; 
;; At compile time the (beer 99) expression expands into a call to display with a string of the song
lyrics passed as the argument
;; (beer 99) -> (display "99 Bottles of beer on the wall, 99...")

(define-syntax beer
  (lambda (stx)
    (let* ((plural (lambda (count)
                     (case count
                       ((1) (format "~a ~a" count "bottle"))
                       ((0) "no more bottles")
                       (else (format "~a ~a" count "bottles")))))
           (gen-line (lambda (pre count)
                       (let ((pre (syntax-object->datum pre))
                             (count (syntax-object->datum count)))
                         (string-append
                          pre
                          (if (= 99 count)
                              ""
                              (format "~a~a~a\n" "Take one down and pass it around, " (plural count)
" of beer on the wall."))
                          
                          (format "\n~a~a~a~a\n" (string-titlecase (plural count)) " of beer on the
wall, " (plural count) " of beer.")
                          
                          (if (= 0 count)
                              "Go to the store and buy some more, 99 bottles of beer on the
wall.\n"
                              ""))))))
      (syntax-case stx ()
        ((_ pre count)
         (let ((last (= 0 (syntax-object->datum #'count))))
           (with-syntax ((new-pre (gen-line #'pre #'count))
                         (new-count (sub1 (syntax-object->datum #'count))))
             (if last
                 #'new-pre
                 #'(beer new-pre new-count)))))
        ((_ count)
         #'(display (beer "" count)))))))

(beer 99)```