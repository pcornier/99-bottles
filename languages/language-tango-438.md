
## Language TANGO ##
---
- Author: Wes Bramhall
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 202 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tango-438.html
---

```<@comment>
TANGO (Witango) version of 99 bottles of beer.
Author: Wes Bramhall
</@comment>
<html>
	<head>
		<title>99 Bottles of Beer</title>
	</head>
	<body>
		<@for start="1" stop="99">
			<@calc expr="100-<@currow>"> bottle<@if
expr="<@currow>!= 99">s</@if> of beer on the wall,
			<@calc expr="100-<@currow>"> bottle<@if
expr="<@currow>!= 99">s</@if> of beer.<br>
			Take one down, pass it around,
			<@if expr="<@currow>!=99">
				<@calc expr="100-<@currow>-1"> bottle<@if
expr="<@currow>!= 98">s</@if> of beer on the wall.<br>
			<@else>
				0 bottles of beer on the wall.<br>
				BUY MORE BEER!
			</@if>
		</@for>
	</body>
</html>```