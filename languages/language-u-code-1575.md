
## Language U-Code ##
---
- Author: Gordon Henderson
- Date: 08/16/07
- Info: n/a
- Score:  (3.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-u-code-1575.html
---

```func @.bob
{
  @.bottles = 99 ;
  @._bob () ;
  echo ("No more bottles of beer on the wall.\n") ;
}

func @._bob
{
  echo (@.bottles, " bottles of beer on the wall, ",
        @.bottles, " bottles of beer!\n") ;
  echo ("Take one down, pass it around and there'll be:\n") ;
  @.bottles = @.bottles - 1 ;
  if (@.bottles == 0)
    return ;
  echo ("  ", @.bottles, " bottles of beer on the wall.\n\n") ;
  @._bob () ;
}```