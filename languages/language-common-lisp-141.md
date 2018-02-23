
## Language Common Lisp ##
---
- Author: Rebecca Walpole
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 170 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-common-lisp-141.html
---

```;; Bottles by Rebecca Walpole (walpolr@cs.orst.edu)
;; tested in Austin Kyoto Common Lisp version 1.615
;; Note: the ~p takes care of plurals.
;;
(defun bottles (n)
 "Prints the lyrics to '99 Bottles of Beer'"
(if (< n 1)
    (format t "~%Time to go to the store.~%")
    (progn (format t "~% ~a bottle~:p of beer on the wall." n)
           (format t "~% ~a bottle~:p of beer." n)
           (format t "~% Take one down, pass it around.")
           (format t "~% ~a bottle~:p of beer on the wall.~%" (- n 1))
           (bottles (- n 1))
	   )
  )
)

(bottles 99)(defun bottles (n)
  "Prints the lyrics to '99 Bottles of Beer'"
  (cond ((< n 1) (format t "~%Time to go to the store.~%"))
        (t (format t "~% ~a bottle~:p of beer on the wall." n)
           (format t "~% ~a bottle~:p of beer." n)
           (format t "~% Take one down, pass it around.")
           (format t "~% ~a bottle~:p of beer on the wall.~%" (1- n))
           (bottles (1- n)))))

(bottles 99)
```