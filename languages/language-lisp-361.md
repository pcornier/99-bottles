
## Language LISP ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (3.01 in 162 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lisp-361.html
---

```;;; Lisp example of "99 Bottles of beer on the wall"
;;;
;;; NOTE:  Although my mailer insists on inserting 
;;; (at least) one, there is no line break in the 
;;; string beginning "~~  (i.e. it should all be on one line).
;;;
;;; In particular, if it breaks so that the first line
;;; ends with "...~~R" and the second line starts "~0@..."
;;; they should be put back together with a space between
;;; them.  That is, it should read "...~~R ~0@...".
;;; Or just see it here:
;;;     http://www.sover.net/~nichael/lisp99.html
(labels ((foo (x)
   (and (<= 0 x) (cons x (foo (1- x))))))
   (format t (format nil 
        "~~{~~&~~@(~~%~~R ~A ~A!~~)~~:*~~&~~@(~~R
~0@*~A!~~)~~&~~@(~2@*~A!~~)~~&~~@(~~[~A~~:;~~:*~~R~~:*~~] ~0@*~A!~~)~~}"
	    "bottles of beer"
	    "on the wall"
	    "take one down, pass it around"	
	    "no more"
	    )
 (foo 99)))```