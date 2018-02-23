
## Language Railo ##
---
- Author: Kevin L.
- Date: 09/26/11
- Info: http
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-railo-2767.html
---

```<html>
<head>
<title>Railo : 99 Bottles Of Beer</title>
</head>
<body>
<cfscript>
  for ( bottlenum = 99 ; bottlenum gt 1 ; bottlenum = bottlenum - 1 ) {
    WriteOutput("<p>#bottlenum# bottles of beer on the wall...#bottlenum# bottles of beer!<br>");
    WriteOutput("Take one down, pass it around...#bottlenum-1# bottles of beer on the wall</p>");
  }
  WriteOutput("<p>1 bottle of beer on the wall...1 bottle of beer!<br>");
  WriteOutput("Take one down, pass it around...No bottles of beer on the wall</p>");
</cfscript>
</body>
</html>```