
## Language LUA ##
---
- Author: chill
- Date: 07/10/05
- Info: n/a
- Score:  (2.17 in 29 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lua-788.html
---

```--LUA 5.x by CHILL CODE

-- for X = 99 to 2
-- X Bottles of beer on the wall, X bottles of beer.
-- Take one down and pass it around, [X-1] bottles of beer on the wall.
-- for X = 1
-- X Bottles of beer on the wall, X bottles of beer.
-- Take one down and pass it around, no more bottles of beer on the wall.
-- for X = 0
-- No more bottle of beer on the wall. No more bottles of beer... 
-- Go to the store and buy some more...99 bottles of beer.

for i = 99, 2 do
	write( i.." Bottles of beer on the wall, "..i.." bottles of beer." )
	write( "Take one down and pass it around, "..(i-1).." bottles of beer on the wall." )
end
write( "1 Bottles of beer on the wall, 1 bottles of beer." )
write( "Take one down and pass it around, no more bottles of beer on the wall." )
write( "No more bottle of beer on the wall. No more bottles of beer... " )
write( "Go to the store and buy some more...99 bottles of beer." )```