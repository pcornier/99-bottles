
## Language Trumpet Winsock ##
---
- Author: Andrew Turley
- Date: 04/20/05
- Info: n/a
- Score:  (1.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-trumpet-winsock-465.html
---

```#  99 Bottles of Beer on the Wall
#  Written by Andrew Turley aturley@sound.net
$para = " bottle"
$parb = " of beer on the wall,"
$parc = " of beer."
$pard = "Take one down, pass it around,"
$pare = " of beer on the wall."
$parf = "no bottles of beer on the wall!"
$pl = "s"
%beer = 99
repeat
  display %beer
  display $para
  if ! %beer = 1
    display $pl
  end
  display $parb\n
  display %beer
  display $para
  if ! %beer = 1
    display $pl
  end  
  display $parc\n
  display $pard\n
  %beer = %beer - 1
  if %beer > 0
    display %beer
    display $para
    if %beer > 1
      display $pl 
    end
    display $pare\n
  end
  if %beer = 0
    display $parf\n
  end
  display \n
until %beer = 0```