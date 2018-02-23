
## Language Arc ##
---
- Author: Mathias Justesen
- Date: 10/17/08
- Info: http
- Score:  (3.02 in 44 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-arc-1891.html
---

```; Arc version of "99 Bottles of Beer".

(def 99-bottles (bottles)
  (let plural " bottles"
    (repeat bottles
      (prn bottles plural " of beer on the wall, " bottles plural " of beer.")
      (zap [- _ 1] bottles)
      (if (< bottles 2) (= plural " bottle"))
      (if (< bottles 1) (and (= bottles "no more") (= plural " bottles")))
      (prn "Take one down and pass it around, " bottles plural " of beer on the wall.\n")))
  (prn "No more bottles of beer on the wall, no more bottles of beer.")
  (prn "Go to the store and buy some more, 99 bottles of beer on the wall.\n"))

(99-bottles 99)```