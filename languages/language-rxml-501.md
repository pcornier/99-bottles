
## Language RXML ##
---
- Author: Tomas
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 97 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rxml-501.html
---

```This version of 99 bottles is written in RXML, a markup language used
by the Roxen webserver, found at www.roxen.com. 

<comment>
99 bottles of beer on the wall in RXML
Written by Tomas Berndtsson <tomas@nocrew.org>
Tested in Roxen WebServer 2.1. 
</comment>

<set variable="var.pl" value="s"/>
<for variable="var.i" from="99" to="1">
 &var.i; bottle&var.pl; of beer on the wall,<br>
 &var.i; bottle&var.pl; of beer.<br>
 Take one down and pass it around,<br>
 <set variable="var.j" expr="&var.i; - 1"/>
 <if variable="var.j = 1"><set variable="var.pl" value=""/></if>
 <else><set variable="var.pl" value="s"/></else>
 <if variable="var.j = 0">No more</if>
 <else>&var.j;</else>
  bottle&var.pl; of beer on the wall.<p>
</for>


Greetings,

Tomas```