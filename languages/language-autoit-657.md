
## Language AutoIt ##
---
- Author: Mike Gogulski
- Date: 05/17/05
- Info: n/a
- Score:  (2.94 in 130 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-autoit-657.html
---

```; AutoIt 3.x version of 99 Bottles
; By Mike Gogulski <mike@gogulski.com> 21 March 2005
; AutoIt is a scripting language for Windows application automation
; http://www.hiddensoft.com/
 
AutoItSetOption("SendKeyDelay", 0)
Run("notepad")
WinWaitActive("Untitled - Notepad")
$bottles = 99
while $bottles > 0
 Send($bottles & " bottle(s) of beer on the wall,{ENTER}")
 Send($bottles & " bottle(s) of beer{!}{ENTER}")
 Send("Take one down, pass it around,{ENTER}")
 $bottles = $bottles - 1
 Send($bottles & " bottle(s) of beer on the wall{!}{ENTER}")
WEnd```