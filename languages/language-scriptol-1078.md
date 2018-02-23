
## Language Scriptol ##
---
- Author: Sandrine Takis
- Date: 03/06/06
- Info: http
- Score:  (2.95 in 22 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scriptol-1078.html
---

```
`` Scriptol version of 99 bottles of beer
`` by Sandrine Takis - Public Domain

text bottle(int n)
    if n = 0 return "no more bottles of beer"
return text(n) + " bootle" + plural(n) + " of beer"

text  b1

for int i in 99 -- 0 step -1
    b1 = bottle(i)

	if i > 0
		print b1, "on the wall,", b1 + ","
		print	"take one down, pass it around,"
		print bottle(i - 1), "on the wall." 
	/if
/for```