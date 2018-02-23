
## Language Kaya ##
---
- Author: Jost Stricker
- Date: 04/21/10
- Info: http
- Score:  (3.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-kaya-2367.html
---

```/*
 * 99 Bottles of Beer - in Kaya
 * by Jost Stricker | http://www.strickerz.dk
 * anno 2010
 */

program bottles;

import Regex;

data Bottle = newBottle(Int number);
data Wall = newWall([Bottle] bottles);

Void main() {
        b = [];
        for(i = 99; i > 0; i--) {
                push(b, newBottle(i));
        }
        wall = newWall(b);

        do {
                removeBottle(wall);
        } while(bottlesOnTheWall(wall));
}

Void removeBottle(Wall w) {
        b = shift(w.bottles);
        sing(b);
}

Bool bottlesOnTheWall(Wall w) {
        if(size(w.bottles) > 0) {
                return true;
        } else {
                return false;
        }
}

Void sing(Bottle b) {
        if(b.number > 1) {
                plural = "s";
                if(b.number != 2) {
                        str = "Take one down and pass it around, 99 bottles of beer on the wall.";
                } else {
                        str = "Take one down and pass it around, 99 bottle of beer on the wall.";
                }
        } else {
                plural = "";
                str = "Take one down and pass it around, no more bottles of beer on the wall.";

                end = "No more bottles of beer on the wall, no more bottles of beer. \nGo to the
store and buy some more, 99 bottles of beer on the wall.";
        }
        putStrLn(b.number + " bottle" + plural + " of beer on the wall, " + b.number + " bottle" +
plural + " of beer.");
        replace("99", String(b.number - 1), str);
        putStrLn(str + "\n");

        if(length(end) > 0) {
                putStrLn(end);
        }
}```