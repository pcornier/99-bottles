
## Language VIB Skript ##
---
- Author: Mark Kingery
- Date: 04/20/05
- Info: n/a
- Score:  (2.71 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vib-skript-170.html
---

```//99 bottles of beer in VIB Skript
//By Mark Kingery

:Bottles
Start

:Start
init
count_down

:init
FCT CALC @bottles = 99 //initialize Variable

:count_down
LAB down
FCT INSTR @Bottles "bottles of beer on the wall"
FCT INSTR @Bottles "bottles of beer"
FCT INSTR "take one down pass ist around" E
FCT CALC @Bottles = @Bottles -1
RES PASSED " " ->down```