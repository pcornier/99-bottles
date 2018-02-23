
## Language Silk ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-silk-593.html
---

```Silk is a language for generating web pages on the fly.

<%sub default()%>
<html><title>SilkyBeers</title><body><h1>99 beers on the wall, silk style...</h1><br><br><br>
<%
	nBeers = 99
	while (nBeers > 0)
		?CStr(nBeers) & " bottles of beer on the wall,"
		?Cstr(nBeers) & " bottles of beer..."
		?"Take one down, pass it around,"
		nBeers = nBeers - 1
		?CStr(nBeers) & " bottles of beer on the wall.<br>"
	wend
%>
</body></html>
<%end sub%>```