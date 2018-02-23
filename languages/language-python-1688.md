
## Language Python ##
---
- Author: Michael Galpin
- Date: 02/08/08
- Info: http
- Score:  (2.68 in 25 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-python-1688.html
---

```#! /usr/bin/env python

class BottleException(Exception):
    def __init__(self, i, c):
        self.cause = c
        self.cnt = i
        try:
            a = 1/(99-i)
            raise BottleException(i+1, self)
        except ZeroDivisionError:
            pass

    def getCause(self):
        return self.cause

    def printStackTrace(self):
        print("%d Bottle(s) of beer on the wall, %d Bottle(s) of beer" % (self.cnt, self.cnt))
        print("Take one down and pass it around,")
        print("%d Bottle(s) of beer on the wall" % (self.cnt - 1))
        try:
            self.getCause().printStackTrace()
        except AttributeError:
            pass

try:
    raise BottleException(1, None)
except Exception, e:
    e.printStackTrace()```