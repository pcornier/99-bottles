
## Language Robotic ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-robotic-496.html
---

```Language: Robotic (Programming Language for Megazeux, 
          http://www.zeuxworld.com)

. "@99Bottles"
. "Not only does this code display the song, there are little smilies 
passing the beers along ^_^"
playercolor is c00
lockplayer
scrollview position to 1 0
gotoxy 5 1
put c0f CustomBlock p02 at 1 0
put c0f CustomBlock p02 at 2 0
put c0f CustomBlock p02 at 3 0
char edit 17 to 0 0 0 24 24 60 60 60 60 60 0 0 0 0
char 2
color c07
loop start
if "loopcount" = 98 "1 more"
set "local" to "(99 - 'loopcount')"
if "loopcount" = 0 "1st"
* "&local& bottles of beer on the wall."
wait 10
: "1st"
* "&local& bottles of beer on the wall,"
wait 10
* "&local& bottles of beer."
wait 10
* "Take one down, pass it around..."
put c06 Pusher p03 to WEST
put c?? Space p?? at 0 1
wait 10
loop for 98
: "1 more"
* "1 bottle of beer on the wall."
wait 10
* "1 bottle of beer on the wall,"
wait 10
* "1 bottle of beer."
wait 10
* "Take one down, pass it around..."
put c06 Pusher p03 to WEST
put c?? Space p?? at 0 1
* "No more bottles of beer on the wall."
put c0f CustomBlock pf3 at 1 0
put c0f CustomBlock pf3 at 2 0
put c0f CustomBlock pf3 at 3 0
char 243
end```