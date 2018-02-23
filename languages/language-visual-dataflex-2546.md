
## Language Visual DataFlex ##
---
- Author: Frank Cheng
- Date: 11/17/10
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-visual-dataflex-2546.html
---

```Use Windows

Function Bottles Global Integer iBottles Boolean bFirstWord Returns String
	Function_Return (If(iBottles,String(iBottles),If(bFirstWord,"No more","no more"))+If(iBottles=1,"
bottle"," bottles"))
End_Function

Procedure BottlesOfBear Integer iBottles
	Integer iTotal iVoid
	Move iBottles to iTotal
	While (iBottles>=0)
		Showln (Bottles(iBottles,TRUE)) " of beer on the wall, " (Bottles(iBottles,FALSE)) " of beer."
		Decrement iBottles
		If (iBottles<0) Showln "Go to the store and buy some more, " (Bottles(iTotal,FALSE)) " of beer on
the wall."
		Else Showln "Take one down and pass it around, " (Bottles(iBottles,FALSE)) " on the wall."
		Showln
	Loop
	Move (MessageBox(0,"Done","Info",0)) to iVoid
End_Procedure	

Send BottlesOfBear 99```