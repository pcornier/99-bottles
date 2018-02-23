
## Language Emerald ##
---
- Author: David Eddyshaw
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-emerald-237.html
---

```% 99 Bottles of Beer in Emerald
% by David Eddyshaw <david@jeddyshaw.freeserve.co.uk>

const beer <- object beer
  initially
    for i : Integer <- 99 while i > 0 by i <- i - 1
       self.bottles[i]
       stdout.putstring[" of beer on the wall,\n"]
       self.bottles[i]
       stdout.putstring[" of beer.\n"]
       stdout.putstring["Take one down and pass it around;\n"]
       self.bottles[i-1]
       stdout.putstring[" of beer on the wall.\n\n"]
    end for
  end initially
  operation bottles [x : Integer]
    if x = 0 then
       stdout.putstring["No more bottles"]
    elseif x = 1 then
       stdout.putstring["1 bottle"]
    else
       stdout.putint[x,0]
       stdout.putstring[" bottles"]
    end if
  end bottles
end beer```