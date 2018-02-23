
## Language Zope-PageTemplates ##
---
- Author: Berthold St�ger
- Date: 08/22/05
- Info: http
- Score:  (2.88 in 124 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-zope-pagetemplates-845.html
---

```<html>
  <head>
    <title>99 Bottles of Beer</title>
  </head>
  <body>
    <p tal:repeat="bottles python:range(99,-1,-1)">
      <tal:x tal:condition="bottles"
             tal:replace="bottles" />
      <tal:x tal:condition="not:bottles">No more</tal:x>
      bottle<tal:x tal:condition="python:bottles > 1">s</tal:x>
      of beer on the wall,
      <tal:x tal:condition="bottles"
             tal:replace="bottles" />
      <tal:x tal:condition="not:bottles">no more</tal:x>
      bottle<tal:x tal:condition="python:bottles != 1">s</tal:x> of beer.
      <br />
      <tal:x tal:condition="bottles">
        Take one down and pass it around,
        <tal:x tal:condition="python:bottles - 1"
               tal:replace="python:bottles - 1" />
        <tal:x tal:condition="python:bottles == 1">no more</tal:x>
        bottle<tal:x tal:condition="python:bottles != 2">s</tal:x>
        of beer on the wall,
      </tal:x>
      <tal:x tal:condition="not:bottles">
        Go to the store and buy some more, 99 bottles of beer on the wall.
      </tal:x>
    </p>
  </body>
</html>```