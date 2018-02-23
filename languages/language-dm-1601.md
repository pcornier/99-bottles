
## Language DM ##
---
- Author: Mechana2412
- Date: 09/22/07
- Info: http
- Score:  (2.43 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-dm-1601.html
---

```//DanTom's 99 Bottles of Beer in DM Code 2.0
//Upgraded by Mechana2412

var/bottles = 99

mob/Login()
 usr << "Welcome to 99 Bottles of Beer 2.0"
 for()
  usr << "[bottles] Bottles of beer on the wall, [bottles] bottles of beer."
  bottles -= 1
  usr << "Take one down and pass it around, [bottles] bottles of beer on the wall."
  sleep(10)
  if(bottles==1)
   usr << "[bottles] Bottle of beer on the wall, [bottles] bottle of beer."
   usr << "Take one down and pass it around, no more bottles of beer on the wall."
   usr << "No more bottle of beer on the wall. No more bottles of beer..."
   usr << "Go to the store and buy some more...99 bottles of beer."
   break
   world << "For waiting so long, you get a cookie!"
   usr.Logout()```