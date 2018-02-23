
## Language BlitzMax ##
---
- Author: Nicholas Kingsley
- Date: 05/25/07
- Info: http
- Score:  (3.00 in 25 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-blitzmax-1492.html
---

```' This takes advantages of some BlitzMax features - auto conversion of integers
' to strings, for example.

Strict

Local t$
Local bottles:Int

For bottles=99 To 1 Step -1
   t$=isPlural(bottles)

   t$=t$+" of beer on the wall"

   Print t$+", "+t$
   Print "Take one down and pass it around, ";

   If bottles-1>0
      Print isPlural(bottles-1)+" of beer on the wall"+Chr(10)
   Else
      Print "No more bottles of beer on the wall"+Chr(10)
   EndIf
Next

Print "No more bottles of beer on the wall, no more bottles of beer."
Print "Go to the store and buy some more, 99 bottles of beer on the wall..."
End


Function isPlural:String(bottles:Int)
Local temp$

   temp$=bottles+" bottle"
   If bottles>1
      temp$=temp$+"s"
   EndIf

	Return temp$
EndFunction```