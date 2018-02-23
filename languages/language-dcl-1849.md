
## Language DCL ##
---
- Author: Javascribe
- Date: 08/18/08
- Info: http
- Score:  (3.00 in 36 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dcl-1849.html
---

```$ bottle_count = 99
$ next_verse:
$ call recite_verse 'bottle_count'
$ bottle_count = bottle_count - 1
$ if bottle_count .ne. 0 then goto next_verse
$
$ recite_verse:
$ subroutine
$   bottles = " bottle!-!0UL!1%C!%Es!%F "
$   verse = "!/!UL"
$   verse = verse + bottles
$   verse = verse + "of beer on the wall, !-!UL"
$   verse = verse + bottles
$   verse = verse + "of beer."
$   verse = verse + "!/Take one down and pass it around, "
$   if p1 .ne. 1
$   then
$     verse = verse + "!UL"
$     verse = verse + bottles
$     verse = verse + "of beer on the wall."
$   else
$     verse = verse + "no more bottles of beer on the wall."
$     verse = verse + "!/!/No more bottles of beer on the wall, no more bottles of beer."
$     verse = verse + "!/Go to the store and buy some more, 99 bottles of beer on the wall."
$   endif
$   write sys$output f$fao( verse, 'p1', 'p1-1' )
$ exit
$ endsubroutine```