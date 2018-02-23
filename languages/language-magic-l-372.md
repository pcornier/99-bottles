
## Language MAGIC/L ##
---
- Author: Eric Korpela
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 141 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-magic-l-372.html
---

```A procedural language written in Forth.  Originally ran on 
Z80's under CP/M and later available for IBM-PCs and Sun 3s.

; MAGIC/L version of the beer bottle song 
; (c) 1996 Eric Korpela (korpela@ssl.berkeley.edu)
; WARNING! All the spaces are necessary!
;
; Add the help entry....
.subject bottles
Usage:  bottles ( number )
.
; and here's the procedure
define bottles 
  integer number
  local integer current
;
  current := number
  while ( current > 1 )
    print current , " bottles of beer on the wall."
    print current , " bottles of beer."
    print "You take one down and pass it around."
    current := current - 1
    print current , " bottles of beer on the wall."
    print
  repeat
;
  print 1 , " bottle of beer on the wall."
  print 1 , " bottle of beer."
  print "You take one down and pass it around."
  print "No bottles of beer on the wall.
end```