
## Language April ##
---
- Author: John Knottenbelt
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-april-34.html
---

```-- 
-- 99 Bottles of Beer in April
-- John Knottenbelt
-- 
-- April is a a programming language for building DAI and other
-- types of distributed applications requiring the transmission
-- and manipulation of complex symbolic data.
-- 
--    http://www.doc.ic.ac.uk/~klc/april1.html
-- 

program {
  main() {
    drink(99);
    "Time to buy some more beer\n" >> stdout;
    fflush(stdout)
  };

  drink = {
    0 -> {}
  | i -> {
      bottles(i) ++ " on the wall,\n" ++
      bottles(i) ++ ".\n" ++
      "take one down, pass it around,\n" ++
      bottles(i) ++ " on the wall.\n\n" >> stdout;
      drink(i-1)
    }
  };

  bottles = {
    0 => "no bottles of beer"
  | 1 => "1 bottle of beer"
  | N => N^0 ++ " bottles of beer"
  }
} execute main;```