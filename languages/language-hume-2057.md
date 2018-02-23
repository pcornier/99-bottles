
## Language Hume ##
---
- Author: Greg Michaelson
- Date: 04/20/09
- Info: http
- Score:  (3.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-hume-2057.html
---

```stream output to "std_out";

box bottles
in (n::int 64)
out (n'::int 64,v::string)
match 
0 -> (99,("No more bottles of beer on the wall, ",
          "no more bottles of beer.\n",
          "Go to the store and buy some more, ",
          "99 bottles of beer on the wall.\n") as string) |
n -> (n-1,(n," bottles of beer on the wall, ",
           n," bottles of beer.\n",
           "Take one down and pass it around, ",
           n-1,"bottles of beer on the wall.\n") as string);

wire bottles (bottles.n' initially 99) (bottles.n,output);```