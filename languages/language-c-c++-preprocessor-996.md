
## Language C/C++ Preprocessor ##
---
- Author: Vesa Karvonen
- Date: 12/30/05
- Info: http
- Score:  (2.77 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c-c++-preprocessor-996.html
---

```/*
 * (C) Copyright Vesa Karvonen 2004.
 */

#include "order/interpreter.h"

ORDER_PP
(8let((8B, 8fn(8N,
               8cond((8greater(8N, 1),
                      8separate(8N, 8quote(bottles)))
                     (8equal(8N, 1),
                      8quote(1 bottle))
                     (8else,
                      8quote(no more bottles))))),
      8for_each_in_range
      (8fn(8N,
           8print(8ap(8B, 8N) (of beer on the wall,) 8space
                  8ap(8B, 8N) (of beer,) 8space
                  (take one down, pass it around,) 8space
                  8ap(8B, 8dec(8N)) (of beer on the wall.))),
       100, 1)))```