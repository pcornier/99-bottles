
## Language WoS Quest Script ##
---
- Author: Dan Samuel
- Date: 04/20/05
- Info: n/a
- Score:  (2.93 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-wos-quest-script-161.html
---

```Quest is the scripting language for an online multiplayer RPG (Well of Souls)
By Dan Samuel, 29.4.2002

@BeerSong
ACTOR 1, "Drunk", <Josh's drunken guy skin>
SET bottles, 99
@loop
1: #<bottles> bottles of beer on the wall.
1: #<bottles> bottles of beer.
1: Take one down, pass it around.
SUB bottles, 1
IF= @done
1: #<bottles> bottles of beer on the wall.
WAIT .5
GOTO loop
@done
1: Buuuuuuuurp!```