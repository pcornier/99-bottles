
## Language mp4h ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: http
- Score:  (1.67 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-mp4h-409.html
---

```;;;  mp4h version of 99 bottles of beer
;;;  Laurent Vogel,  http://lvogel.free.fr
;;;  (m4ph, see  http://www.engelschall.com/sw/mp4h/)
;;;
<define-tag p whitespace=delete>
<ifeq %0 0 "No" %0> bottle<ifeq <gt %0 1> true "s"> of beer%1
</define-tag><define-tag q><p %0 " on the wall,">
<p %0 ".">
Take one down, pass it around, 
<p <add %0 -1> " on the wall.">

</define-tag><set-var i=99 />;;;
<while <gt <get-var i /> 0 />><q <get-var i />><decrement i /></while>```