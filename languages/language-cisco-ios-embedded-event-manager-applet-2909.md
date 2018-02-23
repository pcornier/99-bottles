
## Language Cisco IOS Embedded Event Manager Applet ##
---
- Author: Bruno Klauser
- Date: 07/02/12
- Info: http
- Score:  (2.97 in 40 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-cisco-ios-embedded-event-manager-applet-2909.html
---

```event manager applet 99-bob
    description written by bklauser inspired by http://www.99-bottles-of-beer.net
    event none
    action 100 set b 99
    action 110 while $b gt 1
    action 120  puts "$b bottles of beer on the wall, $b bottles of beer."
    action 130  decrement b
    action 140  puts "Take one down, pass it around, "
    action 150  puts "$b bottles of beer on the wall.\n"
    action 160 end
    action 170 puts "$b bottle of beer on the wall, $b bottle of beer."
    action 180 puts "Take one down, pass it around, "
    action 190 puts "no more bottles of beer on the wall.\n"
    action 200 puts "No more bottles of beer on the wall, "
    action 210 puts "no more bottles of beer."
    action 220 puts "Go to the store and buy some more, "
    action 230 puts "99 bottles of beer on the wall.\n"
!
alias exec sing event manager run 99-bob```