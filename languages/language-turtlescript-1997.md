
## Language TurtleScript ##
---
- Author: Jan-Thorben Brinkmann
- Date: 03/07/09
- Info: n/a
- Score:  (3.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-turtlescript-1997.html
---

```# Script by Jan-Thorben Brinkmann
reset
penup
canvassize 1000, 5070
forward 125
turnright 90
forward 700
turnright 90
fontsize 14
$bottles=99
learn write $num, $nextnum {
  print $num+" bottles of beer on the wall, "+$num+" bottles of beer.\nTake one down and pass it
around, "+$nextnum+" bottles of beer on the wall"
}

repeat 98 {
  $next=$bottles-1
  write $bottles, $next
  forward 50
  $bottles=$next
}

write 1, "no more"
forward 50
write "no more", 99

pendown```