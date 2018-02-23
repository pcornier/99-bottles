
## Language Forceshock ##
---
- Author: Mike Gogulski
- Date: 05/18/05
- Info: http
- Score:  (1.71 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-forceshock-672.html
---

```-- Forceshock version of 99 Bottles of Beer
-- By Mike Gogulski <mike@gogulski.com> 21 March 2005
-- Forceshock is an embedded scripting language for game hacking, based on Lua
--
-- Tested with:
--   Forceshock Pro 0.993 (http://www.forceshock.net/)
--   under Windows 2000 (http://www.microsoft.com/)
--
-- Save as 99bottles.fss on your desktop and double-click the file
 
OpenConsole()
SetConsoleTitle("99 Bottles of Beer")
bottles = 99
while bottles > 0 do
 PrintConsoleLine(IntToStr(bottles).." bottles of beer on the wall,")
 PrintConsoleLine(IntToStr(bottles).." bottles of beer!")
 PrintConsoleLine("Take one down, pass it around,")
 bottles = bottles - 1
 PrintConsoleLine(IntToStr(bottles).." bottles of beer on the wall!")
end```