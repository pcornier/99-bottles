
## Language jBase PROC ##
---
- Author: dbell
- Date: 01/05/06
- Info: http
- Score:  (2.74 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-jbase-proc-1003.html
---

```PQN
MV %1 " bottles of beer on the wall"
MV %2 " bottles of beer"
MV %3 "Take one down and pass it around,"
MV %4 "99"
10
T %4,%1,", ",%4,%2
T %3
F;%4;C1;-;?%4
T %4,%1
IF %4 < 1 GO 100
GO 10
100
T "NO MORE BEER"
X```