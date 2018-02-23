
## Language GNU Assembler ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: n/a
- Score:  (2.84 in 116 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gnu-assembler-285.html
---

```/*
 * GNU Assembler version of 99 bottles of beer
 * (architecture-independent as it uses assembler directives only)
 * Laurent Vogel  http://lvogel.free.fr
 *
 * execute with: gcc -c -o /dev/null -x assembler THIS_FILE
 */

.macro p n,s,w
.print "\n bottle\s of beer\w"
.endm

.macro ones a,b
.ifge \a\b-2
.ifnc \a\b,99
p \a\b,s," on the wall."
.print ""
.endif
p \a\b,s," on the wall,"
p \a\b,s,.
.else
p \a\b,," on the wall."
.print ""
p \a\b,," on the wall,"
p \a\b,,.
.endif
.print "Take one down, pass it around,"
.endm

.macro tens n
ones \n,9
ones \n,8
ones \n,7
ones \n,6
ones \n,5
ones \n,4
ones \n,3
ones \n,2
ones \n,1
.ifnc \n,
ones \n,0
.endif
.endm

tens 9
tens 8
tens 7
tens 6
tens 5
tens 4
tens 3
tens 2
tens 1
tens ""

p No,," on the wall."```