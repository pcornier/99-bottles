
## Language FileMaker Pro 3.0 ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.90 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-filemaker-pro-3.0-256.html
---

```Enter Browse Mode
Set Field No. Bottles/Calculation (99)
Set Field Bottle Text/Calculation (>=<=)
Loop
  Set Field Bottle Text/Calculation
    If(No. Bottles a 1,
      No. Bottles & >=bottles of beer on the wall. >= & 
          No. Bottles & >=bottles of beer.<= & Paragraph & 
	  >=Take one down and pass it around and >=,
      No. Bottles & >=bottle of beer on the wall. >= & 
          No. Bottles & >=bottle of beer.<= & Paragraph & 
	  >=Take one down and pass it around and >=) & Paragraph &
    If(No. Bottles - 1 a 1,
      (No. Bottles - 1) & >= bottles of beer on the wall<=,
      (No. Bottles - 1) & >= bottle of beer on the wall<=)
Refresh Window
Comment (Viewing text is optional)
Speak (Speech Data: Field: Bottle Text/Wait for completion)
Comment  (Speech is optional)
Set Field No. Bottles/Calculation (No. Bottles - 1)
Exit Loop If (Calculation (No. Bottles = 0))
End Loop
Set Field Bottle Text/Calculation (>=0 bottles of beer on the wall. 
     0 bottles of beer. Go to the store and buy some more.<= & 
     Paragraph & >=99 bottles of beer on the wall.<=
Refresh Window
Speak (Speech Data: Field: Bottle Text/Wait for completion)```