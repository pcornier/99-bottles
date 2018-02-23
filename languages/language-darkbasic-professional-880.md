
## Language DarkBasic Professional ##
---
- Author: Nicholas Kingsley
- Date: 09/20/05
- Info: http
- Score:  (2.83 in 29 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-darkbasic-professional-880.html
---

```global t$ as string

for bottles=99 to 1 step -1
   t$=isPlural(bottles)

   t$=t$+" of beer on the wall"

   print t$;", ";t$
   print "Take one down and pass it around, ";

   if bottles-1>0
      print isPlural(bottles-1);
      print " of beer on the wall"
   else
      print "No more bottles of beer on the wall"
   endif
   sync
next bottles

print "No more bottles of beer on the wall, no more bottles of beer."
print "Go to the store and buy some more, 99 bottles of beer on the wall..."
wait key

function isPlural(bottles as integer)
local temp$ as string

   temp$=str$(bottles)+" bottle"
   if bottles>1
      temp$=temp$+"s"
   endif
endfunction temp$```