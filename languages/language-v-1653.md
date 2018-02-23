
## Language v ##
---
- Author: rahul
- Date: 12/26/07
- Info: http
- Score:  (3.02 in 177 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-v-1653.html
---

```[beer
  [newline '' puts].

  [bottles
    [0 =] ['No more bottles of beer' put] if
    [1 =] ['One bottle of beer' put] if
    [1 >] [dup put ' bottles of beer' put] if].

  [0 =] [newline]
    [bottles ' on the wall, ' put bottles newline
    'Take one down and pass it around, ' put pred bottles ' on the wall' puts newline]
  tailrec].

99 bottles```