
## Language NetRexx ##
---
- Author: A.J. Bos
- Date: 04/20/05
- Info: http
- Score:  (2.95 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-netrexx-423.html
---

```/**
* NetRexx is a java front-end. You type rexx, it compiles to java.
* For more info, look at: http://www2.hursley.ibm.com/netrexx/
*@author A.J. Bos
*/
beer = "bottles of beer on the wall"
removeOne = "Take one down, pass it arround,"
say 99 beer","
say 99 beer.subword(1,3)","
loop i = 98 to 2 by -1
  say removeOne
  say i beer"."
  say
  say i beer","
  say i beer.subword(1,3)","
end
lastCall = "bottle" beer.delword(1,1)
say removeOne
say i lastCall"."
say
say i lastCall","
say i lastCall.subword(1,3)","
say removeOne
say "No more" beer```