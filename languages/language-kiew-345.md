
## Language Kiew ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.65 in 31 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-kiew-345.html
---

```// Kiev version of 99 Bottles of beer (Bottles.java)
// See http://www.forestro.com/kiev/
// Philipp Winterberg, http://www.winterbergs.de

import kiev.stdlib;

class Bottles {
  public static void main(String argv[]) {
    int b;
    for (b = 99; b > 0; b--) {
      System.out.print(b);
      System.out.println(" bottle(s) of beer on the wall,");
      System.out.print(b);
      System.out.println(" bottle(s) of beer.");
      System.out.println("Take one down, pass it around,");
      System.out.print(b-1);
      System.out.println(" bottle(s) of beer on the wall.\n");
    }
  }
}```