
## Language SPITBOL ##
---
- Author: D.H.
- Date: 04/20/05
- Info: n/a
- Score:  (2.86 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-spitbol-606.html
---

```* MaxSPITBOL version (SPITBOL implementation on
* the Macintosh from Catspaw, Inc. (Salida, CO).
* NOTE:  I have no connection w/them other than being
* a long-time satisfied user of their product
* D.H.  <hedges@pilot.njin.net>

     p0 = "NO MORE" ;  p1 = " BOTTLE" ; p2 = "S" ; p3 = " OF BEER"
     p4 = " ON THE WALL" ; p5 = "TAKE ONE DOWN, PASS IT AROUND"

     b = 99
     p6 = ((NE(b,0) b, p0) p1 (NE(b,1) p2,) p3)
A1   OUTPUT = p6 p4 ; OUTPUT = p6 ; OUTPUT = p5
     b = b - 1
     p6 = ((NE(b,0) b, p0) p1 (NE(b,1) p2,) p3)
     OUTPUT = p6 p4 ; OUTPUT = ; NE(b,0)                   :S(A1)
END```