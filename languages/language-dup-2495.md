
## Language DUP ##
---
- Author: Marinus Oosters
- Date: 09/13/10
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dup-2495.html
---

```[0[$;][$;,0^:1+]#%%]p:
[$1_=[%99.][$[.][%0"No more"p;!]?]?]n:
[$n;!0" bottle"p;!1-['s,][]?]x:

99[$1+][
  $x;!0" of beer on the wall,"p;!10,
  $x;!0" of beer,"p;!10,
  $[0"Take one down and pass it around"]
   [0"Go to the store and buy some more"]?p;!10,
  1 -
  $x;!0" of beer on the wall."p;!10,10,
]#```