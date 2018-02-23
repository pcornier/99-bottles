
## Language OCaml ##
---
- Author: Pierre Etchema�t�
- Date: 11/18/05
- Info: http
- Score:  (2.93 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ocaml-949.html
---

```(* We first build the datastructure of the whole song, then convert it
   to its text form.

   This demonstrates recursive variants, tuple and record types.
 *)

type lyrics =
    | Strophe of strophe
    | Verse of lyrics * lyrics (* hemistichs *)
    | Bottle of int
    | Wall of lyrics
    | TakeOneDown
    | GoToTheStore
    | TheEnd
and strophe =
    { verse1 : lyrics; verse2 : lyrics; remaining : lyrics }

let build_lyrics n0 =
  let rec build_strophe n =
    if n > 0 then
      Strophe { verse1 = Verse (Wall (Bottle n), Bottle n);
                verse2 = Verse (TakeOneDown, Wall (Bottle (n-1)));
                remaining = build_strophe (n-1) }
    else
      Strophe { verse1 = Verse (Wall (Bottle n), Bottle n);
                verse2 = Verse (GoToTheStore, Wall (Bottle n0));
                remaining = TheEnd }
  in build_strophe n0

let rec lyrics_to_string l =
  let strophe_to_string s =
    (lyrics_to_string s.verse1) ^ "\n" ^ (lyrics_to_string s.verse2) ^ "\n" in
  match l with
  | TheEnd -> ""
  | Strophe ({ remaining = TheEnd } as s) ->
      strophe_to_string s
  | Strophe ({ remaining = next } as s) ->
      (strophe_to_string s) ^ "\n" ^ (lyrics_to_string next)
  | Verse (hemistich1, hemistich2) ->
      String.capitalize ( (lyrics_to_string hemistich1) ^ ", " ^
                          (lyrics_to_string hemistich2) ^ "." )
  | Bottle n ->
      (match n with
         | 0 -> "no more bottles"
         | 1 -> "1 bottle"
         | n -> (string_of_int n) ^ " bottles") ^ " of beer"
  | Wall l ->
      (lyrics_to_string  l) ^ " on the wall"
  | TakeOneDown ->
      "take one down and pass it around"
  | GoToTheStore ->
      "go to the store and buy some more"

let _ =
  print_string (lyrics_to_string (build_lyrics 99))```