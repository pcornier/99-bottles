
## Language SPITBOL ##
---
- Author: Gordon E. Peterson II
- Date: 08/14/07
- Info: http
- Score:  (2.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-spitbol-1573.html
---

```	output = (stanza = 99 (bob = " bottles of beer") (otw = " on the wall")
+	 ", " 99 bob "." (cr = char(13) char(10))
+	 (todpia = "Take one down and pass it around, ") 98 bob otw ".") 
more	output = cr (stanza ? (spand = span(dd = "0123456789")) . i
+	  (bsm = " bottle" ("s" | null)) $ bs 
+	  break(dd) . t1 spand *bs break("T") . t2 todpia 
+	  (*spand . j | "no more" *?(j = 100)) *bsm = 
+	 (nb = (gt(i = i - 1) i,"No more") " bottle"
+	  (eq(i,1),"s")) t1 replace(nb,"N","n") t2
+	 (eq(i) "Go to the store and buy some more, " ?(j = 100),
+	  todpia) (eq(j = j - 1) "no more", j) " bottle" (eq(j,1),"s"))
+							:s(more)
end```