
## Language PowerBatch ##
---
- Author: Christopher Mathews
- Date: 09/27/05
- Info: http
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-powerbatch-892.html
---

```Variable  lvBeers,100                          
Variable  lvBeersOnWall,30
Variable  lvEndBeers,30
Variable  lvCount,3
Variable  lvTakeOne,100
Variable  lvTake,100
Variable  lvLength,3
Variable  lvFinalTake,100
Variable  lvOneBottle,100
SetVar    lvBeers,99
SetVar    lvTake,99
SetVar    lvCount,99
SetVar    lvBeersOnWall," bottles of beer on the wall, "
SetVar    lvOneBottle," bottle of beer on the wall, "
SetVar    lvTakeOne, "Take one down and pass it around, "
Label     MainLoop 
Concat    lvBeers,lvBeersOnWall                             
Subtract  lvTake,1
Concat    lvTake,lvBeersOnWall
Concat    lvTakeOne,lvTake
MidString lvEndBeers,lvBeers,1,18
Concat    lvBeers,lvEndBeers
WriteLine lvBeers
Length    lvLength,lvTakeOne
Subtract  lvLength,2
MidString lvFinalTake,lvTakeOne,1,lvLength
WriteLine lvFinalTake
Subtract  lvCount,1
SetVar    lvTake,lvCount
SetVar    lvBeers,lvCount
SetVar    lvTakeOne,"Take one down and pass it around, "
Compare   lvCount,1,MainLoop,OneBeer
Label     OneBeer
Concat    lvBeers,lvOneBottle
MidString lvEndBeers,lvBeers,1,17
Concat    lvBeers,lvEndBeers
WriteLine lvBeers
Concat    lvTakeOne,"No more bottle of beer on the wall"
WriteLine lvTakeOne
WriteLine "No more bottle of beer on the wall, no more bottles of beer."
WriteLine "Go to the store and buy some more, 99 bottles of beer on the wall."```