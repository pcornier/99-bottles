
## Language TRIM ##
---
- Author: Henrik Nilsson
- Date: 04/20/05
- Info: http
- Score:  (2.88 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-trim-461.html
---

```{
/* pl/TRIM (http://www.trifox.com)
   Author: Henrik Nilsson (he_ni@hotmail.com) */

int b = 99;

while (b >= 1)
    {
    printf(b ^^ decode(b, 1, " bottle", " bottles") ^^ " of beer on the wall,");
    printf(b ^^ decode(b, 1, " bottle", " bottles") ^^ " of beer.");
    printf("Take one down, pass it around,");
    b--;
    if (b > 0)
        printf(b ^^ decode(b, 1, " bottle", " bottles") ^^ " of beer on the wall.");
    else
        printf("No more bottles of beer on the wall.");
    printf("");
    }
}```