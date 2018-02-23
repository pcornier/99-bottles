
## Language Maxima ##
---
- Author: Wilhelm Haager
- Date: 09/23/08
- Info: http
- Score:  (3.00 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-maxima-1874.html
---

```b(n,c) :=
block([l:["n","N"]],
if n>1 then concat(n," bottles")
          else if n<1 then concat(l[c],"o more bottles")
             else "1 bottle")$
map(
  lambda([u],
    disp(concat(b(u,2)," of beer on the wall, ",b(u,1)," of beer.")),
    if u>0 then
       disp(concat("Take one down and pass it around, ",
       b(u-1,1)," of beer on the wall."))
    else
      disp("Go to the store and buy some more, 99 bottles of beer on the wall.")
  ),
  makelist(100-k,k,1,100)
)$```