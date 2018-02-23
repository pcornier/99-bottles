
## Language GTML ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: http
- Score:  (2.98 in 108 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gtml-298.html
---

```#if a != a
  GTML version of 99 bottles of beer
  Laurent Vogel, http://lvogel.free.fr
  (GTML info  http://www.lifl.fr/~beaufils/gtml/)

execute as: cp THIS_FILE foo.gtm; gtml -Dcr='
' foo.gtm ; cat foo.html
#endif
#define p(a,s,d) a bottles of beerd<<cr>>
#define w on the wall
#define t take one down, pass it around,<<cr>>
#define u(j,s) <<p(j,s," <<w>>.")>><<cr>>\
<<p(j,s," <<w>>,")>><<p(j,s,.)>><<t>>
#define b(a) <<u(a8,s)>><<u(a7,s)>><<u(a6,s)>><<u(a5,s)>><<u(a4,s)>>\
<<u(a3,s)>><<u(a2,s)>>
#define c(a) <<u(a9,s)>><<b(a)>><<u(a1,s)>><<u(a0,s)>>
<<p(99,s," <<w>>,")>><<p(99,s,.)>><<t>><<b(9)>><<u(91,s)>><<u(90,s)>>\
<<c(8)>><<c(7)>><<c(6)>><<c(5)>><<c(4)>><<c(3)>><<c(2)>><<c(1)>>\
<<b("")>><<u(1,"")>><<p(No,," <<w>>.")>>```