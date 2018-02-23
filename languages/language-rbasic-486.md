
## Language RBASIC ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.38 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-rbasic-486.html
---

```# RBASIC version of 99 Bottles of beer (Bottles.rbp)
# See http://www.rbasic.com/
# Philipp Winterberg, http://www.winterbergs.de
     
a$=" bottle(s) of beer":c$=" on the wall":d$=chr$(13)+chr$(10)
for b = 99 to 1 step -1 
  disp str$(b)+a$+c$+","+d$+str$(b)+a$+"."
  print "Take one down, pass it around, "
  print str$(b-1)+a$+c$+"."+d$+d$
next b
rpower=0:end```