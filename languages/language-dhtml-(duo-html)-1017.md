
## Language DHTML (Duo html) ##
---
- Author: Kevin Velghe
- Date: 01/12/06
- Info: http
- Score:  (3.00 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-dhtml-(duo-html)-1017.html
---

```<$- Duo HTML -$>
<html>
<head>
	<title>99 Bottles of Beer</title>
</head>
<body>
	<$SET looper 100>
	<$LOOP looper>
		<$ESET nr 100>
		<$CALC nr - $looper.#>
		<$ESET nr $nr.atoi()>
		<$ESET nrnext $nr>
		<$CALC nrnext - 1>
		<$ESET nrnext $nrnext.atoi()>
		<$IF nr = 0>
			No more bottles of beer on the wall, no more bottles of beer.<br>
			Go to the store and buy some more, 99 bottles of beer on the wall.<br>
		<$ELSE>
			<$IF nr > 1><$SET bottles "bottles"><$/IF>
			<$IF nr = 1><$SET bottles "bottle"><$/IF>
			<$DVAL0 nr> <$VAL bottles> of beer on the wall, <$DVAL0 nr> <$VAL bottles> of beer.<br>
			Take one down and pass it around, 
			<$IF nrnext > 0>
				<$IF nrnext > 1><$SET bottles "bottles"><$/IF>
				<$IF nrnext = 1><$SET bottles "bottle"><$/IF>
				<$DVAL0 nrnext> <$VAL bottles>
			<$ELSE>
				no more bottles
			<$/IF>
			of beer on the wall.<br>
		<$/IF>
		<br>
	<$/LOOP>
</body>
</html>```