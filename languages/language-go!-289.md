
## Language Go! ##
---
- Author: John Knottenbelt
- Date: 04/20/05
- Info: http
- Score:  (2.92 in 37 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-go!-289.html
---

```-- 
-- 99 Bottles of Beer in Go!
-- John Knottenbelt
-- 
-- Go! is a multi-paradigm programming language that is oriented
-- to the needs of programming secure, production quality, agent
-- based applications.
-- 
--    http://www.doc.ic.ac.uk/~klc/dalt03.html 
-- 

main .. {
  include "sys:go/io.gof".
  include "sys:go/stdlib.gof".

  main() ->
      drink(99);
      stdout.outLine("Time to buy some more beer...").

  drink(0) -> {}.
  drink(i) -> stdout.outLine(
       bottles(i) <> " on the wall,\n" <>
       bottles(i) <> ".\n" <>
       "take one down, pass it around,\n" <>
       bottles(i) <> " on the wall.\n");
      drink(i-1).

  bottles(0) => "no bottles of beer".
  bottles(1) => "1 bottle of beer".
  bottles(i) => i^0 <> " bottles of beer".
}```