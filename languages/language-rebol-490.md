
## Language REBOL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (4.34 in 305 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rebol-490.html
---

```REBOL [
    Title:   "99 Bottles of Beer Song"
    Date:    26-Apr-1998
    File:    %beersong.r
    Home:    http://www.reboltech.com/library/script-script.html
    Purpose: "The correct song. A bit more advanced."
    Category: [misc script 3]
    Note: {
        REBOL is pronounced like "rebel", and stands for
        Relative Expression-Based Object Language
    }
]

sing: func [count rest] [
    prin pick ["99 bottles " "no bottles " "1 bottle " [count "bottles "]]
        min 4 count + 2
    print rest
]

for bottles 99 0 -1 [
    sing bottles "of beer on the wall,"
    sing bottles "of beer."
    print pick [
        "Take one down, pass it around,"
        "Go to the store, buy some more,"
    ] bottles > 0
    sing bottles - 1 "of beer on the wall."
    print ""
]```