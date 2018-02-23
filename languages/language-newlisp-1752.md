
## Language newlisp ##
---
- Author: Norman
- Date: 04/03/08
- Info: http
- Score:  (2.96 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-newlisp-1752.html
---

```;; A way of putting them  on the wall, Target: efficiency. newdep 2007

(set  'y 99 'z '( " bottles" " of beer on the wall" "no more" "Take one down and pass it around, "
"Go to the store and buy some more, " ".\n" ))
(set 'a (z 0) 'b (z 1) 'c (z 2) 'd (z 3) 'e (z 4) 'f (z 5) 'g (0 -1 a) 'h (0 8 b) 'i (-2 d))
(for (x y 0)
  (println
   (if (> x 0) x (title-case c)) (if (= x 1) g a) b i (if (= x 0) c x) (if (= x 1) g a) h f
     (if (= x 0) e d) (case x (0 y) (1 c) (true (- x 1)))  (if (= x 2) g a) b f ))```