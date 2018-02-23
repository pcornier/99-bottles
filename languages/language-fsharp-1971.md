
## Language F# ##
---
- Author: J�rn R�nnow
- Date: 02/01/09
- Info: http
- Score:  (3.02 in 111 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fsharp-1971.html
---

```#light

let bottleStr bottles = 
    match bottles with
    | 0 -> "no more bottles"
    | 1 -> "1 bottle"
    | _ -> bottles.ToString() + " bottles"

let verse n =
    match n with
    | 0 -> "No more bottles of beer on the wall, no more bottles of beer.\n" +
           "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    | _ -> bottleStr n + " of beer on the wall, " + bottleStr n + " of beer.\n" +
           "Take one down and pass it around, " + bottleStr (n-1) + 
           " of beer on the wall.\n"

List.iter (printfn "%s") [for v in [99..-1..0] -> verse v]```