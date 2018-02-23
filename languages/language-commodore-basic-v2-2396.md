
## Language Commodore Basic V2 ##
---
- Author: barrym
- Date: 05/19/10
- Info: n/a
- Score:  (3.00 in 58 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-commodore-basic-v2-2396.html
---

```1 rem beer song for 8-bit commodore
2 rem basic by barrym 2010-04-06
3 rem thanks to winvice-2.1!!!!!
10 rem complete and correct lyrics are
11 rem printed, but in upper-case only
12 rem to maintain compatibility with
13 rem the very old machines (i know,
14 rem this looks like lower case, but
15 rem it's like this to make copying
16 rem and pasting easier in petascii)
17 rem this version should run on any
18 rem pet, vic-20, c-64, running v2.
19 rem what makes this version special
20 rem is its ability to print a nice
21 rem looking song on a narrow screen
22 rem (without broken words or unin-
23 rem tended blank lines) regardless
24 rem of screen width. this feature
25 rem is critical on the vic-20 with
26 rem a 22 column display (dang!)
27 rem-------------------------------
28 rem b = current number of bottles
29 rem d = width of display in columns
30 rem w = sub-phrase format type:
31 rem     0 : (b) bott ... beer.
32 rem     1 : (b) bott ... the wall
33 rem     2 : (b) bott ... the wall.
34 rem     3 : like 2, but fall thru
35 rem a$ = current sentence
36 rem q = current char pointer
37 rem b$ = current char
38 rem-------------------------------
99 d=peek(213)+1:b=99
100 print:a$="":w=1:gosub200:a$=a$+", "
110 w=0:gosub200:ifb=0then140
120 a$="take one down and pass it around, "
130 b=b-1:w=2:gosub200:goto100
140 a$="go to the store and buy some more, "
150 b=99:w=3
200 ifbthena$=a$+mid$(str$(b),2):goto230
220 a$=a$+"no more"
230 a$=a$+" bottle":ifb<>1thena$=a$+"s"
240 a$=a$+" of beer"
250 ifw>0thena$=a$+" on the wall"
260 ifw<>1thena$=a$+"."
270 ifw=1thenreturn
300 q=1:ifa$=""then340
310 q=q+1:b$=mid$(a$,q,1):ifb$<>" "andb$<>""then310
320 ifd-q<pos(0)thenprint
330 printleft$(a$,q-1);:a$=mid$(a$,q):goto300
340 ifpos(0)thenprint
350 ifw<3thenreturn```