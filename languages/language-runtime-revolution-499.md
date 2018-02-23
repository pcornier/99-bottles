
## Language Runtime Revolution ##
---
- Author: Jeanne deVoto, David Vaughan
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-runtime-revolution-499.html
---

```-- Runtime Revolution, a cross-platform environment for development and 
-- distribution
-- Jeanne deVoto and David Vaughan, 29 July 2002

global gDrinking
constant bottlePhrase = "more bottles of beer on the wall"
constant drinkPhrase = "Take one down and pass it around"
constant oneLeftPhrase = "One last bottle of beer on the wall"
constant singAlong = 2
constant startBottles = 99
local bottles

on openCard
   put startBottles into bottles
   DrinkThem
end openCard

on DrinkThem
   switch bottles
   case 0
     put startBottles into bottles
     put "No" && bottlephrase & ", no" && toLower(bottlephrase) & 
return & \
         "Go to the store and buy some more," && bottles && 
toLower(bottlephrase)
     break
   case 1
     put oneLeftPhrase & comma && toLower(oneLeftPhrase) & return \
         & drinkPhrase & comma && bottles - 1 && toLower(bottlephrase)
     break
   default
     put bottles && bottlePhrase & comma && bottles && 
toLower(bottlePhrase) \
         & return & drinkPhrase & comma && bottles - 1 && 
toLower(bottlephrase)
   end switch
   subtract 1 from bottles
   send DrinkThem to me in singAlong seconds
   put the result into gDrinking
end DrinkThem```