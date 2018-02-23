
## Language HTA ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.14 in 22 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-hta-314.html
---

```HTA = HTML Application
see http://msdn.microsoft.com/workshop/author/hta/overview/htaoverview.asp)

<!-- HTA version of 99 Bottles of beer (Bottles.hta) -->
<!-- Philipp Winterberg, http://www.winterbergs.de   -->
<html>
<head><hta:application id="99Bottles" singleInstance="yes"
applicationName="99 Bottles of Beer">
<title>99 Bottles of Beer</title></head>
<body><script><!--
for (b = 99 ; b > 0 ; b--) 
  with (window.document) {
    writeln(b + " bottle(s) of beer on the wall,<br>");
    writeln(b + " bottle(s) of beer.<br>");
    writeln("Take one down, pass it around,<br>");
    writeln((b - 1) + " bottle(s) of beer on the wall.<p>");
  } //-->
</script></body>
</html>```