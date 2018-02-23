
## Language NCL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.92 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ncl-421.html
---

```(Network Control Language, in an OS/390 Subsystem called Solve:Operations
for OS/390 by Sterling Software, now Computer Associates, Link for more
Infos about this Product:
http://www3.ca.com/Solutions/ProductFamily.asp?ID=1643)

-* NCLversion of 99 bottles of beer
&CNT = 1
&DOWHILE 0&CNT > 01
    &WRITE LOG=YES &CNT BOTTLE(S) OF BEER ON THE WALL, &CNT BOTTLE(S) OF
BEER
    &WRITE LOG=YES TAKE ONE DOWN AND PASS IT AROUND
    &CNT1 = &CNT - 1
    &WRITE LOG=YES &CNT1 BOTTLE(S) OF BEER ON THE WALL
&DOEND```