
## Language ML ##
---
- Author: Jong-Won Choi
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 107 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ml-398.html
---

```(* ML version of 99 bottles of beer                               *)
(*   - Using pattern of functions parameters                      *)
(*     and Recursion(like other functional programming langauges) *)

(* Written by Jong-Won Choi(jwchoi@gsen.goldstar.co.kr)           *)
(*                                                     Nov 13, 95 *)

fun NinetyNineBottlesOfBeer(0) =
  print("\n No more bottles of beer on the wall\n")
| NinetyNineBottlesOfBeer(1) = 
   (print("\n 1 bottle of beer on the wall, 1 bottle of beer.");
    print("\n Take one down and pass it around.");
    NinetyNineBottlesOfBeer(0))
| NinetyNineBottlesOfBeer(NumberOfBottles:int) =
   (print("\n "); print(NumberOfBottles);
    print(" bottle of beer on the wall, ");
    print(NumberOfBottles);
    print(" bottle of beer.");
    print("\n Take one down and pass it around.");
    NinetyNineBottlesOfBeer(NumberOfBottles - 1));```