
## Language SLI (Simulation language interpreter) ##
---
- Author: R�diger Kupper
- Date: 04/08/08
- Info: http
- Score:  (3.00 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-sli-(simulation-language-interpreter)-1754.html
---

```/say_bottles
{
  dup 0 eq
  {
    pop    
    (no more bottles of beer) =only
  }
  {
    dup =only
    ( bottle) =only
    1 eq not {(s) =only} if
    ( of beer) =only    
  } ifelse
} def

/say_bottles_capitalized
{
  dup 0 eq
  {
    pop    
    (No more bottles of beer) =only
  }
  {
    say_bottles    
  } ifelse
} def


99 -1 0
{
  dup say_bottles_capitalized ( on the wall, ) =only
  dup say_bottles (.) =
  dup 0 eq not
  {
    (Take one down and pass it around, ) =only
    1 sub
  }
  {
    (Go to the store and buy some more, ) =only
    pop
    99
  } ifelse 
  say_bottles ( on the wall.) =
  () =
} for```