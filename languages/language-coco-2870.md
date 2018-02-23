
## Language coco ##
---
- Author: camellia0x
- Date: 04/21/12
- Info: https
- Score:  (3.00 in 2 votes)
- URL: https
- Original URL: http://www.99-bottles-of-beer.net/language-coco-2870.html
---

```for z of [1 to 99]
 x = 100 - z 
 console.log """
 #x bottle#{if x is 1 then '' else 's'} of beer on the wall, #x bottle#{if x is 1 then '' else 's'}
of beer. 
 Take one down and pass it around, #{x - 1 or 'no more'} bottle#{if x is 1 then '' else 's'} of beer
on the wall.
 """ 

console.log """
 No more bottles of beer on the wall, no more bottles of beer.
 Go to the store and buy some more, 99 bottles of beer on the wall.
 """```