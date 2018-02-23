
## Language LOCK ##
---
- Author: Marinus Oosters
- Date: 05/22/10
- Info: http
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lock-2398.html
---

```{main
  #1
  =one
  #2
  =two
  #99
  =bottles
  <main
  >sing
  >lastverses
}

{sing
  $bottles
  \ bottles of beer on the wall\n
  $bottles
  \ bottles of beer\n
  Take one down and pass it around\n
  ^bottles
  -one
  =bottles
  $bottles
  \ bottles of beer on the wall\n\n
  -two
  <sing
  ?sing
}
      
{lastverses
  2 bottles of beer on the wall\n
  2 bottles of beer\n
  Take one down and pass it around\n
  1 bottle of beer on the wall\n
  \n
  1 bottle of beer on the wall\n
  1 bottle of beer\n
  Take one down and pass it around\n
  No more bottles of beer on the wall\n
  \n
  Go to the store and buy some more\n
  99 bottles of beer on the wall\n
  \n
  <lastverses
}```