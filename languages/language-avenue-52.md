
## Language Avenue ##
---
- Author: Steven Bugo
- Date: 04/20/05
- Info: n/a
- Score:  (2.96 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-avenue-52.html
---

```'**************************************
'* Title:    99 Bottles of Beer       *
'* Author:   Steven Bugo              *
'* Language: Avenue (ArcView GIS 3.x) *
'**************************************

msg = "" 
bottles1 = "bottles"
bottles2 = "bottles"
noneleft = "No more bottles of beer on the wall!"

for each i in 99..1 by -1
   if (i = 1) then
     bottles1 = "bottle"
   end
   if (i = 2) then
      bottles2 = "bottle"
   end
   
   msg = msg + i.AsString ++ bottles1 ++ "of beer on the wall," + NL
   msg = msg + i.AsString ++ bottles1 ++ "of beer," + NL + "Take one down, pass it around," + NL 
   if (i = 1) then
     msg = msg + noneleft
   else 
      msg = msg + (i - 1).AsString ++ bottles2 + " of beer on the wall" + NL
+ NL
   end
end

MsgBox.Report(msg, "99 Bottles of Beer")```