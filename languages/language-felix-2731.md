
## Language Felix ##
---
- Author: Marinus Oosters
- Date: 08/11/11
- Info: http
- Score:  (3.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-felix-2731.html
---

```var bottles:int = 99;

proc bottletxt(b:int) {
    match b with
    | -1       => { print "99 bottles"; }
    | 0        => { print "No more bottles"; }
    | 1        => { print "1 bottle"; }
    | 2 .. 100 => { print b; print " bottles"; }
    endmatch;
}

proc line1(b:int) {
    bottletxt b;
    println " of beer on the wall,";
}

proc line2(b:int) {
    bottletxt b;
    println " of beer,";
}

proc line3(b:int) {
    println if b == 0 then 
       "Go to the store and buy some more,"
    else
       "Take one down and pass it around,"
    endif;
}

proc line4(b:int) {
    bottletxt b;
    println " of beer on the wall.\n";
}

while { bottles >= 0 } {
    line1 bottles;
    line2 bottles;
    line3 bottles;
    --bottles;
    line4 bottles;
};```