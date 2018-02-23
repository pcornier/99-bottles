
## Language Pure Data ##
---
- Author: zzo38
- Date: 04/06/07
- Info: http
- Score:  (2.33 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pure-data-1439.html
---

```This is a program in Pure Data. See a picture of this diagram in 
http://zzo38computer.cjb.net/PureData/beer_program.png
Or copy the text below to a file called beer_program.pd

#N canvas 14 309 743 575 12;
#X msg 239 28 bang;
#X text 277 29 <-- Click here to start;
#X floatatom 283 183 5 0 0 0 - - -;
#X msg 281 107 99;
#X obj 367 535 print;
#X obj 339 282 - 1;
#X msg 461 370 \$1 bottles of beer on the wall \, \$1 bottles of beer
\, Take 1 down and pass it around;
#X obj 42 361 trigger float float;
#X msg 244 413 \$1 bottles of beer \, ---;
#X obj 286 314 moses 1;
#X msg 14 491 No more bottles of beer on the wall;
#X obj 377 229 trigger float float;
#X connect 0 0 3 0;
#X connect 2 0 11 0;
#X connect 3 0 2 0;
#X connect 5 0 9 0;
#X connect 6 0 4 0;
#X connect 7 0 2 0;
#X connect 7 1 8 0;
#X connect 8 0 4 0;
#X connect 9 0 10 0;
#X connect 9 1 7 0;
#X connect 10 0 4 0;
#X connect 11 0 5 0;
#X connect 11 1 6 0;```