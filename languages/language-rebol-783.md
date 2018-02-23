
## Language REBOL ##
---
- Author: Gregg Irwin
- Date: 07/06/05
- Info: http
- Score:  (3.00 in 41 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rebol-783.html
---

```sing: func [input /local n stmt num chop phrase sing-verse] [
    parse input [set num integer! copy stmt to end]
    n: num
    chop: func [word] [head remove back tail form word]
    phrase: func [val] [
        reform switch/default val [
            0 [["No more" stmt]]
            1 [[val head change copy stmt chop stmt/1]]
        ] [[val stmt]]
    ]
    sing-verse: func [val] [
        print [phrase n "on the wall," join phrase n "."]
        print either n > 0 [
            ["Take one down and pass it around," phrase n - 1 "on the wall." newline]
        ][
            rejoin ["Go to the store and buy some more..." phrase num "."]
        ]
    ]
    while [n >= 0] [sing-verse n  n: n - 1]
]
sing [99 bottles of beer]
sing [7 carafes of wine]```