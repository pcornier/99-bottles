
## Language OCaml ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 202 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ocaml-510.html
---

```let rec ninetyNineBottlesOfBeer  = function
     0 -> print_string "no more bottles of beer\n"
   | 1 -> print_string "1 bottle of beer on the wall. Take it down, pass 
it around\n" ; ninetyNineBottlesOfBeer 0
   | n -> print_int n ; print_string " bottles of beer on the wall. Take 
one down, pass it around\n" ; ninetyNineBottlesOfBeer (n - 1)
  in  ninetyNineBottlesOfBeer 99 ;

(* ocamlopt -o ninetyNineBottlesOfBeer nintyNineBottlesOfBeer.ml *)```