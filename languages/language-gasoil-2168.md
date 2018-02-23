
## Language GASOIL ##
---
- Author: Morex
- Date: 08/22/09
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gasoil-2168.html
---

```main
(99; 0; STO; ""; ("e1"; CALL; 0;RCL; 1; -; 0; STO; "e2"; CALL); (0; RCL; 1;<=);UNTIL; "e1"; CALL;
"n"; &; "f2"; CALL; &; "f1"; CALL;
 &; "."; &; 10; CHR; &; "N"; &; "f2"; CALL; &; "f1"; CALL; &; ", n";&;"f2";CALL;&;". Go to the store
and buy some more, "; &; 99; 0;
 STO; "bo"; CALL; &; "f1"; CALL; &; "."; &)
e1
("bo"; CALL; &; "f1"; CALL; &;", "; &; "bo"; CALL; &; ". Take one down and pass it around, ";&)
e2
("bo"; CALL ;&;  "f1"; CALL; &; "."; & ;10;CHR;&)
bo
(0; RCL; " bottle"; &; 0; RCL; 1; =; (""); ("s"); ITE; &; " of beer"; &)
f1
(" on the wall")
f2
("o more bottles of beer")```