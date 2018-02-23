
## Language Zope-DHTML ##
---
- Author: Harald Stowasser
- Date: 04/20/05
- Info: n/a
- Score:  (2.65 in 17 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-zope-dhtml-61.html
---

```<dtml-comment>
   Zope-DTML version of 99 Bottles of beer (Bottles.html)
   See @ http://www.stowasser.tv/algo/Bottles.html
   Harald Stowasser
</dtml-comment>

<dtml-var standard_html_header>
   <dtml-in "_.range(99, 0, -1)" prefix=bottle>
     <dtml-var bottle_item> bottle(s) of beer on the wall<br>
     <dtml-var bottle_item> bottle(s) of beer.<br>
     Take one down, pass it around<br>
     <dtml-var "bottle_item-1"> bottle(s) of beer on the wall."<br><br>
   </dtml-in>
<dtml-var standard_html_footer>```