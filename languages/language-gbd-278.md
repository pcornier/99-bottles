
## Language GBD ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-gbd-278.html
---

```# GBD command version of 99 bottles of beer
# Laurent Vogel,  http://lvogel.free.fr
#
# run as:  gdb --batch -nw --command=THIS_FILE

printf "99 bottles of beer on the wall,\n"
printf "99 bottles of beer.\n"

set $i = 99

define loop
set $i = $i-1
printf "Take one down, pass it around,\n"
printf "%d bottles of beer on the wall.\n\n", $i
printf "%d bottles of beer on the wall,\n", $i
printf "%d bottles of beer.\n", $i
end

define loop2
loop
loop
loop
loop
end

define loop3
loop2
loop2
loop2
loop2
end

loop3
loop3
loop3
loop3
loop3
loop3
loop

printf "Take one down, pass it around,\n"
printf "1 bottle of beer on the wall.\n\n"
printf "1 bottle of beer on the wall,\n"
printf "1 bottle of beer.\n"
printf "Take one down, pass it around,\n"
printf "No bottle of beer on the wall.\n"```