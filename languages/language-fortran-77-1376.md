
## Language FORTRAN 77 ##
---
- Author: Robin Haberkorn
- Date: 01/16/07
- Info: n/a
- Score:  (2.87 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-fortran-77-1376.html
---

```C This one is almost an obfu, but valid FORTRAN 77
C Demonstrated features: character format identifiers, arrays as
C internal files, implied-DO-loops, importance of the blank character,
C rules for continuation lines, substrings, implicit type declaration...
565760C H   ARA      C T     ERM   S G ( 5 ) *   1        3            7
324650WRITE(MSG,'(93H(A,/,A,A,/,A,A,A,TL37,2HA ,/,A,TL62,2HA ,34X,2HA ,2
     34X,33HGo to the store and buy some more,A),/,136H(I2,'' bottles of
     F beer on the wall, '',I2,'' bottles of beer.'',/,''Take one down a
     Rnd pass it around, '',I2,'' bottles of beer on the wall.'',/) ) ')
347650WRITE(MSG,MSG(1))MSG(2),MSG(2)(:110),MSG(2)(112:),MSG(1)(:12),MSG(
     11)(1 4: 4 8),M SG(1)(5 0:1 3 6),M SG( 1)(:6 3),M S G(1)(9 6:1 3 6)
650860P   R    INT    MS   G ( 1 ) , (   K,  K , K -1, K =9   9, 3, - 1)
323450P  RI  N      T   M    S   G    (  2  )     ,    2   ,   2   ,   1
      PR I N   TM         S G   (         3)     ,  1 ,   1 ,  'no more'
023000P R I   NT     M  S  G     (4    ) , 'No more'  , 'no more', 9   9
543990E                               N                                D```