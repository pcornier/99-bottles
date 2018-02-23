
## Language groovy ##
---
- Author: Akihito Tsukamoto
- Date: 08/14/05
- Info: http
- Score:  (3.00 in 63 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-groovy-837.html
---

```def bottlesOfBeer(n) {
    return "" + (n==0 ? "no more" : n) + (n==1  ? " bottle" : " bottles") + " of beer";
}

99.downto(1) {
    println bottlesOfBeer(it)+" on the wall, " + bottlesOfBeer(it) + "!"
    println "Take one down, pass it around,"
    println bottlesOfBeer(it-1)+" on the wall!"
    println ""
}```