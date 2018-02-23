
## Language F# ##
---
- Author: Simon Kang
- Date: 06/22/09
- Info: n/a
- Score:  (3.00 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fsharp-2129.html
---

```let rec writeBeerSong n =
    let bottleString1 n1 =
        match n1 with
        | 0 -> "no more bottles of beer"
        | 1 -> "1 bottle of beer"
        | _ -> n1.ToString() + " bottles of beer"
    let bottleString2 n2 = 
        match n2 with
        | 0 -> "No more bottles of beer on the wall"
        | _ -> bottleString1 n2 + " on the wall"
    printfn "%s, %s" (bottleString2 n) (bottleString1 n)
    match n with
    | 0 ->  printf "Go to the store and buy some more,"
            printfn " 99 bottles of beer on the wall."
    | _ ->  printfn "Take one down and pass it around, %s on the wall.\n"
                (bottleString1 (n - 1))
            writeBeerSong (n - 1)

writeBeerSong 99```