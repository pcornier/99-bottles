
## Language Linden Scripting Language (LSL) ##
---
- Author: Wolt Amat
- Date: 06/08/07
- Info: http
- Score:  (2.60 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-linden-scripting-language-(lsl)-1507.html
---

```// 99 Bottles of Beer On The Wall
// Version 2.0, Corrected for exact lyrics
// Ref entry by, and apologies to, MNMNK - I hadn't seen it before.
// In Linden Labs Scripting Language (LSL)
// Wolt Amat

integer beer = 99;
vector signcolor = <1,0,0>;     // Red
float signtrans = 1.0;          // Opaque
string BB = " bottles of beer";
string OW = " on the wall";
string TD = "Take one down and pass it around, ";
string BC;

default {
  state_entry() {
    llSetText("Touch me to start taking beer off the wall", signcolor, signtrans);
  }

  touch_start(integer n) {
    while (1 < beer)
    {
        BC = (string)beer;
        llSay(0,BC + BB + OW + ", " + BC + BB);
        llSay(0,TD + BC + BB + OW);
        beer--;
    }
    BC = (string)beer;
    llSay(0,BC + " bottle of beer" + OW + ", " + BC + " bottle of beer");
    llSay(0,TD + "no more" + BB + OW);
    
    llShout(0,"No more" + BB + OW + ", no more" + BB);
    llShout(0,"Go to the store and buy us some more");
    beer = 99;
    llSay(0,(string)beer + BB + OW);
  }
}```