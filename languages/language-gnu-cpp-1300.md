
## Language GNU CPP ##
---
- Author: Thomas Liske
- Date: 10/12/06
- Info: n/a
- Score:  (3.00 in 11 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gnu-cpp-1300.html
---

```/*****************************************************************************/
/*   bottles.cpp                                                             */
/*   2006 Thomas Liske <thomas@fiasko.dyndns.org>                            */
/*                                                                           */
/*   Usage: cpp -P bottles.cpp                                               */
/*                                                                           */
/*****************************************************************************/
#define TOD(n) Take one down and pass it around, n bottles of beer on the wall.
#define BOW(n,m) n bottles of beer on the wall, m bottles of beer.
#if __INCLUDE_LEVEL__ < 99
#include __FILE__
#if __INCLUDE_LEVEL__ > 0
TOD(__INCLUDE_LEVEL__)
#else
TOD(no more)
#endif
#endif
#if __INCLUDE_LEVEL__ > 0
BOW(__INCLUDE_LEVEL__,__INCLUDE_LEVEL__)
#else
BOW(No more,no more)
Go to the store and buy some more, 99 bottles of beer on the wall.
#endif```