
## Language OCaml ##
---
- Author: David Baelde
- Date: 11/08/05
- Info: http
- Score:  (3.82 in 28 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ocaml-934.html
---

```let bottles = function
  | 0 -> "no more bottles"
  | 1 -> "1 bottle"
  | n -> Printf.sprintf "%d bottles" n

let rec song n =
  let current = bottles n in
  let next = bottles (n-1) in
    Printf.printf
      "%s of beer on the wall, %s of beer.\n"
      (String.capitalize current) current ;
    if n > 0 then begin
      Printf.printf
        "Take one down and pass it around, %s of beer on the wall.\n\n"
        next ;
      song (n-1)
    end else
      Printf.printf
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n"

let run = song 99```