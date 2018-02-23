
## Language MPE/iX Command Interpreter Script ##
---
- Author: Barry Lake
- Date: 12/19/06
- Info: http
- Score:  (3.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-mpe-ix-command-interpreter-script-1357.html
---

```# MPE/iX Command Interpreter script to generate
# the "99 Bottles of Beer" song lyrics.
# By Barry Lake, 16 November 1999
#
setvar bottles 100
setvar s "s"
setvar one "one"
setvar oneless "!![bottles-1]"
while setvar(bottles,bottles-1) > 0
   echo !bottles bottle!s of beer on the wall, !bottles bottle!s of beer,
   if bottles = 2
      setvar s ""
   elseif bottles = 1
      setvar s "s"
      setvar one "it"
      setvar oneless "no more"
   endif
   echo Take !one down, pass it around, !oneless bottle!s of beer on the wall.
   echo
endwhile```