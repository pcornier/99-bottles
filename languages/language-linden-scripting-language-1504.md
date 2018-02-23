
## Language Linden Scripting Language ##
---
- Author: Wolt Amat
- Date: 06/07/07
- Info: http
- Score:  (1.40 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-linden-scripting-language-1504.html
---

```// In Linden Labs Scripting Language (LSL)
// in Second Life
// Wolt Amat

integer beer = 99;
vector signcolor = <1,0,0>;     // Red
float signtrans = 1.0;          // Opaque

default {
  state_entry() {
    llSetText("Touch me to start taking beer off the wall", signcolor, signtrans);
  }

  touch_start(integer n) {
    while (0 < beer)
    {
        llSay(0,(string)beer + " bottles of beer on the wall");
        llSay(0,(string)beer + " bottles of beer");
        llSay(0,"Take one down");
        llSay(0,"Pass it around");
        beer--;
        llSay(0,(string)beer + " bottles of beer on the wall");
    }
    llSay(0,"No more bottles of beer on the wall");
    llSay(0,"No more bottles of beer");
    llSay(0,"Go to the store");
    llSay(0,"To get us some more");
    beer = 99;
    llSay(0,(string)beer + " bottles of beer on the wall");
  }
}```