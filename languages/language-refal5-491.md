
## Language Refal5 ##
---
- Author: Dendik
- Date: 04/20/05
- Info: http
- Score:  (3.01 in 100 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-refal5-491.html
---

```* Refal5 version of famous lyrics
* Created and debugged carefully by Dendik (ru.pochtamt[at]dendik)
* You can get some info on Refal at http://refal.org/index_e.htm

$ENTRY Go { = <Go 99>; t.n = <Go <Do t.n>>; };

Do
  {
   "next" t.n, <-(t.n)1> : { t.m = t.m; '-' 1 = 99; };
   "look" t.n = <Prout <Do "Look" t.n>>;
   "drink" t.n = <Prout <Do "Drink" t.n>'\n'> t.n;
   "Look" t.n = <Do "Beer" t.n> <Do "wall"> ', ' <Do "beer" t.n>;
   "Drink" 99 = 'Go to the store, buy some more' <Do "beer" 99>;
   "Drink" t.n = 'Take one down, pass it around, ' <Do "beer" t.n>;
   "wall" = ' on the wall';
   "Beer" 0 = 'No more ' <Do beer>;
   "Beer" t.n = t.n <Do beer>;
   "beer" 0 = 'no more ' <Do beer>;
   "beer" t.n = t.n <Do beer>;
   "beer" = 'bottles of beer';
   t.n = <Do "look" t.n> <Do "drink" <Do "next" t.n>>;
  };```