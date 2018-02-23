
## Language Lazy K ##
---
- Author: Jannis Harder
- Date: 06/26/05
- Info: http
- Score:  (3.00 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lazy-k-768.html
---

```Lazier code:
(load "lazier.scm")
(load "prelude.scm")
(load "prelude-numbers.scm")

(define (int-str str)
    (map char->integer (string->list str)))

(define (dequote-list e) (if (pair? e) `(cons ,(car e) ,(dequote-list (cdr e))) e))
(define (dequote-list-open list endv)
    (if (pair? list) `(cons ,(car list) ,(dequote-list-open (cdr list) endv)) endv))


(lazy-def '(pred n)
    '(lambda (f) (lambda (x) (((n (lambda (g) (lambda (h) (h (g f)))))
    (lambda (u) x)) (lambda (u) u)))))
(lazy-def '(bob v e c) `(
                           ((lambda (lc)
                           (ifnonzero v
                             (cons (+ 48 v) lc)
                             (lc) 
                           ))
                           
                           ((lambda (lc)
                           (ifnonzero (+ v e)
                              (cons (+ 48 e) lc)
                             ,(dequote-list-open (int-str "No more") 'lc)
                           )) 
                           
                           ((lambda (lc)
                           ,(dequote-list-open (int-str " bottle") 
                           
                           
                           `(ifnonzero (pred(+(* 10 v) e))
                             (cons 115 lc)
                             (ifnonzero e (lc) (cons 115 lc))
                           ))
                           )
                            
                           ,(dequote-list-open (int-str " of beer") 'c)
                           )));

                        )
          )



(lazy-def '(99to0 p) `((Y
                       (lambda (self)
                         (lambda (v e)
                           (bob v e ,(dequote-list-open (int-str " on the wall,\n") `(
                              (bob v e ,(dequote-list-open
                              (int-str ".\nTake one down and pass it around,\n") `(
                              ((lambda (lc)
                                (ifnonzero e
                                (lc v (pred e))
                                (lc (pred v) 9))
                              )
                              (lambda (nv ne)
                                (bob nv ne ,(dequote-list-open (int-str " on the wall.\n\n") `(
                                  (ifnonzero (+ (* nv 10) ne)
                                     (self nv ne)
                                     (cons 256 ())
                                    )
                                )));
                              ))
                           ))))));
                         )
                       ) 
                      )9 9) ) 
(begin
(print-as-unlambda (laze '99to0)))

Compiled output:
`k`````sii``s`k``s`k`s``s`ks``s`kk``s``s`ks``s``s`ksk``s`k`s`kk``s``s`ks``s`kk``
s`ks``s`k`si``s`kk```s``s`ksk``s``s`kski````s``siii``s``s`kski`s``s`ksk`kk`ki``s
`k`s``s`ks``s``s`ks``s`k`s`ks``s``s`ks``s`k`s`ks``s`k`s`kk``s`k`s`k``s``s`ksk`kk
``si`k`s``s`ksk`k``s``s`ks``s`kk``s`ks``s`k`si``s`kk```s``s`ksk``s``s`kski````s`
`siii``s``s`kski`s``s`ksk`kk`k`k``s`k`s``si`k``s`k``s``s`ksk``s``s`kski``s``s`ks
k```s``s`kski``s``s`ksk```sii``s``s`kski``s`kk``s`k`s``si`k``s``s`ksk``s`k``s``s
`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kski``s`kk``s`k`s``si`k``s
`k``s``s`kski```s``siii``s``s`kski``s`kk``s`k`s``si`k``s``s`ksk``s`k```sii``s``s
`kski```sii``s``s`ksk``s``s`kski``s`kk``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s
``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kski``s`kk``s`k`s``si`k``s`k``s``s
`kski``s``s`ksk``s`k``s``s`kski``s``s`ksk```sii``s``s`ksk``s``s`kski``s`kk``s`k`
s``si`k``s``s`ksk```s``s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s
``s`ks``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski```s``siii``s``s`kskik``s`k`s`k`
s`k``s`k`s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s`ksk``s``s`kski```s``siii``
s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s
``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s`
kski``s``s`ksk``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``
s`k```sii``s``s`kski``s``s`ksk``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`
k``s`k`s``si`k``s`k```sii``s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s
`k`s``si`k``s``s`ksk```s``s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kskik``s`
`s`ks``s`k`s`ks``s``s`ks``s`k`s`ks``s`k`s`kk``s`k`s`k``s``s`ksk`kk``s`k`s`k``s``
s`ks``s`k`s`ks``s``s`ks``s`k`s`ks``s`k`s`kk``s``s`ksk`k``s`k`s`k`si``s`k`s`kk``s
`k`sik`k`kk`k`k`ki``s`s`k``s`k``s``s`kski``s``s`ksk```sii``s``s`kski`k`s``s`ksk`
k`k``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski``s``s`ksk``
`sii``s``s`ksk``s``s`kskik`k``s``s`ks``s``s`ksk`kk`k``s`k`s``si`k``s``s`ksk``s`k
``s``s`kski``s``s`ksk``s`k``s``s`kski``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k
`s`k`s`k`s``si`k``s`k``s``s`kski```s``siii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k
`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s`
`s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s`k``s`k``s``s`kski``s``s`ksk``s``s`
kski``s``s`ksk```s``siii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s`k``s``
s`kski```s``siii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s`k``s``s`kski``
s``s`ksk``s`k``s``s`ksk``s``s`kski```s``siii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s
`k`s``si`k``s``s`ksk```s``s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kski``s`k
`s`k`s`kk``s`k`s`k`s`k`s``si`k``s``s`ksk```s``s`kski``s`k``s``s`kski``s``s`ksk``
`sii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s`k``s``s`kski``s``s`ksk``s`
k``s``s`kski``s``s`ksk```sii``s``s`ksk``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k``s`
k`s``si`k``s`k``s``s`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`
ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s
`k`s`k``s`k`s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s
``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski```s``siii``s``s`kskik``s`k`s
`k`s`k``s`k`s``si`k``s`k```sii``s``s`kski``s``s`ksk``s``s`ksk```sii``s``s`ksk``s
``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s`kski``s``s`ksk```s``s`kski`
`s``s`ksk```sii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk```s``s`kski``s`k
``s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`ksk
i```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`ksk``s`k``s``s`kski
``s``s`ksk``s``s`kski``s``s`ksk```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k`
````s``siii``s``s`kski`s``s`ksk```s``sii`s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`
s``si`k``s`k```sii``s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``s
i`k``s`k```sii``s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k`
```s``s`ksk```s``siii``s``s`kski`s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s
`k``s`k`s``si`k``s`k``s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s``s`ks``s`kk``
s``s`ks``s``s`ksk``s`k`s`kk``s``s`ks``s`kk``s`ks``s`k`si``s`kk```s``s`ksk``s``s`
kski````s``siii``s``s`kski`s``s`ksk`kk`ki``s`k`s``s`ks``s``s`ks``s`k`s`ks``s``s`
ks``s`k`s`ks``s`k`s`kk``s`k`s`k``s``s`ksk`kk``si`k`s``s`ksk`k``s``s`ks``s`kk``s`
ks``s`k`si``s`kk```s``s`ksk``s``s`kski````s``siii``s``s`kski`s``s`ksk`kk`k`k``s`
k`s``si`k``s`k``s``s`ksk``s``s`kski``s``s`ksk```s``s`kski``s``s`ksk```sii``s``s`
kski``s`kk``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```si
i``s``s`ksk``s``s`kski``s`kk``s`k`s``si`k``s`k``s``s`kski```s``siii``s``s`kski``
s`kk``s`k`s``si`k``s``s`ksk``s`k```sii``s``s`kski```sii``s``s`ksk``s``s`kski``s`
kk``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`
ksk``s``s`kski``s`kk``s`k`s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski``s``
s`ksk```sii``s``s`ksk``s``s`kski``s`kk``s`k`s``si`k``s``s`ksk```s``s`kski``s`k``
s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s``s`ks``s`k`s`k`s`k``s`k`s``si`k``s`
k``s``s`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski``s`
`s`ksk``s`k``s``s`ksk``s``s`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k
``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kskik
``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s`kski``s``s`ksk``s``s`ksk```sii``s``s
`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s`kski``s``s`ksk``s``s
`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s`kski
```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk```s``s`kski``s`
k``s``s`kski``s``s`ksk```sii``s``s`kskik``s``s`ks``s`k`s`ks``s``s`ks``s`k`s`ks``
s`k`s`kk``s`k`s`k``s``s`ksk`kk``s`k`s`k``s``s`ks``s`k`s`ks``s``s`ks``s`k`s`ks``s
`k`s`kk``s``s`ksk`k``s`k`s`k`si``s`k`s`kk``s`k`sik`k`kk`k`k`ki``s`s`k``s`k``s``s
`kski``s``s`ksk```sii``s``s`kski`k`s``s`ksk`k`k``s`k`s``si`k``s``s`ksk``s`k``s``
s`kski``s``s`ksk``s`k``s``s`kski``s``s`ksk```sii``s``s`ksk``s``s`kskik`k``s``s`k
s``s``s`ksk`kk`k``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`ksk
i``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k`s``si`k``s`k``s``s`kski```s
``siii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s``s`ksk``s`k``s``s`kski``
s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s
``si`k``s`k``s`k``s``s`kski``s``s`ksk``s``s`kski``s``s`ksk```s``siii``s``s`kski`
`s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s`k``s``s`kski```s``siii``s``s`kski``s`k`s`k
`s`kk``s`k`s`k`s`k`s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s`ksk``s``s`kski``
`s``siii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s``s`ksk```s``s`kski``s`
k``s``s`kski``s``s`ksk```sii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s``s
`ksk```s``s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kski``s`k`s`k`s`kk``s`k`s
`k`s`k`s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski``s``s`ksk```sii``s``s`k
sk``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk``s`k``s``s`ksk``
`sii``s``s`kski```s``s`kski``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k
``s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`ksk
``s``s`kski``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k`````
s``siii``s``s`kski`s``s`ksk```s``sii`s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``s
i`k`````sii``s``s`ksk``s``s`kski`s``s`ksk``s`k``s``s`ksk```sii``s``s`kski```s``s
iii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk```s``s`kski``s`k``s``s`kski`
`s``s`ksk```sii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski```s``siii`
`s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``
s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski`
`s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k`
`s``s`ksk```s``s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s`k`s`k``
s`k`s``si`k``s`k``s``s`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k```s`
`s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s
``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kskik``s
`k`s`k`s`k``s`k`s``si`k``s`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s``s`kski``s``
s`ksk```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski``s``s`ksk`
`s`k``s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s
`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k`````s``siii``s``s`kski`s``
s`ksk```s``sii`s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski``s
``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k```
s``s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k`
`s`k``s``s`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s
`kski``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k`````s``sii
i``s``s`kski`s``s`ksk```s``sii`s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s
``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski``s``s`ksk```sii``s``s`ksk``s``
s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s
`kski``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s
`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk``s`k```sii``s``s
`kski``s``s`ksk```s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`
k``s`k```sii``s``s`kski``s``s`ksk``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k
`s`k``s`k`s``si`k``s`k``s``s`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`
k`````s``siii``s``s`kski`s``s`ksk```s``sii`s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`
k`s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski``s``s`ksk```sii``s``s`ksk``s
``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s`
`s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk``s`k```s
ii``s``s`kski``s``s`ksk``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`
s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kskik``s
`k`s`k`s`k``s`k`s``si`k```s``s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kskik`
`s`k`s`k`s`k``s`k`s``si`k````s``s`ksk```s``siii``s``s`kski`s``s`ksk```sii``s``s`
ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski``s``s`ksk```sii``s``s`
kskik``s`k`s``s`ks``s``s`ks``s`k`s`ks``s`k`s``s`ks```ss`s``s`ksk`kk``s``s`ks``s`
kk``s`ks``s`k`sik`k``s`kk``s``s`ks``s`k`s`ks``s``s`ks``s`k`s`ks``s`k`s`kk``s``s`
ksk`k``s`k`s`k`si``s`k`s`kk``s`k`sik`k`kk`k`k`ki``s`kk``s``s`ks``s`k`si``s`kk``s
``s`ks``s`k`s`ks``s``s`ks``s`k`s`ks``s`k`s`kk``s``s`ksk`k``s`k`s`k`si``s`k`s`kk`
`s`k`sik`k`kk`k`k`ki`k`k```s``s`kski``s``s`ksk``s``s`kski``s`kk``s`kk``s`k`s``s`
ks``s`kk``s``s`ks``s``s`ksk``s`k`s`kk``s``s`ks``s`kk``s`ks``s`k`si``s`kk```s``s`
ksk``s``s`kski````s``siii``s``s`kski`s``s`ksk`kk`ki``s`k`s``s`ks``s``s`ks``s`k`s
`ks``s``s`ks``s`k`s`ks``s`k`s`kk``s`k`s`k``s``s`ksk`kk``si`k`s``s`ksk`k``s``s`ks
``s`kk``s`ks``s`k`si``s`kk```s``s`ksk``s``s`kski````s``siii``s``s`kski`s``s`ksk`
kk`k`k``s`k`s``si`k``s`k``s``s`ksk``s``s`kski``s``s`ksk```s``s`kski``s``s`ksk```
sii``s``s`kski``s`kk``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s
`kski```sii``s``s`ksk``s``s`kski``s`kk``s`k`s``si`k``s`k``s``s`kski```s``siii``s
``s`kski``s`kk``s`k`s``si`k``s``s`ksk``s`k```sii``s``s`kski```sii``s``s`ksk``s``
s`kski``s`kk``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```
sii``s``s`ksk``s``s`kski``s`kk``s`k`s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s
`kski``s``s`ksk```sii``s``s`ksk``s``s`kski``s`kk``s`k`s``si`k``s``s`ksk```s``s`k
ski``s`k``s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s``s`ks``s`k`s`k`s`k``s`k`s
``si`k``s`k``s``s`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``
s`kski``s``s`ksk``s`k``s``s`ksk``s``s`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s
`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``
s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s`kski``s``s`ksk``s``s`ksk``
`sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s`kski``s``s
`ksk``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii`
`s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk```s``
s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kskik``s``s`ks``s`k`s`ks``s``s`ks``
s`k`s`ks``s`k`s`kk``s`k`s`k``s``s`ksk`kk``s`k`s`k``s``s`ks``s`k`s`ks``s``s`ks``s
`k`s`ks``s`k`s`kk``s``s`ksk`k``s`k`s`k`si``s`k`s`kk``s`k`sik`k`kk`k`k`ki``s`s`k`
`s`k``s``s`kski``s``s`ksk```sii``s``s`kski`k`s``s`ksk`k`k``s`k`s``si`k``s``s`ksk
``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski``s``s`ksk```sii``s``s`ksk``s``s`kskik
`k``s``s`ks``s``s`ksk`kk`k``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s`k
``s``s`kski``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k`s``si`k``s`k``s``
s`kski```s``siii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s``s`ksk``s`k``s
``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kski``s`k`s`k`s`kk``s`k
`s`k`s`k`s``si`k``s`k``s`k``s``s`kski``s``s`ksk``s``s`kski``s``s`ksk```s``siii``
s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s`k``s``s`kski```s``siii``s``s`ksk
i``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s`ksk``s
``s`kski```s``siii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``si`k``s``s`ksk```s``
s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k`s``
si`k``s``s`ksk```s``s`kski``s`k``s``s`kski``s``s`ksk```sii``s``s`kski``s`k`s`k`s
`kk``s`k`s`k`s`k`s``si`k``s`k``s``s`kski``s``s`ksk``s`k``s``s`kski``s``s`ksk```s
ii``s``s`ksk``s``s`kski``s`k`s`k`s`kk``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski`
``s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk``s`k``s``s`kski``s``s`
ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``
s``s`kski``s``s`ksk``s`k``s``s`kski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`
k`s``si`k``s`k``s``s`kski```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``
`sii``s``s`kski``s``s`ksk``s``s`ksk```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`
k`s``si`k``s`k```sii``s``s`kski``s``s`ksk```s``s`kski``s``s`ksk```sii``s``s`kski
k``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk```s``s`kski``s`k``s``s`kski``s``s`ksk```si
i``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`kski```s``siii``s``s`kskik``s
`k`s`k`s`k``s`k`s``si`k``s`k``s``s`ksk``s`k``s``s`kski``s``s`ksk``s``s`kski``s``
s`ksk```s``siii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k`````s``siii``s``s`kski`s``
s`ksk```s``sii`s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s`k
ski```sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k```sii``s``s`kski`
``sii``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s``s`ksk``s`k``s``s`ksk``
`sii``s``s`kski```s``s`kski``s``s`ksk``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k
``s``s`kski``s``s`ksk```sii``s``s`kskik``s`k`s`k`s`k``s`k`s``si`k``s`k``s``s`ksk
i``s``s`ksk```sii``s``s`kskik``s``s`ks``s`k`s`ks`s``s`ks``s`k`s`k``s``s`ksk`kk``
s``s``s`ksk`k``s`k``s``s`kski``s``s`ksk```sii``s``s`kski`k`s``s`ksk`k`k`k``s``si
`k```sii```sii``s``s`kski`k`kk``sii```s``s`kski``s``s`ksk``s``s`kski```s``s`kski
``s``s`ksk``s``s`kski```