
## Language Applesoft Basic ##
---
- Author: Marinus Oosters
- Date: 07/21/09
- Info: n/a
- Score:  (2.82 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-applesoft-basic-2148.html
---

```10 A = 99
20 B$ = " BOTTLES"
30 PRINT A;B$;" OF BEER ON THE WALL"
40 PRINT A;B$;" OF BEER"
50 PRINT "TAKE ONE DOWN AND PASS IT AROUND"
55 IF A = 2 THEN POKE 2073, 9
56 IF A <> 2 THEN POKE 2073, 83
60 PRINT A-1;B$;" OF BEER ON THE WALL" : PRINT
70 POKE 2056, PEEK(2056) - 1
80 IF PEEK(2056) = 47 THEN POKE 2055, PEEK(2055) - 1: POKE 2056, 57
90 IF A = 1 THEN POKE 2053, 128: POKE 2054, 58: POKE 2055, 178
100 RUN```