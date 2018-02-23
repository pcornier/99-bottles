
## Language IdocScript ##
---
- Author: Sam White
- Date: 02/06/09
- Info: http
- Score:  (3.00 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-idocscript-1976.html
---

```<$numBottles = "99", bottleStr = " bottles "$>
<$loopwhile (numBottles > 0)$>
	<$verse = numBottles & bottleStr & "of beer on the wall,\n" &
		numBottles & bottleStr & "of beer!\n" & 
		"Take one down, pass it around,\n"$>
	<$numBottles = numBottles - 1$>
	<$if numBottles > 0$>
		<$if numBottles == 1$>
			<$bottleStr = " bottle "$>
		<$endif$>
		<$verse = verse & numBottles & bottleStr & "of beer on the wall!\n"$>
	<$else$>
		<$verse = verse & "no more bottles of beer on the wall!\n"$>
	<$endif$>
<$verse$>
<$endloop$>```