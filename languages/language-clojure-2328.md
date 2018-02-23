
## Language clojure ##
---
- Author: Thomas G. Kristensen
- Date: 03/08/10
- Info: http
- Score:  (4.18 in 283 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-clojure-2328.html
---

```(defn bottles-str [n]
  (str
    (cond
      (= 0 n) "no more bottles"
      (= 1 n) "1 bottle"
      :else (format "%d bottles" n))
    " of beer"))

(defn print-bottle [n] 
  (println (format "%s on the wall, %s." (bottles-str n) (bottles-str n)))
  (println "Take one down and pass it around," (bottles-str (dec n)) "on the wall."))
  
(defn sing [n]
  (dorun (map print-bottle (reverse (range 1 (inc n)))))
  (println "No more bottles of beer on the wall, no more bottles of beer.")
  (println "Go to the store and buy some more," (bottles-str n) "on the wall."))
  
(sing 99)```