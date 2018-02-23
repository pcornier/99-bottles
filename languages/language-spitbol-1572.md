
## Language SPITBOL ##
---
- Author: Gordon E. Peterson II
- Date: 08/14/07
- Info: http
- Score:  (3.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-spitbol-1572.html
---

```	cr = char(13) char(10); n = 99; ob = " of beer"; otw = " on the wall"
more	output = (nobb = (gt(n,0) n,"No more") " bottle" (eq(n,1),"s") ob) otw
+	  ", " replace(nobb,"N","n") "." cr 
+	  (gt(n,0) "Take one down and pass it around",
+	   "Go to the store and buy some more" ?(n = 100)) ", " ?(n = n - 1)
+         (gt(n,0) n, "no more") " bottle" (eq(n,1),"s") ob otw "."
	output = lt(n,99) cr				:s(more)
end```