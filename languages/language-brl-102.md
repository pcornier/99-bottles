
## Language BRL ##
---
- Author: Bruce Lewis
- Date: 04/20/05
- Info: http
- Score:  (2.83 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-brl-102.html
---

```<!--
 BRL version of 99 bottles of beer
 http://brl.codesimply.net/ 
 Bruce Lewis doubts he could use correct grammar after 98 beers.
 -->

[(let drink ((bottles 99))
   (brl-when (positive? bottles)
     ]<p>[bottles] bottles of beer on the wall;
      [bottles] bottles of beer!<br>
      Take one down, pass it around;
      [(- bottles 1)] bottles of beer on the wall!</p>
[    (drink (- bottles 1))))```