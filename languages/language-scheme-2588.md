
## Language Scheme ##
---
- Author: NMH
- Date: 02/02/11
- Info: n/a
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scheme-2588.html
---

```; Just to show that it can be done: the following syntax transformer
; expands (bottles) to the complete lyrics of the "99 bottles of beer"
; song using just syntax-rules. Different bottle counts can be passed
; to the transformer by specifying tens and ones separately, e.g.:
; (bottles 2 3).

(define-syntax verse
  (syntax-rules ()
    ((_ x y z)
      `((,(+ (* x 10) y) bottles of beer on the wall)
        (,(+ (* x 10) y) bottles of beer)
        (take one down and pass it around)
        (,(+ -1 (* x 10) y) bottles of beer on the wall)
        ,@z))))

(define-syntax bottles
  (syntax-rules ()
    ((_)     (bottles 9 9))
    ((_ 0 2) `((2 bottles of beer on the wall)
               (2 bottles of beer)
               (take one down and pass it around)
               (1 bottle of beer on the wall)
               ,@(bottles 0 1)))
    ((_ 0 1) `((1 bottle of beer on the wall)
               (1 bottle of beer)
               (take one down and pass it around)
               (0 bottles of beer on the wall)
               ,@(bottles 0 0)))
    ((_ 0 0) '((0 bottles of beer on the wall)
               (0 bottles of beer)
               (go to the store buy some more)
               (99 bottles of beer on the wall)))
    ((_ x 9) (verse x 9 (bottles x 8)))
    ((_ x 8) (verse x 8 (bottles x 7)))
    ((_ x 7) (verse x 7 (bottles x 6)))
    ((_ x 6) (verse x 6 (bottles x 5)))
    ((_ x 5) (verse x 5 (bottles x 4)))
    ((_ x 4) (verse x 4 (bottles x 3)))
    ((_ x 3) (verse x 3 (bottles x 2)))
    ((_ x 2) (verse x 2 (bottles x 1)))
    ((_ x 1) (verse x 1 (bottles x 0)))
    ((_ 9 0) (verse 9 0 (bottles 8 9)))
    ((_ 8 0) (verse 8 0 (bottles 7 9)))
    ((_ 7 0) (verse 7 0 (bottles 6 9)))
    ((_ 6 0) (verse 6 0 (bottles 5 9)))
    ((_ 5 0) (verse 5 0 (bottles 4 9)))
    ((_ 4 0) (verse 4 0 (bottles 3 9)))
    ((_ 3 0) (verse 3 0 (bottles 2 9)))
    ((_ 2 0) (verse 2 0 (bottles 1 9)))
    ((_ 1 0) (verse 1 0 (bottles 0 9)))))```