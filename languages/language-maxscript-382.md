
## Language Maxscript ##
---
- Author: R. J. Wolfe
- Date: 04/20/05
- Info: n/a
- Score:  (2.83 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-maxscript-382.html
---

```--
-- Maxscript is the scripting language for 3DS Max, 
-- a 3D computer animation package
--                                                            
-- 23 dec 02 R. J. Wolfe

for j = 99 to 1 by -1 do (
   bottle = "bottle"
   if j > 1 then (
       bottle = bottle + "s"
   )
   format "% % of beer on the wall, \n" j bottle
   format "% % of beer, \n" j bottle 
   format "Take one down, pass it around, \n"
   if (j-1) == 1 then 
      bottle = "bottle"
   else
      bottle = "bottles"
   format "% % of beer on the wall.\n\n" (j-1) bottle
)```