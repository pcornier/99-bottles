
## Language Euphoria ##
---
- Author: D. Stanger
- Date: 04/20/05
- Info: http
- Score:  (1.67 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-euphoria-243.html
---

```By: D. Stanger. 
Euphoria can be found here: http://www.rapideuphoria.com/

-- Program start

for i = 99 to 1 by -1 do
	printf(1,"%d bottles of beer on the wall\n",{i})
	printf(1,"%d bottles of beer\n",{i})
	puts(1, "Take one down, pass it around\n")
	printf(1,"%d bottles of beer on the wall\n\n",{i-1})
end for

--Program end```