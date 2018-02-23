
## Language GOO ##
---
- Author: Juri Pakaste
- Date: 04/20/05
- Info: http
- Score:  (3.02 in 123 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-goo-291.html
---

```; GOO version of 99 bottles of beer
; by Juri Pakaste <juri@iki.fi>
; GOO information at http://www.googoogaga.org/

(df bottles (n)
        (cat
                (cond ((= n 0) "No more bottles")
                        ((= n 1) "One bottle")
                        (#t (cat (num-to-str n) " bottles")))
        " of beer"))

(df bow (n)
        (cat (bottles n) " on the wall"))

(do 
        (fun (n) 
                (post (bow n)) 
                (post "\n") 
                (post (bottles n)) 
                (post "\nTake one down, pass it around\n") 
                (post (bow (1- n))) 
                (post "\n\n")) 
        (range-by 100 >= 1 1-))```