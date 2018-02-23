
## Language Amiga Shellscript ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.97 in 29 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-amiga-shellscript-28.html
---

```.key num_bottles

set count <num_bottles$99>
set bword "bottles"

LAB LOOP

    echo $count $bword "of beer on the wall."
    echo $count $bword "of beer."
    echo "Take one down, pass it around."
    set count `eval $count - 1`
    if $count eq 1
       set bword "bottle"
    else
       set bword "bottles"
    endif
    echo $count $bword "of beer."
    echo ""

if $count gt 0
   skip LOOP BACK
endif```