
## Language VGL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vgl-167.html
---

```// See http://www.iolanguage.com/

b := method(i,
      if(i==0, return "no more bottles of beer")
      if(i==1, return "1 bottle of beer")
      return "" .. i .. " bottles of beer"
)

for(i, 99, 1,
      write(b(i), " on the wall, ", b(i),
           "\ntake one down, pass it around,\n",
           b(i - 1), " on the wall.\n\n")
)```