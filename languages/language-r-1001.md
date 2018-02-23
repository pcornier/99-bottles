
## Language R ##
---
- Author: Roland
- Date: 01/04/06
- Info: http
- Score:  (3.00 in 57 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-r-1001.html
---

```
### "Recursive Bottles"
### 04 Jan 2006, Roland Rau, roland.rau@gmail.com
beersong <- function(n) {
  if (n==1) {
    cat("\n",n," bottle of beer on the wall, ",n,
        " bottles of beer.\nTake one down and pass it around,",
        " no more bottles of beer on the wall.\n", sep="")
    cat("\nNo more bottles of beer on the wall, no more bottles of beer.\n",
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n", sep="")
  } else {
    cat("\n",n," bottles of beer on the wall, ",n,
        " bottles of beer.\nTake one down and pass it around, ",
        n-1, " more bottles of beer on the wall.\n", sep="")
    return(beersong(n-1))
  }
}

beersong(99)```