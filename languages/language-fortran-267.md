
## Language Fortran ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.93 in 56 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fortran-267.html
---

```      program ninetynine
      implicit none
      integer i

      do i=99,1,-1
        print*, i,' bottles of beer on the wall, ',i,' bottles of beer'
        print*, 'take one down, pass it around, ',i-1,
     .       ' bottles of beer on the wall'
      enddo
      end```