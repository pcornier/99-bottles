
## Language Swym ##
---
- Author: Laurie Cheers
- Date: 02/03/10
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-swym-2308.html
---

```Int.bottles:
  case(this)
    [0] {"no more bottles"}
    [1] {"1 bottle"}
   else {"$this bottles"};

for(3..1)
{
  print("$it.bottles of beer on the wall, $it.bottles of beer.");
  print("You take one down, pass it around, ");
  print("$((it-1).bottles) of beer on the wall.\n");
}```