
## Language Novell NetWare login script ##
---
- Author: Bob Stammers
- Date: 03/05/06
- Info: http
- Score:  (3.00 in 16 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-novell-netware-login-script-1077.html
---

```; NetWare 4.11 login script version of 99 bottles of beer on the wall ;
Bob Stammers (saphena@compuserve.com)

temp set x="99"
AGAIN:
write <x>; " bottles of beer on the wall,"
write <x>; " bottles of beer."
write "Take one down and pass it around"
temp set x=<x> - "1"
if <x>="0" then
  write "No more bottles of beer on the wall"
else
  write <x>; " bottles of beer on the wall\r\n"
end
if <x> > "0" then goto AGAIN
write "No more bottles of beer on the wall, no more bottles of beer."
write "Go to the store and buy some more, 99 bottles of beer on the wall."```