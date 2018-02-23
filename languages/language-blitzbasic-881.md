
## Language BlitzBasic ##
---
- Author: Hitsch Meyer
- Date: 09/20/05
- Info: http
- Score:  (2.35 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-blitzbasic-881.html
---

```; BlitzBasic version of 99 bottles of beer
; Modified by Hitsch Meyer
; from prior version found on this site.
; (Modified to a correct code)
; 
AppTitle "99 Bottles"
Graphics 640,480,0,2
SetBuffer BackBuffer()
;
Global bottles%=99
;
While Not (Bottles=1)
Cls
Text 10,15,bottles + " bottles of beer on the wall " + bottles + " bottles of beer"
Text 30,30,"Take one down, pass it around,"
bottles=bottles-1
Flip
Delay 333
Wend
;
Cls
Text 10,15,"1 bottle of beer on the wall, one bottle of beer"
Text 30,30,"no more bottles of beer on the wall."
Flip
Delay 3000
;
End```