
## Language DHTML ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (1.75 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dhtml-223.html
---

```DTML (Document Template Markus Language) is the scripting language
of the web management tool 'Zope'.


<dtml-call "REQUEST.set('i',_.range(0,100,1))">
<dtml-call "REQUEST.set('r',99)">

<dtml-in i reverse>

<dtml-if expr="r==1">
   <dtml-var sequence-item> bottle of beer on the wall, <dtml-var
sequence-item> bottle of beer
   take one down, pass it around,
   <dtml-var sequence-item> bottle of beer.
<dtml-elif expr="r==0">
   no more bottles of beer on the wall.
   Go to the store, buy some more.
<dtml-else>
   <dtml-var sequence-item> bottles of beer on the wall, <dtml-var
sequence-item> bottles of beer
   take one down, pass it around,
   <dtml-var sequence-item> bottles of beer.
</dtml-if>

<dtml-call "REQUEST.set('r',r-1)">

</dtml-in>```