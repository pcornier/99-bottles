
## Language Version ##
---
- Author: Marinus Oosters
- Date: 12/25/10
- Info: http
- Score:  (3.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-version-2569.html
---

```X: BOTTLES = "99"
X: IGN     = "X"
X: IGNORE  = IGN
0: OUTPUT  = BOTTLES
0: OUTPUT  = " bottle"
1: OUTPUT  = "s"
0: OUTPUT  = " of beer on the wall,"
0: OUTPUT  = EOL
0: OUTPUT  = BOTTLES
0: OUTPUT  = " bottle"
1: OUTPUT  = "s"
0: OUTPUT  = " of beer,"
0: OUTPUT  = EOL
0: OUTPUT  = "Take one down and pass it around,"
0: OUTPUT  = EOL
0: BOTTLES = PRED BOTTLES
0: IGN     = IGN
0: CAT     = "|"
0: CAT     = BOTTLES
0: IGN2    = IGN
1: CAT     = "|L"
0: IGNORE  = IGN2
0: OUTPUT  = BOTTLES
0: OUTPUT  = " bottle"
1: OUTPUT  = "s"
0: OUTPUT  = " of beer on the wall."
0: OUTPUT  = EOL
0: OUTPUT  = EOL
L: OUTPUT  = "No more bottles of beer on the wall."
L: OUTPUT  = EOL
L: OUTPUT  = EOL
L: OUTPUT  = "No more bottles of beer on the wall,"
L: OUTPUT  = EOL
L: OUTPUT  = "No more bottles of beer,"
L: OUTPUT  = EOL
L: OUTPUT  = "Go to the store and buy some more,"
L: OUTPUT  = EOL
L: OUTPUT  = "99 bottles of beer on the wall."
L: OUTPUT  = EOL
L: OUTPUT  = EOL
L: IGNORE  = "*"```