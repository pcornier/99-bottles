
## Language Clojure ##
---
- Author: William James
- Date: 03/06/09
- Info: http
- Score:  (3.02 in 323 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clojure-1996.html
---

```(defn bottles [n & [capitalize]]
  (str (if (> n 0) n (if capitalize "No more" "no more"))
    " bottle" (if (= 1 n) "" "s") " of beer" ))

(defn bot-wall [n & cap] (str (bottles n cap) " on the wall"))

(defn sing
  ;  Default is 99 times.
  ([]  (sing 99))
  ([stock]
    (doseq [i (range stock -1 -1)]
      (printf "%s, %s.\n%s.\n\n"
        (bot-wall i true) (bottles i)
        (apply str
          (if (> i 0)
            ["Take one down and pass it around, " (bot-wall (dec i))]
            ["Go to the store and buy some more, " (bot-wall stock)]
          ))))))

(sing)```