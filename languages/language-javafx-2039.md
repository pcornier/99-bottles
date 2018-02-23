
## Language JavaFX ##
---
- Author: Filip Dreger
- Date: 04/13/09
- Info: http
- Score:  (2.29 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-javafx-2039.html
---

```function bottles (n:Integer){
    if (n == 1) then "1 bottle"
        else if (n == 0) then "no more bottles"
        else "{n} bottles";
}

for (x:Integer in [99..0 step -1]) {
    println (
        "{bottles(x).replaceFirst("n", "N")} of beer on the wall, {bottles(x)} of beer."
    );
    println (
        if (x!=0)
            then "Take one down and pass it around, {bottles(x-1)} of beer on the wall."
            else "Go to the store and buy some more, 99 bottles of beer on the wall."
    );
    println ("");
}```