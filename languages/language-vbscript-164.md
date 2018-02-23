
## Language VBScript ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: n/a
- Score:  (2.17 in 12 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-vbscript-164.html
---

```' *short* VBScript/WSH version of 99 Bottles of beer (Bottles.vbs)
' Philipp Winterberg, http://www.winterbergs.de
'
For b = 99 To 1 Step -1
  WScript.Echo b & " bottle(s) of beer on the wall, " & b & " bottle(s) of beer." 
  WScript.Echo "Take one down, pass it around, " & (b-1) & " bottle(s) of beer on the wall." 
Next```