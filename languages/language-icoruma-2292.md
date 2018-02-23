
## Language Icoruma ##
---
- Author: Anonymous
- Date: 01/09/10
- Info: n/a
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-icoruma-2292.html
---

```== "99 bottles of beer on the wall" in Icoruma

== Icoruma is a markup language for writing RPG rules
== But it can still be used for other programming too
== It isn't very suitable for general programming, but it can

== This program does not show most of the features:
== - Include files (which can even use wildcards)
== - Formatting codes (bold, cross-reference, headings, etc)
== - Tables
== - Custom fields
== - Regular expressions
== - Table of contents and index generation
== - and more...

==Define y
=.=Pack
=.=Copy =Value z
\?\zbottles of beer on the wall\n
\?\zbottles of beer\n
Take 1 down and pass it around\n
=.=Calc @z 1 - !z @z !=Value
=.=Verify
\?\zbottles of beer on the wall\n
=.=Dump
\?
==End

==Calc 99 Range !x 99 !z
==Iterate x y
No more bottles of beer on the wall.
==Dump
\?```