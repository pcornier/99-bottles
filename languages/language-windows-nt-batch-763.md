
## Language Windows NT Batch ##
---
- Author: Kang Seonghoon (Tokigun)
- Date: 06/24/05
- Info: n/a
- Score:  (2.33 in 12 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-windows-nt-batch-763.html
---

```@echo off
rem ========================================
rem 99 Bottles of Beer in Windows NT Batch
rem by Kang Seonghoon (Tokigun), 2005-06-24.
rem This program is in public domain.
rem ========================================
set bottle=bottles
set number=99
:loop
echo %number% %bottle% of beer on the wall,
echo %number% %bottle% of beer.
echo Take one down, pass it around,
set /a number=number-1
if "%number%"=="1" set bottle=bottle
if "%number%"=="0" goto done
echo %number% %bottle% of beer on the wall.
echo.
goto loop
:done
echo No more bottles of beer on the wall.
echo on```