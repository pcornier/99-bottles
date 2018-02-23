
## Language AutoLISP ##
---
- Author: matthew
- Date: 08/10/12
- Info: n/a
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-autolisp-2927.html
---

```;; autolisp solution for 99bottles lyrics
;; mwaychoff@micea.net
;; submitted2012-08-09 as solution to http://www.99-bottles-of-beer.net
;;
;; original problem statement is to write to screen the following lyrics:
;; note the change of tense of the word bottle(s) as number reaches 0
;;
;; 99 bottles of beer on the wall, 99 bottles of beer.
;; Take one down and pass it around, 98 bottles of beer on the wall.
;; 
;; 2 bottles of beer on the wall, 2 bottles of beer.
;; Take one down and pass it around, 1 bottle of beer on the wall.
;; 
;; 1 bottle of beer on the wall, 1 bottle of beer.
;; Take one down and pass it around, no more bottles of beer on the wall.
;; 
;; No more bottles of beer on the wall, no more bottles of beer. 
;; Go to the store and buy some more, 99 bottles of beer on the wall.
;;
(defun c:write99beers ()
  (setq beerthis 101)
  (setq beernext 100)
  (repeat 100  
    (progn
      (setq beerthis (- beerthis 1))
      (setq beernext (- beernext 1))
      (if (> beerthis 2)
        (progn
          (princ (strcat "\n\n" (substr (rtos (- beerthis 1)) 1 2) " bottles of beer on the wall, "
(substr (rtos (- beerthis 1)) 1 2) " bottles of beer."))
          (princ (strcat "\nTake one down and pass it around, " (substr (rtos (- beernext 1)) 1 2) "
bottles of beer on the wall."))
        );end progn        
      );end if
      (if (= beerthis 2)
        (progn
          (princ (strcat "\n\n" (substr (rtos (- beerthis 1)) 1 2) " bottle of beer on the wall, "
(substr (rtos (- beerthis 1)) 1 2) " bottle of beer."))
          (princ "\nTake one down and pass it around, no more bottles of beer on the wall."))
        );end progn 
      );end if
      (if (= beerthis 1)
        (progn
          (princ "\n\nNo more bottles of beer on the wall, No more bottles of beer.")
          (princ "\nGo to the store and buy some more, 99 bottles of beer on the wall."))
        );end progn 
      );end if
    );end progn  
  );end repeat
  (princ)
);end defun
;;to run program type (c:write99beers) or simply write99beers```