
## Language Kermit ##
---
- Author: Scott Snadow
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 24 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-kermit-344.html
---

```In case you missed it, Kermit is the communications program that 
seems to have been ported to just about everything, from the 
Timex Sinclair to the Cray II.

comment --- 99 bottles of beer, in Kermit scripting language.
comment --- Execute by using the TAKE command in Kermit, or naming
comment --- this file with the default initialization file name.
comment --- 23-Sep-1997 --- Scott Snadow, snadow@eisner.decus.org

set count 99
:loop
if < \v(count) 99 echo \v(count) bottle(s) of beer on the wall.
echo
echo \v(count) bottle(s) of beer on the wall, \v(count) bottle(s) of beer.
echo Take one down, pass it around,
if count goto loop
echo No bottles of beer on the wall.```