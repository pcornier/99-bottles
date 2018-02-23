
## Language Qi ##
---
- Author: Jeremy Ryan
- Date: 05/25/10
- Info: http
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-qi-2399.html
---

```\
99 bottles of beer program in Qi, by Jeremy Ryan
See http://www.lambdassociates.org for more information on the Qi language
\

(define display-verses
  N _ -> 
  done where (< N 0)
  N [] -> 
  (do (output "~%") 
      (n-bottles-of-beer (- N 1)))
  N [Verse | Rest] -> 
  (do (output "~A~%" Verse)
      (display-verses N Rest)))

(define n-bottles-of-beer
  0 -> 
  (display-verses 0 ["No more bottles of beer on the wall, no more bottles of beer."
		     "Go to the store and buy some more, 99 bottles of beer on the wall."])
  1 -> 
  (display-verses 1 ["1 bottle of beer on the wall, 1 bottle of beer."
		     "Take one down and pass it around, no more bottles of beer on the wall."])
  2 -> 
  (display-verses 2 ["2 bottles of beer on the wall, 2 bottles of beer."
		     "Take one down and pass it around, 1 bottle of beer on the wall."])
  N -> 
  (display-verses N 
		  [(make-string "~A bottles of beer on the wall, ~:*~A bottles of beer." 
				N)
		   (make-string "Take one down and pass it around, ~A bottles of beer on the wall."
				(- N 1))]))

(define 99-bottles-of-beer
  -> (n-bottles-of-beer 99))

(99-bottles-of-beer)```