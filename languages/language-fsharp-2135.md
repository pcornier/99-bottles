
## Language F# ##
---
- Author: Alec Zorab
- Date: 07/04/09
- Info: http
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fsharp-2135.html
---

```//Note that to conform the 100 characters per line rule, two calls to printfn are used
//in each case. As a result, this is slightly more verbose than necessary, but is pretty
let rec bottlesOfBeer  = function
     0 -> printfn "No more bottles of beer on the wall, no more bottles of beer."
          printfn "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
   | 1 -> printfn "1 bottle of beer on the wall, 1 bottle of beer."
          printfn "Take it down and pass it around, no more bottles of beer on the wall.\n"
          bottlesOfBeer 0
   | 2 -> printfn "2 bottles of beer on the wall, 2 bottles of beer."
          printfn "Take one down, pass it around, 1 bottle of beer on the wall.\n"
          bottlesOfBeer 1
   | n -> printfn "%d bottles of beer on the wall, %d bottles of beer." n n 
          printfn "Take one down, pass it around, %d bottles of beer on the wall.\n" (n-1)
          bottlesOfBeer (n - 1)
   
bottlesOfBeer 99```