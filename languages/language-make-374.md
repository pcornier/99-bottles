
## Language Make ##
---
- Author: Andrew Dunstan
- Date: 04/20/05
- Info: n/a
- Score:  (2.88 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-make-374.html
---

```make is technically a tool for building applications, but it's 
amazing what a pre-processor and recursion can do for you.

#
#
# quick effort at 99 bottles program using gnu make
#
# the file must be called makefile.bottles
#
# Author: Andrew Dunstan (andrew.dunstan@its.maynick.com.au)
#
 
default:
        $(MAKE) -f makefile.bottles BOTTLES=99 bottles
 
.SILENT:
 
bottles:
        echo $(BOTTLES) bottles of beer on the wall
        echo $(BOTTLES) of beer
        echo Take one down and pass it around
ifeq ($(BOTTLES),0)
        echo No bottles of beer on the wall
else
        echo `expr $(BOTTLES) - 1` bottles of beer on the wall
        echo
        $(MAKE) -f makefile.bottles BOTTLES=`expr $(BOTTLES) - 1`  bottles
endif```