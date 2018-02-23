
## Language RC Shell ##
---
- Author: Tom Culliton
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rc-shell-487.html
---

```rc shell script language.

#!/usr/local/bin/rc
# rc shell version of 99 bottles of beer
# by Tom Culliton (culliton@clark.net)

count = (99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 83 82 81 80 79 78
         77 76 75 74 73 72 71 70 69 68 67 66 65 64 63 62 61 60 59 58 57 56
         55 54 53 52 51 50 49 48 47 46 45 44 43 42 41 40 39 38 37 36 35 34
         33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12
         11 10 9 8 7 6 5 4 3 2 1)
bottles = bottles; one = one
for (i in $count) {
        if (~ $i 1) {bottles = bottle; one = it}
        if (! ~ $i 99) {
                echo $i $bottles 'of beer on the wall.'
                echo
        }
        echo $i $bottles 'of beer on the wall,'
        echo $i $bottles 'of beer,'
        echo 'take' $one 'down and pass it around,'
}
echo 'no more bottles of beer on the wall!'```