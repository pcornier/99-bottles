
## Language Max/MSP ##
---
- Author: Mike Rugnetta
- Date: 05/18/05
- Info: http
- Score:  (2.94 in 105 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-max-msp-660.html
---

```max v2;
#N vpatcher 180 123 1152 562;
#P number 724 191 35 9 0 98 3 3 0 0 0 221 221 221 222 222 222 0 0 0;
#P newex 724 331 65 196617 prepend beer;
#P message 544 182 150 196617 Take one down \, pass it around;
#P message 751 279 135 196617 bottles of beer on the wall...;
#P message 724 260 38 196617 set 98;
#P newex 724 234 78 196617 prepend set set;
#B color 5;
#N counter 1 0 98;
#X flags 0 0;
#P newobj 724 154 75 196617 counter 1 0 98;
#P newex 724 122 63 196617 metro 1003;
#N counter 1 0 99;
#X flags 0 0;
#P newobj 545 155 80 196617 counter 1 0 99;
#P newex 545 123 63 196617 metro 1002;
#P message 435 263 75 196617 bottles of beer;
#P message 408 244 50 196617 set 0;
#P newex 408 218 78 196617 prepend set set;
#B color 5;
#P number 408 182 35 9 0 0 0 3 0 0 0 221 221 221 222 222 222 0 0 0;
#P newex 408 332 65 196617 prepend beer;
#N counter 1 0 99;
#X flags 0 0;
#P newobj 408 156 80 196617 counter 1 0 99;
#P newex 408 124 63 196617 metro 1001;
#P message 268 264 125 196617 bottles of beer on the wall;
#P newex 242 367 31 196617 print;
#P message 241 245 50 196617 set 99;
#P newex 241 219 78 196617 prepend set set;
#B color 5;
#P number 241 183 35 9 0 0 0 3 0 0 0 221 221 221 222 222 222 0 0 0;
#P button 526 65 15 0;
#P newex 241 333 65 196617 prepend beer;
#P toggle 504 65 15 0;
#P newex 241 125 63 196617 metro 1000;
#P comment 468 66 30 196617 start;
#P comment 547 66 100 196617 reset counters;
#N counter 1 0 99;
#X flags 0 0;
#P newobj 241 157 80 196617 counter 1 0 99;
#P comment 611 261 100 196617 if it gets angry \, click these guys here 
--->;
#P comment 63 96 100 196617 Completed in about 10 minutes \, its a 
little buggy \, but it works for the most part. I doubt i'll be doing 
any revisions \, so lets just call this the final 1.0.;
#P comment 63 197 100 196617 love \, -mike;
#P fasten 7 0 6 0 509 102 246 102;
#P connect 6 0 3 0;
#P connect 3 0 10 0;
#P connect 10 0 11 0;
#P fasten 6 0 12 0 215 142 215 236 215 241 246 241;
#P connect 11 0 12 0;
#P fasten 12 0 8 0 246 296 246 296;
#P fasten 14 0 8 0 273 306 246 306;
#P fasten 30 0 13 0 729 357 247 357;
#P fasten 29 0 13 0 549 282 247 282;
#P fasten 17 0 13 0 413 358 247 358;
#P connect 8 0 13 0;
#P fasten 6 0 14 0 222 142 222 259 222 262 273 262;
#P fasten 9 0 3 4 531 118 314 118;
#P fasten 7 0 15 0 509 102 413 102;
#P connect 15 0 16 0;
#P connect 16 0 18 0;
#P connect 18 0 19 0;
#P fasten 15 0 20 0 382 141 382 235 382 240 413 240;
#P connect 19 0 20 0;
#P fasten 21 0 17 0 440 305 413 305;
#P fasten 20 0 17 0 413 295 413 295;
#P fasten 15 0 21 0 389 141 389 258 389 261 440 261;
#P fasten 9 0 16 4 531 118 481 118;
#P fasten 3 1 7 0 269 179 351 179 351 51 509 51;
#P fasten 25 3 9 0 792 178 820 178 820 46 531 46;
#P connect 23 0 29 0;
#P fasten 7 0 22 0 509 101 550 101;
#P connect 22 0 23 0;
#P fasten 7 0 24 0 509 101 729 101;
#P connect 24 0 25 0;
#P fasten 25 0 31 0 729 181 729 181;
#P fasten 31 0 26 0 729 220 729 220;
#P fasten 24 0 27 0 698 139 698 233 698 254 729 254;
#P connect 26 0 27 0;
#P fasten 28 0 30 0 756 312 729 312;
#P fasten 27 0 30 0 729 303 729 303;
#P fasten 24 0 28 0 705 139 705 256 705 254 756 254;
#P fasten 9 0 25 4 531 117 793 117;
#P pop;```