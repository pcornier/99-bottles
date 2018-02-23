
## Language Lakota ##
---
- Author: Beirne "Bern" Konarski
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lakota-351.html
---

```Lakota is a shell language used mainly in the TRUEchange 
configuration management package from True Software.  
Code courtesy Beirne "Bern" Konarski.

#! /usr/local/lsh

set-string s s
set-string item one
do i 99 1 -1
    print (i) bottle(s) of beer on the wall,
    print (i) bottle(s) of beer.
    print You take (item) down, pass it around,
    set-string j {- (i) 1}
    if {=? (j) 1}
        set-string s
        set-string item it
    if {=? (i) 1}
        print No more bottles of beer on the wall.(newline)
    else
        print (j) bottle(s) of beer on the wall.(newline)
    cycle```