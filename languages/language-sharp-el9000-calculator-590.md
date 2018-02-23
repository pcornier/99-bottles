
## Language Sharp EL9000 Calculator ##
---
- Author: S. Keppel-Jones
- Date: 04/20/05
- Info: n/a
- Score:  (2.44 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sharp-el9000-calculator-590.html
---

```Syntactic conventions:
  ASCII   Sharp
  -----   -----
     \>   begin-loop
     <\   end-loop
     _n   subroutine n
     \\   end-of-program
 *Y->[]   conditionals
 *N->[]   
     __   space character

------- cut ----------
Title: 99 bottles of beer, by S Keppel-Jones
 M:beer=99\>beer>1*Y->[_1]beer>1*N->[_4]_2beer>1*Y->
   [_1]beer>1*N->[_4]_3beer=beer-1__beer>0*N->[_5_2\\]
   beer>1*Y->[_1]beer>1*N->[_4]_2<\
_1:beer=beer,bottles=0,of=0,beer=beer,
_2:on=0,the=0,wall=0,
_3:take=0,one=0,down=0,pass=0,it=0,around=0,
_4:one=0,bottle=0,of=0,beer=beer,
_5:no=0,more=0,bottles=0,of=0,beer=0,
-------- cut ---------```