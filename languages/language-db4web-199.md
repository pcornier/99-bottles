
## Language DB4Web ##
---
- Author: Ruby
- Date: 04/20/05
- Info: n/a
- Score:  (2.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-db4web-199.html
---

```<HTML>
<body>
# DB4Web is a Siemens developed language used as CGI
# to produce dynamic websites. Main goal is the DB-Gateway
# It lived around 1999 and seems dead now.
# embedded in html, no procedures.
#
# Provided by (Ruby) "ed.lrefpeok@lp".reverse

<p>

.SET b=99
.WHILE b!=0
.IF b==1
    1 bottle of beer on the wall. 1 bottle of beer<br>
.ELSE
    :b bottles of beer on the wall, :b bottles of beer<br>
.ENDIF
take one down, pass it around<br>
.SET b=:b - 1

.ENDWHILE

no more bottles of beer <br>
Go to the store and buy some more
</p>
</body>
</html>```