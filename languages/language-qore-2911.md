
## Language Qore ##
---
- Author: Brett Estrade
- Date: 07/11/12
- Info: http
- Score:  (1.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-qore-2911.html
---

```#!/usr/bin/env qore

%require-our
%enable-all-warnings

for (my $i = 99; $i > 0; $i--) {
    printf("%d bottles of beer on the wall\n", $i);
    printf("%d bottles of beer\n", $i);
    printf("take one down, pass it around\n");
    printf("%d bottles of beer on the wall\n", $i);
}```