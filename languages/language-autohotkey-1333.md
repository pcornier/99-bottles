
## Language AutoHotkey ##
---
- Author: Jonny
- Date: 11/19/06
- Info: http
- Score:  (2.82 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-autohotkey-1333.html
---

```SetKeyDelay,0
Run,notepad
WinWaitActive,Untitled - Notepad

Loop 99
{
  Send,% 100-A_Index . " bottle" . IsPlural(A_Index) . " of beer on the wall,`n"
       . 100-A_Index . " bottle" . IsPlural(A_Index) . " of beer.`n"
       . "Take one down and pass it around,`n"
       . IsEnd(A_Index) . " bottle"
       . IsPlural(A_Index+1) . " of beer on the wall.`n`n"
}

Send,No more bottles of beer on the wall, no more bottles of beer.`n
Send,Go to the store and buy some more, 99 bottles of beer on the wall.
return

IsPlural(iter) {
  If iter != 99
    ReturnVal = s
  return ReturnVal
}

IsEnd(iter) {
  If iter = 99
    ReturnVal = No more
  Else
    ReturnVal := 99 - iter
  return ReturnVal
}```