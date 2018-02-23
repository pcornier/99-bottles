
## Language Windows NT Batch ##
---
- Author: tester
- Date: 08/18/05
- Info: n/a
- Score:  (2.83 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-windows-nt-batch-842.html
---

```:: 99 Bottles of Beer
:: for Windows 2000/XP

@echo off
setlocal enabledelayedexpansion
set bottle=bottles

for /l %%* in (99, -1, 1) do (
   set number=%%*
   if !number! EQU 1 set bottle=bottle

   echo !number! !bottle! of beer on the wall, !number! !bottle! of beer.

   set /a number=!number!-1
   if !number! EQU 1 (
      set bottle=bottle
   ) else (
      if !number! EQU 0 (
         set bottle=bottles
         set number=no more
      )
   )

   echo Take one down and pass it around, !number! !bottle! of beer on the wall.
   echo/
)

echo No more bottle of beer on the wall, no more bottles of beer.
echo Go to the store and buy some more, 99 bottles of beer on the wall.```