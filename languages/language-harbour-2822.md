
## Language Harbour ##
---
- Author: Miguel Lopes
- Date: 01/20/12
- Info: http
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-harbour-2822.html
---

```procedure main
   local nBottles
   
   for nBottles:= 99 to 2 step -1
      ? ltrim(str(nBottles)), 'bottles of bear on the wall', ltrim(str(nBottles)), 'bottles of
bear'
      ? 'Take one down, pass it around'
      ? ltrim(str(nBottles)), 'bottles of bear on the wall'
      ?
   next
   
   ? '1 bottle of bear on the wall, one bottle of bear.'
   ? 'Take one down, pass it around, no more bottles of beaar on the wall.'
   ?
   ? 'No more bottles of bear on the wall, no more bottles of bear.'
   ? 'Go to the store and buy some more, 99 bottles of bear on the wall.'
   ? 
   wait "press a key to close the console"
return```