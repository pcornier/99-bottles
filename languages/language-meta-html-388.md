
## Language Meta HTML ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 58 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-meta-html-388.html
---

```<html>
<head> <title> 99 Bottles of Beer: The Compleat Lyrics </title> </head>
<body>

;;;
;;; The actual source code to The Compleat Lyrics.
<defsubst plural whitespace=delete>
  <if <not <eq %0 1>> s>
</defsubst>

<set-var beers=99>
<while <gt beers 0>>
  <get-var beers> bottle<plural beers> of beer on the wall, <br>
  <get-var beers> bottle<plural beers> of beer, <br>
  You take one down, pass it around, <br>
  <decrement beers>
  <get-var beers> bottle<plural beers> of beer on the wall.
  <p>
</while>

No more bottles of beer on the wall, <br>
No more bottles of beer, <br>
Go to the store, and buy some more, <br>

<form method=GET action="<get-var mhtml::current-url>">
  <input type="submit" name="button" value="99 Bottles of beer on the wall">
</form>

</body>
</html>```