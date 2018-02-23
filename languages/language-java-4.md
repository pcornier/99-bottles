
## Language Java ##
---
- Author: Sean Russell
- Date: 04/20/05
- Info: http
- Score:  (3.02 in 49 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-java-4.html
---

```<A HREF=http://java.sun.com>Java</A> is a machine independent 
compiler based on C++ which targets to pseudo-code.

// java version of 99 bottles of beer on the wall
// 1995 Sean Russell (ser@cs.uoregon.edu)

class bottles
{
  public static void main(String args[])
    {
    String s = "s";
    for (int beers=99; beers>-1;)
      {
      System.out.print(beers + " bottle" + s + " of beer on the wall, ");
      System.out.println(beers + " bottle" + s + " of beer, ");
      if (beers==0)
        {
        System.out.print("Go to the store, buy some more, ");
        System.out.println("99 bottles of beer on the wall.\n");
        System.exit(0);
        }
      else
        System.out.print("Take one down, pass it around, ");
      s = (--beers == 1)?"":"s";
      System.out.println(beers + " bottle" + s + " of beer on the wall.\n");
      }
    }
}```