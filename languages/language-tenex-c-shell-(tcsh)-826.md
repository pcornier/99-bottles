
## Language Tenex-C-Shell (tcsh) ##
---
- Author: Mirko M�nninghoff
- Date: 08/07/05
- Info: http
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tenex-c-shell-(tcsh)-826.html
---

```#!/usr/bin/tcsh
#
# 99 bottles of beer
# TENEX-C-Shell version
# by Mirko Moenninghoff
#
@ i=99
while ( $i )
    if ( !( $i - 1 ) ) then
        set x = "bottle"
    else
        set x = "bottles"
    endif
    echo "$i $x of beer on the wall, $i $x of beer."
    @ i--
    if ( !( $i )) then
        set c = "no more"
    else
        set c = $i
    endif
    echo "Take one down and pass it around, $c bottles of beer on the wall."
    echo
end
echo "No more bottle of beer on the wall, no more bottles of beer."
echo "Go to the store and buy some more, 99 bottles of beer on the wall."```