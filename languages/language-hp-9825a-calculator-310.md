
## Language HP 9825A Calculator ##
---
- Author: Courtesy Tom Stepleton
- Date: 04/20/05
- Info: n/a
- Score:  (2.80 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hp-9825a-calculator-310.html
---

```Courtesy Tom Stepleton.  Replace "prt" with "dsp" to output song to the display instead of the
printer.

0: for I=100 to 1 by -1
1: dim A$[5];str(I)->A$
2: prt A$&" bottles of beer on the wall"
3: prt A$&" bottles of beer"
4: prt "Take one down!"
5: prt "Pass it around!"
6: I-1->J
7: if J=0;prt "No more bottles of beer on the wall!";end
8: prt str(J)&" bottles of beer on the wall!"
9: next I```