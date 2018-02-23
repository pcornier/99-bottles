
## Language DCL ##
---
- Author: Rik Steenwinkel
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dcl-204.html
---

```$! 99 bottles of beer
$! Written for VMS DCL by rsteenw@xs4all.nl
$!
$! $fao is a system lexical function, where FAO stands for 
$! Formatted ASCII Output. There's a fair bunch of these 
$! functions accessible via DCL (the command interpreter), 
$! like querying system, device, process and user parameters, 
$! string and list manipulation, file system foo, and more.
$!
$ cnt = 99
$ msg = f$fao("!UB bottle!1%C!%Es!%F of beer", cnt)
$ loop:
$ write sys$output f$fao("!AS on the wall!/!-!AS", msg)
$ write sys$output "Take one down and pass it around"
$ cnt = cnt - 1
$ if cnt .gt. 0
$ then
$   msg = f$fao("!UB bottle!1%C!%Es!%F of beer", cnt)
$   write sys$output f$fao("!AS on the wall!/", msg)
$   wait 00:00:02
$   goto loop
$ else
$   write sys$output "No more bottles of beer on the wall"
$ endif```