
## Language TI 85 Calculator ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (1.75 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ti-85-calculator-449.html
---

```: TI-85 Printing calculator version of 99 Bottles of Beer
PROGRAM:BEER
:100-->A
:2-->B
:"Bottles of Beer"-->BOTTLES
:"One Bottle of Beer"-->ONE
:"On the Wall"-->ON
:"Take one down"-->TAKE
:"And pass it around."-->PASS
:"Zero Bottles of Beer"-->ZERO
:"Go to the store and "-->STORE
:"Buy some more."-->BUY
:Lbl LOOP
:ClLCD
:Outpt(1,1,A)
:Outpt(1,5,BOTTLES)
:Outpt(2,1,ON)
:Outpt(3,1,A)
:Outpt(3,5,BOTTLES)
:Outpt(4,1,TAKE)
:Outpt(5,1,PASS)
:Outpt(6,1,A-1)
:Outpt(6,5,BOTTLES)
:DS<(A,F)
:Pause
:Goto LOOP
:ClLCD
:Outpt(1,1,ONE)
:Outpt(2,1,ON)
:Outpt(3,5,ONE)
:Outpt(4,1,TAKE)
:Outpt(5,1,PASS)
:Outpt(6,1,ZERO)
:Pause
:ClLCD
:Outpt(1,1,STORE)
:Outpt(2,1,BUY)
:Disp ""
:Disp "Hit ENTER to buy more."```