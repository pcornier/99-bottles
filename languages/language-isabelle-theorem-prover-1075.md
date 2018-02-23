
## Language Isabelle Theorem Prover ##
---
- Author: Brian Huffman
- Date: 03/04/06
- Info: http
- Score:  (3.36 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-isabelle-theorem-prover-1075.html
---

```(*
Filename: Bottles.thy
Author: Brian Huffman

Description:

  The Isabelle theorem prover has a flexible syntax-translation
mechanism which allows expressions to be parsed and printed using
a wide variety of standard mathematical notations.

  Syntax translation is implemented by applying rewrite rules
(defined using the "translations" command) to an abstract syntax
tree representing the expression. After rewriting, the resulting
tree is pretty-printed using the syntax patterns (defined using
the "syntax" command) associated with the labels on each tree node.

  This program works by defining a single logical constant called
ninety_nine_bottles_of_beer, whose output syntax (displayed using
the "term" command) consists of the complete lyrics of the song.
*)

theory Bottles imports CPure begin

consts ninety_nine_bottles_of_beer :: 'a

nonterminals digit

syntax
  "_0" :: digit ("0")
  "_1" :: digit ("1")
  "_2" :: digit ("2")
  "_3" :: digit ("3")
  "_4" :: digit ("4")
  "_5" :: digit ("5")
  "_6" :: digit ("6")
  "_7" :: digit ("7")
  "_8" :: digit ("8")
  "_9" :: digit ("9")

syntax
  "_dec" :: 'a
  "_d" :: "digit => 'a" ("_")
  "_ds" :: "'a => 'a => 'a"
  "_bnn" :: "'a => 'a => 'a" ("__ bottles")
  "_bn" :: "'a => 'a" ("_ bottles")
  "_b1" :: "'a" ("1 bottle")
  "_b0" :: "'a" ("no more bottles")
  "_of" :: "'a => 'a" ("_ of beer")
  "_bob" :: 'a
  "_vs" :: 'a
  "_song" :: 'a

  "_v1" :: "'a => 'a => 'a => 'a => 'a"
   ("(1_ on the wall, _./
     Take one down and pass it around, _ on the wall.)/ _")

  "_v0" :: "'a => 'a => 'a"
   ("(1No more bottles of beer on the wall, _./
     Go to the store and buy some more, _ on the wall.)")

translations
  "0" <= "_dec 1"
  "1" <= "_dec 2"
  "2" <= "_dec 3"
  "3" <= "_dec 4"
  "4" <= "_dec 5"
  "5" <= "_dec 6"
  "6" <= "_dec 7"
  "7" <= "_dec 8"
  "8" <= "_dec 9"
  "9" <= "_dec (_ds 1 0)"
  "_ds (_dec x) 9" <= "_dec (_ds x 0)"
  "_ds x (_dec y)" <= "_dec (_ds x y)"
  "_of _b1" <= "_bob 1"
  "_of _b0" <= "_bob 0"
  "_of (_bn x)" <= "_bob (_d x)"
  "_of (_bnn x y)" <= "_bob (_ds x y)"
  "_v1 (_bob n) (_bob n) (_bob n') (_song n')" <= "_vs n n'"
  "_v0 (_bob 0) (_bob (_ds 9 9))" <= "_song 0"
  "_vs (_d x) (_dec (_d x))" <= "_song (_d x)"
  "_vs (_ds x y) (_dec (_ds x y))" <= "_song (_ds x y)"
  "_song (_ds 9 9)" <= "ninety_nine_bottles_of_beer"

term ninety_nine_bottles_of_beer

end```