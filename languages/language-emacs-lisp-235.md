
## Language Emacs LISP ##
---
- Author: Geza Gyuk
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 121 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-emacs-lisp-235.html
---

```;;Geza Gyuk - gyuk@oddjob.uchicago.edu"

(defun beersong (n)
  "Does the n-beers song."

(progn (insert (int-to-string n) " bottle" (cond ((= n 1) "")
                                                 (t "s")) 
                                         " of beer on the wall,\n")
       (insert (int-to-string n) " bottle" (cond ((= n 1) "")
                                                 (t "s"))
                                         " of beer,\n")
       (insert "take one down and pass it around,\n")
       (insert (cond ((= n 1) "no more")
                     (t (int-to-string (- n 1)))) 
               " bottle" (cond ((= n 2) "")
                               (t "s")) 
               " of beer on the wall.\n\n")
       (cond ((> n 1) (beersong (- n 1))))))```