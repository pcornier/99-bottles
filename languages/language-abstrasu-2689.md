
## Language Abstrasu ##
---
- Author: Luc Bruninx
- Date: 06/28/11
- Info: http
- Score:  (3.00 in 6 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-abstrasu-2689.html
---

```# 99 bottles song...

(function memoize 'bottles{(args 'n) (return (string n " bottles of beer")) })
(memoize bottles[0] return "no more bottles of beer")  # memoize result for 0.
(memoize bottles[1] return "1 bottle of beer")         # memoize result for 1.

(lazy 'Say-Bottles{(args 'n)
  (display (bottles n) " on the wall, " (bottles n) ".")
  (display "Take one down and pass it around, " (bottles (- n 1)) " on the wall.")
})

(function 'sing{(args 'n)
  
  (function 'sing{(args 'n)
    (if{>? n 0} then{
      (~Say-Bottles n)  # evaluate the lazy expression
      (sing (- n 1))    # tail-recursive call
    })
  })

  (sing n)  # call inner function

  (display "No more bottles of beer on the wall, no more bottles of beer.")
  (display "Go to the store and buy some more," (bottles n) "on the wall.")

})

(sing 99)```