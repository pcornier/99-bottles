
## Language Afnix ##
---
- Author: Kahnamta
- Date: 04/15/07
- Info: http
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-afnix-1453.html
---

```# 99 Bottles of Beer in Afnix (www.afnix.org)
# by Kahnamta, Apr 15 2007

const verse (i) {
        if (> i 2) {
                println i " bottles of beer on the wall."
                println i " bottles of beer."
                println "Take one down, pass it around."

                trans j (- i 1)
                println j " bottles appear on the wall!"
                println

                return
        }

        if (== i 2) {
                println "Two bottles of beer on the wall."
                println "Two bottles of beer."
                println "Take one down, pass it around."
                println "One bottle appears on the wall."
                println

                return
        }

        if (== i 1) {
                println "One bottle of beer on the wall."
                println "One bottle of beer."
                println "Take it down, pass it around."
                println "No more bottles of appear on the wall!"

                return
        }
}

loop (trans i 99) (>= i 1) (i:--) (verse i)```