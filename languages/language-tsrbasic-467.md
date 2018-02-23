
## Language TsrBasic ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.00 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tsrbasic-467.html
---

```10 ' TsrBasic version of 99 Bottles of beer (Bottles.bas)
15 ' See http://www.programmersheaven.com/zone6/cat700/16399.htm
20 ' Philipp Winterberg, http://www.winterbergs.de
30
40 a = " bottle(s) of beer" : c = " on the wall": init
42 csroff : foreground 0 : background 7 : blank : border
50 for b = 99 to 1 step -1
60   print b; a; c; "," : print b; a; "."
70   print "Take one down, pass it around,"
80   print (b-1); a; c; "." : print " "
90 next b
99 csron : end```