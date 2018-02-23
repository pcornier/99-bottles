
## Language Clojure ##
---
- Author: Ravi Chugh / Zach Tatlock
- Date: 06/08/08
- Info: http
- Score:  (3.02 in 64 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-clojure-1797.html
---

```(def f 
  (fn [b a]
    (str a " bottles of beer on the wall, " 
         a " bottles of beer.\n"
         "Take one down and pass it around, "
         (- a 1) " bottles of beer on the wall.\n\n" b)))

(print (reduce f "" (range 3 100)))

(println (str
   "2 bottles of beer on the wall, 2 bottles of beer.\n"
   "Take one down and pass it around, 1 bottle of beer on the wall.\n\n"
   "1 bottle of beer on the wall, 1 bottle of beer.\n"
   "Take one down and pass it around, no more bottles of beer on the wall.\n\n"
   "No more bottles of beer on the wall, no more bottles of beer.\n"
   "Go to the store and buy some more, 99 bottles of beer on the wall.\n"))```