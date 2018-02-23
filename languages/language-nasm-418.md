
## Language NASM ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: n/a
- Score:  (2.82 in 17 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-nasm-418.html
---

```%if 0
  nasm preprocessor version of 99 bottles of beer
  Laurent Vogel,  http://lvogel.free.fr
  run as:  nasm -e THIS_FILE
%endif
%define c ,
%define id(a) a
%define p(c) i id(bottle)s of id(beer)c
%assign i 99
%define s s
%rep i i
p(id() on the id(wall)c)
p(.)
take one down, pass it around,
%assign i i-1
%if i <= 1
%define s
%if i == 0
%define i No
%endif
%endif
p(id() on the wall.)

%endrep```