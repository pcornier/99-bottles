
## Language Fortress ##
---
- Author: Benjamin Carlson
- Date: 12/05/09
- Info: http
- Score:  (2.88 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fortress-2255.html
---

```(********
99 Bottles of beer, a rendition from TacoDev
 *********)

component bottles
export Executable

run() = do
    for i <- seq(99:1:-1) do
      println(i " bottles of beer on the wall, " i " bottles of beer.")
      println("Take one down and Pass it around, " (i-1) " bottles of beer on the wall.\n")
    end
      println("No more bottles of beer on the wall, no more bottles of beer.")
      println("Go to the store and buy some more, 99 bottles of beer on the wall.\n")
  end
end```