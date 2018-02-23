
## Language Pico ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.33 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pico-543.html
---

```�Pico was develloped at the VUB (Vrije Universiteit Brussel)`
�http://pico.vub.ac.be`

{ botf(b) : if(b = 1, "bottle", "bottles");
  bottles : 99;
  while (bottles > 0,
    { display(bottles, " ", botf(bottles), " of beer on the wall,", eoln);
      display(bottles, " ", botf(bottles), " of beeeeeer...", eoln);
      display("You take one down, pass it around!", eoln);
      bottles := bottles - 1;
      if (bottles > 0,
          display(bottles, " ", botf(bottles), " of beer on the wall!", eoln, eoln),
          display("No more bottles of beer on the wall!", eoln, eoln))})}```