
## Language quantum ##
---
- Author: Duane Hartse
- Date: 10/09/06
- Info: http
- Score:  (2.93 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-quantum-1296.html
---

```C quantum is a language for tabulating survey data
C
C The edit section is normally used for simple data manipulation, validation,
C and cleaning, but here I use it to write the lyrics to "99 Bottles" to a
C file named 'lyrics'.  The more typical data tabulating statements of the
C language are of no use to us here, so this really doesn't reflect what most
C of a quantum tab file actually looks like in practice.  It's not pretty,
C but it works.
C
C I needed a dummy data file to "tabulate" to get this to work, and I found
C that a text file with a single character was sufficient.  So I invoked the
C code using this command line on Unix ('99bottles' is the name of this file):
C
C echo 0 > data; quantum 99bottles data

ed

filedef lyrics report
int i 1
int b 1

C for b=99 to 0 step -1
do 10 i=0,99
    set b=99-i

C   first line
    if (b.gt.1) report lyrics b, $ bottles$
    if (b.eq.1) report lyrics $1 bottle$
    if (b.eq.0) report lyrics $No more bottles$
    report lyrics $ of beer on the wall, $
    if (b.gt.1) report lyrics b, $ bottles$
    if (b.eq.1) report lyrics $1 bottle$
    if (b.eq.0) report lyrics $no more bottles$
    reportn lyrics $ of beer.$

C   second line
    if (b.ne.0)
+       report lyrics $Take one down and pass it around, $;  set b=b-1
+   else
+       report lyrics $Go to the store and buy some more, $; set b=99
    if (b.gt.1) report lyrics b, $ bottles$
    if (b.eq.1) report lyrics $1 bottle$
    if (b.eq.0) report lyrics $no more bottles$
    reportn lyrics $ of beer on the wall.$

C   if another verse, print a blank line
    if (b.ne.99) report lyrics $\n$

10 continue

stop

end```