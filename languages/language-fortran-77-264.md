
## Language FORTRAN 77 ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.40 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fortran-77-264.html
---

```99 Bottles of beer in FORTRAN 77
 
     real count 
       count = 99 
       do while (count .gt. 0) 
       write (*,*) count,"bottles of beer on the wall," 
       write (*,*) count,"bottles of beer," 
       write (*,*) "Take one down, pass it around,"
       count = count - 1
       write (*,*) count,"bottles of beer on the wall"
       write (*,*) " "
       end do
       
       stop
       end```