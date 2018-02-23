
## Language Nroff ##
---
- Author: Tim Goodwin
- Date: 04/20/05
- Info: n/a
- Score:  (2.85 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nroff-428.html
---

```nroff is a text formatting macro language common under UNIX

.\" Tim Goodwin <tim@pipex.net>
.nr BO 99
.de BP
.if \\n(BO=0 No more
.if !\\n(BO=0 \\n(BO
.if \\n(BO=1 bottle
.if !\\n(BO=1 bottles
of beer
..
.de WP
.BP
on the wall
..
.de BE
.WP
.br
.BP
.br
Take one down, pass it around
.br
.nr BO \\n(BO-1
.WP
.sp
.if \\n(BO>0 .BE
..
.BE```