
## Language ASP ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.93 in 197 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-asp-39.html
---

```Microsoft's Active Server Pages language (called VBScript), meant to be embedded in HTML documents.
<HTML>
<HEAD>
<TITLE>99 Bottles of Beer</TITLE>
</HEAD>
<BODY>
<!-- Microsoft ASP (Active Server Pages) listing by Vince Curley
(vincec@microsoft.com) -->
<%
	n = 99
	do
		str = n & " bottle"
		if n <> 1 then str = str & "s"
		str = str & " of beer"
		Response.Write str & " on the wall...<BR>"
		Response.Write str & "!<BR>"
		Response.Write "Take one down, pass it around...<BR>"
		n = n - 1
		if n > 0 then
			str = n
		else
			str = "No "
		end if
		str = str & " bottle"
		if n <> 1 then str = str & "s"
		str = str & " of beer on the wall!<BR>"
		Response.Write str
		Response.Write "<BR>"
	loop while n > 0
	Response.Write "<FONT SIZE=7><STRONG>Buy more
beer!</STRONG></FONT>"
%>
</BODY>
</HTML>```