
## Language F# ##
---
- Author: Kyle Eppley
- Date: 05/04/10
- Info: http
- Score:  (2.83 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fsharp-2379.html
---

```module BeerList                     /// required for compile error in fsi

let a = " of beer "                 /// strings used 
let b = "on the wall "
let c = "take one down pass it around "
let d = "Go to the store and buy some more, 99 bottles of beer on the wall.\n"

    //build a list of bottle terms none to 99
let bottles = List.map (fun i -> i.ToString() + " bottles") [99..(-1)..2] @ 
                                             ["1 bottle";"no more bottles"]
let line1 = List.map (fun i -> i + a + b + i + a) bottles                
    //build line 1 from bottls and strings
let line2 = List.map (fun i -> c + i + a + b) bottles.Tail @ [d]    
    //build line 2 similarly
List.iter2 (fun i j -> printfn "%s\n%s\n" i j ) line1 line2         
    //output the lines interleafed```