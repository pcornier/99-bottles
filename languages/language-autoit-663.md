
## Language AutoIt ##
---
- Author: Mike Gogulski
- Date: 05/18/05
- Info: http
- Score:  (2.33 in 33 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-autoit-663.html
---

```; AutoIt 2.x version of 99 Bottles
; By Mike Gogulski <mike@gogulski.com> 21 March 2005
; AutoIt is a scripting language for Windows application automation
; http://www.hiddensoft.com/
 
SetKeyDelay, 0
Run, notepad
WinWaitActive, Untitled - Notepad
SetEnv, bottles, 99
loop:
 Send, %bottles% bottle(s) of beer on the wall\,{ENTER}
 Send, %bottles% bottle(s) of beer{!}{ENTER}
 Send, Take one down, pass it around\,{ENTER}
 EnvSub, bottles, 1
 Send, %bottles% bottle(s) of beer on the wall{!}{ENTER}
 IfGreater, bottles, 0, Goto, loop```