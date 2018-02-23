
## Language VTL-2 ##
---
- Author: barrym
- Date: 01/15/12
- Info: http
- Score:  (3.00 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vtl-2-2817.html
---

```*=1024) Initialize top-of-memory pointer
&=264) Initialize Altair 680b program space
1 ) Beer Song for VTL-2 (a Very Tiny Language)
2 )  by barrym  2011-01-13
3 ) VTL-2 is an interpreter designed in 1977 by
4 )  Frank McCoy for the 6800 and 8080 machines
5 )  of that era.  The complete 6800 version of
6 )  his interpreter is ROMable, IN 768 BYTES!!
100 B=99)  Initial beer count
105 W=0)   Phrase type
110 ?="")  Blank line between verses
115 #=155
120 #=B<1*140
125 B=B-1) Move on to the next beer
130 ?="Take one down and pass it around";
135 #=150
140 B=99) Final beer count
145 ?="Go to the store and buy some more";
150 ?=", ";
155 #=B=0*170
160 ?=B) Print beer count or N/no more
165 #=180
170 $=W>1*32+78) Print an "N" or "n"
175 ?="o more";
180 ?=" bottle";
185 #=B=1*195) Skip the "s" if not plural
190 ?="s";
195 ?=" of beer";
200 #=W=1*210
205 ?=" on the wall";
210 W=W+1) Get ready for the next phrase
215 #=W=1*150
220 ?="."
225 #=W<3*120)  Next phrase
230 #=B<99*105) Next verse
#=1) Execute the program```