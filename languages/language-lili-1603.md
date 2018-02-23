
## Language LiLi ##
---
- Author: Martin Beckmann
- Date: 09/27/07
- Info: http
- Score:  (4.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-lili-1603.html
---

```(defun bottleno (1) " bottle"
     | bottleno  _  " bottles")

(defun take-beer-down (0) (print "Go to the store buy some more ;)")
     | take-beer-down (n) (print (s+ n (bottleno n) " of beer on the wall."))
	                  (print "Take one down, pass it around,")
	                  (take-beer-down (- n 1)))

(defun s+ (s1 s2)
  ;this is a function designed for use with Implicit Reduce Evaluation enabled!
  (conc (str s1)  (str s2))) 


(IRE-enable)

(bottleno 99)```