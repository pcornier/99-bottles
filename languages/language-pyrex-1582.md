
## Language Pyrex ##
---
- Author: Ilan Schnell
- Date: 08/21/07
- Info: http
- Score:  (4.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-pyrex-1582.html
---

```# beer.pyx
#
#   Author: Ilan Schnell
#
#   Invocation:
#   $ pyrexc beer.pyx
#   $ gcc -c -fPIC -I/usr/local/include/python2.5 beer.c
#   $ gcc -shared beer.o -o beer.so
#   $ python -c "import beer"

cdef bob(int n):
    cdef char *s
    s = "bottles"
    if n:
        if n==1: s = "bottle"
        return "%s %s of beer" % (n, s)
    else:
        return "no more %s of beer" % s
   
for n in xrange(99, 0, -1):
    print bob(n)+" on the wall, "+bob(n)+"."
    print "Take one down and pass it around, "+bob(n-1)+" on the wall."
    print

print "No more bottles of beer on the wall, "+bob(0)+"."
print "Go to the store and buy some more, "+bob(99)+" on the wall."```