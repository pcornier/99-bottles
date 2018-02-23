
## Language Refal ##
---
- Author: Anton Orlov
- Date: 02/11/09
- Info: http
- Score:  (3.00 in 5 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-refal-1980.html
---

```$use Arithm List2 StdIO;

$func F e.params = e.phrase;
F {
  Bottles 0   = "no more bottles of beer";
  Bottles 1   = "1 bottle of beer";
  Bottles s.n = s.n" bottles of beer";
  0 =   ("No more bottles of beer on the wall, "<F Bottles 0>".")
        ("Go to the store and buy some more, "<F Bottles 99>" on the wall.");
  s.n = (<F Bottles s.n>" on the wall, "<F Bottles s.n>".")
        ("Take one down and pass it around, "<F Bottles <Sub s.n 1>>" on the wall.")
        ();
};

$func Main = e;
Main = <MapIn &PrintLn <Map &F <Ints 99 -1>>>;```