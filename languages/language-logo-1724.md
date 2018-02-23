
## Language Logo ##
---
- Author: rahul
- Date: 03/17/08
- Info: http
- Score:  (3.00 in 28 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-logo-1724.html
---

```
to bottle :i
    if :i = 0 [output [No more bottles of beer]]
    if :i = 1 [output [One bottle of beer]]
    output se :i [bottles of beer]
end

to verse :i
    pr (se bottle :i [ on the wall,] bottle :i)
    pr [Take one down, pass it around]
    pr se bottle :i - 1 [ on the wall]
end

to sing :i
    if :i = 0 [stop]
    verse :i
    sing :i - 1
end

#Using it:
sing 99```