
## Language D ##
---
- Author: Stewart Gordon
- Date: 05/31/05
- Info: http
- Score:  (3.84 in 186 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-d-721.html
---

```import std.stdio;
import std.string;

void main() {
    int bottles = 99;
    char[] text = "99 bottles";

    while (bottles != 0) {
        writefln(text, " of beer on the wall,");
        writefln(text, " of beer.");
        writefln("Take one down, pass it around,");

        if (--bottles == 1) {
            text = "1 bottle";
        } else {
            text = format("%d bottles", bottles);
        }
        writefln(text, " of beer on the wall.\n");
    }
}```