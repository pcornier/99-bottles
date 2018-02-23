
## Language MALG ##
---
- Author: Michael Anthony Sobczak
- Date: 09/17/05
- Info: n/a
- Score:  (2.83 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-malg-877.html
---

```print "99 Bottles of Beer"
val $x$ = "99"
val $y$ = "0"
label "somewhere"
if *$x$* ">" ?$y$?
   printv $x$
   print "bottles of beer on the wall,"
   printv $x$
   print "bottles of beer."
   dec $x$
   print "Take one down and pass it around,"
   printv $x$
   print "bottle of beer on the wall"
   print " "
   goto "somewhere"
endif
print "No more bottle of beer on the wall, no more bottles of beer."
print "Go to the store and buy some more, 99 bottles of beer on the wall."
exit


MALG is designed to be as fast as assembler. And it is. Simple "Hello World!" program takes about
0.9KB and runs as fast as pure assembler.

Some of options:
Inline assembler with Intel syntax.
Very fast conditionals.
Old good GOTO.
Available versions on BSD and Linux```