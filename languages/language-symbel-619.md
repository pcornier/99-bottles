
## Language SymbEL ##
---
- Author: Marcel Luternauer
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 96 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-symbel-619.html
---

```/*
 * 99 bottles of beer in SymbEL
 *
 * by Marcel Luternauer: marcel.luternauer@sicap.com
 *
 * SymbEL is an interpretive language, based on C, that was created to
 * address the need for simplified access to data residing in the 
 * SunOS Kernel. The SE interpreter (package RICHPse) is available at:
 * http://www.setoolkit.com
 * 
 * After installing the interpreter, the script can be executed with:
 * $ /opt/RICHPse/bin/se 99beers.se
 *
 */

#define MAXBEER (99)


main() {
  int beers;
  string s;
  
  printf("\n");
  for(beers = MAXBEER; beers > 0 ; beers --) {
    if(beers == 1) {s="";} else {s="s";}
    printf("%d bottle%s of beer on the wall,\n", beers, s);
    printf("%d bottle%s of beeeeer . . . ,\n", beers, s);
    printf("Take one down, pass it around,\n");

    if(beers == 1) {
      printf("No more bottles of beer on the wall.\n\n");
    } else {
      if (beers == 2) {s="";} else {s="s";}
      printf("%d bottle%s of beer on the wall.\n\n", beers - 1, s);
    }
  }
  printf("Time to buy more beer!\n\n");
}```