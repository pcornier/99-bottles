
## Language troff ##
---
- Author: Jaap Akkerhuis
- Date: 04/20/05
- Info: n/a
- Score:  (2.97 in 31 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-troff-462.html
---

```.\"
.\" 99 bottles of beer.
.\" [ntg]roff macro
.\" Jaap Akkerhuis
.\"
.if n .pl 1
.nr b 99 1
.nf
.ds b "of beer
.ds s, " \*b on the wall,
.ds t take one down, pass it around,
.ds s. " \*b on the wall.
.ds B " bottles
.de BB
.if \\nb=1 .rn BB xx
\\nb\\*B\\*(s, \\nb\\*B \\*b,
\\*t
.if \\n-b=1 .ds B " bottle
.if \\nb \\nb\\*B\\*(s.
.BB
..
.BB
no more\*Bs\*(s.```