
## Language JustBasic ##
---
- Author: John Fredrickson
- Date: 02/21/06
- Info: http
- Score:  (2.97 in 33 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-justbasic-1060.html
---

```REM 99 Bottles of Beer on the wall
REM John Fredrickson, Washington DC, jafred@BellAtlantic.net
REM JustBasic http://www.justbasic.com is a subset of
REM LibertyBasic http://www.LibertyBasic.com
Bottles = 99
While Bottles >= 1
  if Bottles > 1 then
    Print Bottles; " bottles of beer on the wall,"
    Print Bottles; " bottles of beer."
    Print "Take one down and pass it around,"
  else
    Print Bottles; " bottle of beer on the wall,"
    Print Bottles; " bottle of beer."
    Print "Take it down and pass it around,"
  end if
  Bottles = Bottles - 1
  Select Case Bottles
    Case 1
      Print "A single bottle of beer on the wall."
    Case 0
      Print "No more bottles of beer on the wall."
    Case Else
      Print Bottles; " bottles of beer on the wall."
    End Select
  Print
Wend
End```