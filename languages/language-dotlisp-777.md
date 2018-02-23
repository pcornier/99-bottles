
## Language DotLisp ##
---
- Author: Mark Hurd
- Date: 07/01/05
- Info: http
- Score:  (3.01 in 104 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-dotlisp-777.html
---

```(def-macro (prnf f &rest r)
 `(Console:WriteLine ~f (vector-of Object. ~@r)))

(for (i 99) (> i 0) (-- i)
 (prnf "{0} bottle{1} of beer on the wall
{0} bottle{1} of beer
take {2} down and pass it around
{3} bottle{4} of beer on the wall\r\n"
   i
   (if (== i 1) "" "s")
   (if (== i 1) "it" "one")
   (if (== i 1) "no more" (- i 1))
   (if (== i 2) "" "s")))```