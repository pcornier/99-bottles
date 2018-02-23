
## Language GNU Find ##
---
- Author: Peter Maydell
- Date: 04/20/05
- Info: n/a
- Score:  (2.94 in 116 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gnu-find-287.html
---

```# By Peter Maydell: http://www.chiark.greenend.org.uk/~pmaydell/find/beerhack

#!/bin/sh
#
# 99 Bottles Of Beer - find(1) version (with a little help from its 
# friends: mkdir, cd, sh, expr, ls, echo and rm)
# Copyright (C) Peter Maydell <pmaydell@chiark.greenend.org.uk>
#
# This shell script is just a wrapper to tidy up after the find
# command which does all the real work...
# 
# You might want to change the 99 to 10 to get less output :->

mkdir /tmp/beer || exit 1
cd /tmp/beer

find . -noleaf \
-path . \
	-exec mkdir 99 \; \
-o -name 1 \
	-printf '1 bottle of beer on the wall, 1 bottle of beer\nTake' \
	-printf 'one down and pass it around\nNo bottles of beer!\n' \
-o \
	-exec sh -c "mkdir {}/\`expr {} : '.*/\(.*\)' - 1\`" \; \
	-printf '%f bottles of beer on the wall, %f bottles of beer\n' \
	-printf 'Take one down and pass it around, ' \
	-exec sh -c "echo -n \`ls {}\`" \; \
	-printf ' bottle' \
	-name 2 \
		-printf ' of beer\n' \
	-o \
		-printf 's of beer\n'

cd /tmp
rm -rf /tmp/beer

# You will need the following programs. I have listed which versions
# I have, and that combination has been tested. Others might work...
# mkdir   : any old mkdir should do; mine is from GNU fileutils 3.16
# cd      : only used in the pre and post-party stuff, any old cd will do
# find    : I used GNU find version 4.1; if your find doesn't have the
#           -noleaf option then it probably doesn't have the optimisation
#           that flag disables; try just omitting it
# sh      : I used bash version 2.01.1(1)-release, but have tried not
#           to use bash-isms. Must be a Bourne-like shell, though.
# expr    : expr from GNU shellutils 1.16
# ls      : ls from GNU fileutils 3.16; any will do provided that 
#           'ls directory' for a dir. with a single subdirectory and nothing
#           else in it prints only the subdir name.
# echo    : I used the bash builtin. You need an echo that understands the
#           -n flag (meaning, don't print trailing newline). Actually, this is
#           just so the output looks nice, and you can omit the -n.
# rm      : from GNU fileutils 3.16; any should do, and it's only used
#           to tidy up a bit.```