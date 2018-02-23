
## Language NetLogo ##
---
- Author: Antoine Cervoise
- Date: 07/16/10
- Info: http
- Score:  (4.28 in 136 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-netlogo-2448.html
---

```to bottle [i]
    ifelse i = 1 
    [type "1 bottle of beer"]
    [ ifelse i = 0
      [type "no more bottles of beer"]
      [type i type " bottles of beer"]
    ]
end

to verse [i]
    bottle i 
    type " on the wall, " 
    bottle i
    print ""
    type "Take one down and pass it around, "
    bottle i - 1 
    type " on the wall."
    print ""
    print ""
end

to sing [i]
    if i = 0 [
      type "No more bottles of beer on the wall, no more bottles of beer."
      print ""
      type "Go to the store and buy some more, 99 bottles of beer on the wall."
      print ""
      stop ]
    verse i
    sing i - 1
end

;using
sing 99```