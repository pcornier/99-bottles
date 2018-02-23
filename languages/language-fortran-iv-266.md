
## Language Fortran IV ##
---
- Author: Allen Mcintosh
- Date: 04/20/05
- Info: n/a
- Score:  (2.36 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fortran-iv-266.html
---

```C Allen Mcintosh
C mcintosh@bellcore.com 
      integer bottls
      do 50 i = 1, 99
         bottls = 100 - i
         print 10, bottls
10       format(1x, i2, 31h bottle(s) of beer on the wall.)
         print 20, bottls
20       format(1x, i2, 19h bottle(s) of beer.)
         print 30
30       format(34h Take one down and pass it around,)
         bottls = bottls - 1
         print 10, bottls
         print 40
40       format(1x)
50    continue
      stop
      end```