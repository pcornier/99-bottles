
## Language HotBasic ##
---
- Author: AirrSongs
- Date: 10/04/05
- Info: http
- Score:  (2.50 in 28 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-hotbasic-901.html
---

```'--------------------------------
' 99-Bottles
' GUI Version
' 
' Coded By:  AirrSongs - www.airsys.org
' Language: HotBasic - www.hotbasic.org
' Date: 10/03/05' 
'--------------------------------


$apptype gui:$typecheck on

declare Function Get_Bottles(num as byte) as string

create form1 as form
	width=300
	height=350
	minimizebox=false
	maximizebox=false
	center
	onshow=Count_Bottles
	create list1 as listbox
		top=0
		left=0
		width=form1.clientwidth
		height=form1.clientheight
	end create
end create

form1.showmodal
end

Function Get_Bottles(num as byte) as string
	defstr Ret
		select case num
			case 0: Ret = "No more bottles of beer"
			case 1: Ret = "1 bottle of beer"
			case else: Ret = str$(num) + " bottles of beer"
		end select
	result = Ret
end Function

Count_Bottles:
	defbyte i =99
		do
			list1.additems(Get_Bottles(i) + " on the wall, " 
			list1.additems(Get_Bottles(i) + ",")
			list1.additems("take one down, pass it around,")
			list1.additems(Get_Bottles(i-1) + " on the wall.")
			list1.additems(NULL)
			dec(i)
		loop until i = 0
return```