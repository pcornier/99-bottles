
## Language Refal ##
---
- Author: rahul
- Date: 03/17/08
- Info: n/a
- Score:  (2.92 in 12 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-refal-1725.html
---

```* Refal is "Recursive functions algorithmic language"
* and is a pattern matching programming language.
* This entry uses both recursion and pattern matching
* capabilities of refal.

$ENTRY Go { = <Sing 99>;};

Sing {
    s.N = <Prout <Verse s.N>>;
};

Beer {
    0 = "No more bottles of beer";
    1 = "One bottle of beer";
    s.N = s.N "bottles of beer";
};

Verse {
   0 = "";
   s.N = <Beer s.N> "on the wall.\n"
        "Take one down, pass it around,\n"
        <Beer <- s.N 1>> "on the wall\n\n"
        <Verse <- s.N 1>>;
};```