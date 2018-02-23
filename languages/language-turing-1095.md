
## Language Turing ##
---
- Author: Bill Huang
- Date: 03/21/06
- Info: n/a
- Score:  (1.56 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-turing-1095.html
---

```%  Bill Huang huan3816@email.adsb.on.ca
%  Turing language version of 99 bottles of beer
loop
    for decreasing i : 99 .. 1
        put i, " bottle(s) of beer on the wall, ", i, " bottle(s) of beer"
        put "Take one down, pass it around, ", i - 1,
            " bottle(s) of beer on the wall"
            delay (300)
    end for
    put "No more bottles of beer on the wall, no more bottles of beer."
    put "Go to the store and buy some more, 99 bottles of beer on the wall."
    delay (2000)
end loop```