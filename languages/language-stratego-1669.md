
## Language Stratego ##
---
- Author: Valentin David
- Date: 01/15/08
- Info: http
- Score:  (2.90 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-stratego-1669.html
---

```module beers
imports libstratego-lib

strategies

   bottles = ?1; !"1 bottle"
          <+ ?0; !"no more bottle"
          <+ <concat-strings> [<int-to-string>, " bottles"]

   cap = string-as-chars([to-upper|id] <+ [])

   beers =
       !99
       ; rec x(
           where(<concat-strings; cap; echo>
                    [<bottles>, " of beer standing on the wall, ",
                     <bottles>, " of beer."])
         ; ?0
        <+ dec
         ; where(<concat-strings; echo>
                    ["Take one down and pass it around, ",
                     <bottles>, " of beer on the wall."])
         ; x)
       ; <echo>
          "Go to the store and buy some more, 99 bottles of beer on the wall."
       ; <exit> 0```