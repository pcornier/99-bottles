
## Language Ox ##
---
- Author: Riccardo 'Jack' Lucchetti
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 22 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ox-527.html
---

```// 99 Bottles of Beer in Ox
// http://www.nuff.ox.ac.uk/Users/Doornik/doc/ox/oxmenu.html
//
// by Riccardo 'Jack' Lucchetti
// jack@dea.unian.it


#include<oxstd.h>

enum {NOWALL, WALL}

bob(const n, const otw)
{
  decl s="";

  if(n==0)
    s=sprint("No more bottles of beer");
  else
    if(n==1)
      s=sprint(n," bottle of beer");
    else
      s=sprint(n," bottles of beer");

  if(otw)
    s~=" on the wall";

  return(s);
}

main()
{
  decl bottles;
  for(bottles=99; bottles>0; )
    {
      println(bob(bottles,WALL),",");
      println(bob(bottles,NOWALL),",");
      println("Take one down, pass it around;");
      println(bob(--bottles,NOWALL),".\n");
    }

  println("Time to buy more beer!");

}```