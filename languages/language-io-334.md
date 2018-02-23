
## Language Io ##
---
- Author: Laurent Vogel
- Date: 04/20/05
- Info: http
- Score:  (3.59 in 160 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-io-334.html
---

```See http://www.dekorte.com/Software/C/Io/

bottle = block(i,
     if(i==0, return "no more bottles of beer")
     if(i==1, return "1 bottle of beer")
     return "" .. i .. " bottles of beer"
)

for(i, 99, 1,
     current = bottle(i)
     write(current, " on the wall, ", current, ",\n",
	  "take one down, pass it around,\n",
	  bottle(i - 1), " on the wall.\n\n")
)```