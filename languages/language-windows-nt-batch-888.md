
## Language Windows NT Batch ##
---
- Author: Frank-Peter Schultze
- Date: 09/24/05
- Info: n/a
- Score:  (1.86 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-windows-nt-batch-888.html
---

```@Echo Off
SetLocal EnableDelayedExpansion
For /L %%A In (99,-1,0) Do (
  Set X=%%A
  If !X!==1 (Set B=bottle) Else (Set B=bottles)
  If !X!==0 Set X=No more
  Echo !X! !B! of beer on the wall, !X! !B! of beer.
  Set /A X -= 1
  If !X!==1 (Set B=bottle) Else (Set B=bottles)
  If !X!==0 Set X=no more
  If !X! GEQ 0 (
    Echo Take one down and pass it around, !X! !B! of beer on the wall.
  ) Else (
    Echo Go to the store and buy some more, 99 bottles of beer on the wall.
    )
  )
EndLocal```