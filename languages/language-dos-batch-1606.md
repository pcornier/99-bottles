
## Language DOS Batch ##
---
- Author: Cory Boehne
- Date: 10/04/07
- Info: n/a
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dos-batch-1606.html
---

```@echo off
REM 99 Bottles of Beer in DOS Batch
REM First version by Gert-jan Los (los@lsdb.bwl.uni-mannheim.de)
REM The file with batch program must be named as "beer.bat"
REM Noted by Vladimir Vojacek (vojacek@seznam.cz), 2003-07-03
REM Last modified by Cory Boehne, 2004-01-01
if "%1"=="" goto outer
if "%1"=="body" goto body
:inner
for %%a in ( 9 8 7 6 5 4 3 2 1 0 ) do call beer body %2 %%a
goto end
:outer
for %%a in ( 9 8 7 6 5 4 3 2 1 0 ) do call beer inner %%a
goto end
:body
set num=%2%3
set bottle=bottles
if "%num%"=="99" set number=ninety-nine
if "%num%"=="19" set number=nineteen
if "%num%"=="09" set number=nine
if "%num%"=="99" goto skipfirst
if "%2"=="0" set num=%3
if "%num%"=="1" set bottle=bottle
if "%num%"=="0" goto last
 
echo %number% %bottle% of beer on the wall
echo.
:skipfirst
echo %number% %bottle% of beer on the wall
echo %number% %bottle% of beer
if not "%num%"=="1" echo take one down and pass it around
if "%num%"=="1" echo take it down and pass it around
:last
if "%num%"=="0" echo no more bottles of beer on the wall
if "%num%"=="0" goto end
if "%2"=="9" set numberi=ninety
if "%2"=="8" set numberi=eighty
if "%2"=="7" set numberi=seventy
if "%2"=="6" set numberi=sixty
if "%2"=="5" set numberi=fifty
if "%2"=="4" set numberi=fourty
if "%2"=="3" set numberi=thirty
if "%2"=="2" set numberi=twenty
if "%2"=="1" set numberi=
if "%2"=="0" set numberi=
if not "%2"=="1" goto secondnum
if "%3%"=="9" set numberi=eighteen
if "%3%"=="8" set numberi=seventeen
if "%3%"=="7" set numberi=sixteen
if "%3%"=="6" set numberi=fifteen
if "%3%"=="5" set numberi=fourteen
if "%3%"=="4" set numberi=thirteen
if "%3%"=="3" set numberi=twelve
if "%3%"=="2" set numberi=eleven
if "%3%"=="1" set numberi=ten
set numbe=
goto numcat
:secondnum
if "%3"=="0" set numbe=nine
if "%3"=="9" set numbe=eight
if "%3"=="8" set numbe=seven
if "%3"=="7" set numbe=six
if "%3"=="6" set numbe=five
if "%3"=="5" set numbe=four
if "%3"=="4" set numbe=three
if "%3"=="3" set numbe=two
if "%3"=="2" goto lastone
if "%3"=="1" set numbe=
if not "%3"=="0" goto numcat
if "%2"=="9" set numberi=eighty
if "%2"=="8" set numberi=seventy
if "%2"=="7" set numberi=sixty
if "%2"=="6" set numberi=fifty
if "%2"=="5" set numberi=fourty
if "%2"=="4" set numberi=thirty
if "%2"=="3" set numberi=twenty
if "%2"=="2" set numberi=
if "%2"=="1" set numberi=
goto numcat
:lastone
if not "%2"=="0" set numbe=one
if "%2"=="0" set numbe=one more
:numcat
if "%2"=="0" goto skipdash
if "%2"=="1" goto skipdash
if "%3"=="0" set numberi=%numberi%-
if "%3"=="9" set numberi=%numberi%-
if "%3"=="8" set numberi=%numberi%-
if "%3"=="7" set numberi=%numberi%-
if "%3"=="6" set numberi=%numberi%-
if "%3"=="5" set numberi=%numberi%-
if "%3"=="4" set numberi=%numberi%-
if "%3"=="3" set numberi=%numberi%-
if "%3"=="2" set numberi=%numberi%-
 
:skipdash
set number=%numberi%%numbe%
:end```