
## Language C/C++ Preprocessor ##
---
- Author: Gerry JJ
- Date: 12/30/05
- Info: n/a
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c-c++-preprocessor-997.html
---

```/*
**  99 bottles of beer for the C/C++ preprocessor, by Gerry JJ.
**
**  Tested with GNU CPP.  It should work with others as well,
**  provided the include nesting limit is high enough.
**
**  To use, run:  cpp -P 99bottlesofbeer.h
**  (The -P switch to CPP turns off line marker comments).
*/

#ifndef BOTTLES_OF_BEER_SONG
#define BOTTLES_OF_BEER_SONG
#define DIG1         9
#define DIG2         9
#define CAT2(a,b)    a ## b
#define CAT(a,b)     CAT2(a,b)
#define NUM          CAT(DIG1,DIG2)
#define BOTTLES      bottles
#define BEER(n)      n BOTTLES of beer
#define ONTHEWALL(n) BEER(n) on the wall
#define TAKEDOWN     Take one down and pass it around,
#endif

| ONTHEWALL(NUM),
| BEER(NUM)!
| TAKEDOWN

#if DIG2 == 9
#  undef  DIG2
#  define DIG2 8
#elif DIG2 == 8
#  undef  DIG2
#  define DIG2 7
#elif DIG2 == 7
#  undef  DIG2
#  define DIG2 6
#elif DIG2 == 6
#  undef  DIG2
#  define DIG2 5
#elif DIG2 == 5
#  undef  DIG2
#  define DIG2 4
#elif DIG2 == 4
#  undef  DIG2
#  define DIG2 3
#elif DIG2 == 3
#  undef  DIG2
#  define DIG2 2
#elif DIG2 == 2
#  undef  DIG2
#  define DIG2 1
#  if CAT(DIG1,DIG2) == DIG2
#    undef  BOTTLES
#    define BOTTLES bottle
#  endif
#elif DIG2 == 1
#  undef  DIG2
#  define DIG2 0
#  undef  BOTTLES
#  define BOTTLES bottles
#elif   DIG2 == 0
#  undef  DIG2
#  define DIG2 9
#  if DIG1 == 9
#    undef  DIG1
#    define DIG1 8
#  elif DIG1 == 8
#    undef  DIG1
#    define DIG1 7
#  elif DIG1 == 7
#    undef  DIG1
#    define DIG1 6
#  elif DIG1 == 6
#    undef  DIG1
#    define DIG1 5
#  elif DIG1 == 5
#    undef  DIG1
#    define DIG1 4
#  elif DIG1 == 4
#    undef  DIG1
#    define DIG1 3
#  elif DIG1 == 3
#    undef  DIG1
#    define DIG1 2
#  elif DIG1 == 2
#    undef  DIG1
#    define DIG1 1
#  elif DIG1 == 1
#    undef  DIG1
#    define DIG1
#  else
#    undef  DIG2
#    define DIG2 0
#  endif
#endif

#if NUM > 0
| ONTHEWALL(NUM)!
| 
#include "99bottlesofbeer.h"
#else
| ONTHEWALL(No more)!
#endif```