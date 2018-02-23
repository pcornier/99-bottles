
## Language Z-Shell ##
---
- Author: Chris Johnson
- Date: 02/15/06
- Info: http
- Score:  (3.02 in 134 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-z-shell-1055.html
---

```!/usr/bin/env zsh
alias print_strophe='echo "$beer bottle$s of beer on the wall,"
        echo "$beer bottle$s of beer,"
        echo "take one down, pass it around,"
        let beer="$beer - 1"
        if [ "$beer" -eq "1" ]
        then
                unset s
        fi
        if [ "$beer" -eq "0" ]
        then
                beer="No"
                s="s"
        fi
        echo "$beer bottle$s of beer on the wall."
        echo'


beer=99
s="s"
while [ "$beer" != "No" ]
do
        print_strophe
done```