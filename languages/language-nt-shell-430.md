
## Language NT Shell ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.83 in 18 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nt-shell-430.html
---

```@echo off
setlocal
set Number=100
set PluralSuffix=s
:BeerLoop
echo %Number% bottle%PluralSuffix% of beer on the wall, 
echo %Number% bottle%PluralSuffix% of beer
echo Take one down and pass it around,
set /a Number=Number-1
if %Number% leq 1 set PluralSuffix=
if %Number% neq 0 (
  echo %Number% bottle%PluralSuffix% of beer on the wall
) else (
  echo No more bottles of beer
  goto :eof)
echo.
goto :BeerLoop
endlocal```