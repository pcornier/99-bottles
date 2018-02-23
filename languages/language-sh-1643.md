
## Language sh ##
---
- Author: Rob Franken
- Date: 12/07/07
- Info: n/a
- Score:  (4.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sh-1643.html
---

```#!/bin/sh
#The real sh not with bash extensions
#for testing use dash as interpreter because sh is often simlinked to bash
bottles(){
    if test $1 -eq 1
        then echo 1 bottle
    elif test $1 -eq 0
        then echo no more bottles
    else echo $1 bottles
    fi
}
i=99
until test $i -eq 0
    do echo `bottles $i` of beer standing on the wall, `bottles $i` of beer.
    i=$(($i-1))
    echo Take one down and pass it around, `bottles $i` of beer on the wall.
    echo
done
echo No more bottles of beer standing on the wall, `bottles 0` of beer.
echo Go to the store and buy some more, `bottles 99` of beer on the wall.```