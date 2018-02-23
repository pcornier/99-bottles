
## Language Active FoxPro Pages ##
---
- Author: Jochen Kirst�tter
- Date: 12/11/06
- Info: http
- Score:  (3.00 in 5 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-active-foxpro-pages-1350.html
---

```<html>
<head>
<title>99 Bottles of beer - Active FoxPro Pages</title>
<head>
<body>
<%
*---		Active FoxPro Pages (AFP) - ProLib Software GmbH, Germany
*---		Listing by Jochen Kirst�tter <jochenk@prolib.de>
*---		(simple version - at http://www.afpages.de/ is an object-oriented version)
	Local lnCount, lnIndex, lcContent, lcSuffix
	m.lnCount = 99

	For m.lnIndex = m.lnCount To 1 Step -1
		If Not m.lnIndex == 1
			m.lcSuffix = "s"
		EndIf
		m.lcContent = Transform(m.lnIndex) + " bottle" + m.lcSuffix + " of beer"
		Response.Write("<br/>" + m.lcContent + " on the wall, ")
		Response.Write(m.lcContent + ".")
		Response.Write("<br/>Take one down and pass it around, ")
		If m.lnIndex - 1 > 0
			If m.lnIndex - 1 == 1
				m.lcSuffix = ""
			EndIf
			m.lcContent = Transform(m.lnIndex - 1) + " bottle" + m.lcSuffix + " of beer"
		Else
			m.lcContent = "no more bottles of beer"
		EndIf
		Response.Write(m.lcContent + " on the wall.<br/>")
	EndFor
	Response.Write("<br/>N" + Substr(m.lcContent,2) + " on the wall, " + m.lcContent + ".")
	Response.Write("<br/>Go to the store and buy some more, " + Transform(m.lnCount) + " bottles of
beer on the wall.")
%>
</body>
</html>```