
## Language WebBasic ##
---
- Author: Michael Ranks
- Date: 04/13/08
- Info: http
- Score:  (2.80 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-webbasic-1761.html
---

```REM Display 99 bottles of beer song
REM Written by Michael Ranks

REM WebBasic is a BASIC lanquage interpreter that makes it extremely easy 
REM  to do server-side web programming.
REM  Yo get WebBasic - http://www.ddginc-usa.com/webbas.htm

print "Content-type: text/html"
print

beer = 99
DO UNTIL beer < 2
  print beer," bottles of beer on the wall, ",beer," bottles of beer.<br>"
  beer = beer - 1
  if beer > 1 then
    print "Take one down and pass it around, ",beer," bottles of beer on the wall.<p>" 
  else
    print "Take one down and pass it around, ",beer," bottle of beer on the wall.<p>" 
  endif
LOOP

print "1 bottle of beer on the wall, 1 bottle of beer.<br>"
print "Take one down and pass it around, no more bottles of beer on the wall.<p>"

print "No more bottles of beer on the wall, no more bottles of beer.<br>"
print "Go to the store and buy some more, 99 bottles of beer on the wall."

end```