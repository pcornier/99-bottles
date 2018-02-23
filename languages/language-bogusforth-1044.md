
## Language BogusForth ##
---
- Author: Rune Berge
- Date: 02/07/06
- Info: http
- Score:  (2.75 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bogusforth-1044.html
---

```99b!
def botl " bottle"i b:1-["s"i]? " of beer"i
def line1 b:[b:i]["No"i]? botl " on the wall."i10'
def line2 b:i botl "."i10'
def line3 "Take one down, and pass it around."i 10'
[b:][line1 line2 line3 b:1-b! line1 10']#
0q```