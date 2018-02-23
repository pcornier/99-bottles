
## Language BasicBasic ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.29 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-basicbasic-82.html
---

```rem BasicBasic version of 99 Bottles of beer (Bottles.bas)
rem See http://www.programmersheaven.com/search/Download.asp?FileID=16394
rem Philipp Winterberg, http://www.winterbergs.de

a$=" bottle(s) of beer" : c$=" on the wall" 
for b = 99 to 1 step -1
  print b; a$; c$; ","
  print b; a$; "."
  print "Take one down, pass it around,"
  print b-1; a$; c$; "."
  print
next b      
if ostype = 1 then
  do while inkey$=""
  loop
end if
end```