
## Language Ioke ##
---
- Author: Ola Bini
- Date: 01/07/09
- Info: n/a
- Score:  (3.00 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ioke-1944.html
---

```bottle = method(i,
  case(i,
    0, "no more bottles of beer",
    1, "1 bottle of beer",
    "#{i} bottles of beer"))
 
(99..1) each(i,
  "#{bottle(i)} on the wall, " println
  "take one down, pass it around," println
  "#{bottle(i - 1)} on the wall.\n" println
)```