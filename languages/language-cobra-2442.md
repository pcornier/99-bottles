
## Language Cobra ##
---
- Author: Tim Locke
- Date: 07/11/10
- Info: http
- Score:  (3.97 in 123 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cobra-2442.html
---

```# 99 Bottles of Beer

class BottlesOfBeerSong

    def pluralize(count as int) as String
        if count == 1
            return ""
        else
            return "s"

    def beer(bottles as int) as String
        if bottles == 0
            return "No more"
        else
            if bottles == -1
                return "99"
            else
                return bottles.toString

    def bottlesOfBeer(bottles as int) as String
        return .beer(bottles) + " bottle" + .pluralize(bottles) + " of beer"

    def onTheWall(bottles as int) as String
        return .bottlesOfBeer(bottles) + " on the wall"

    def bottleFall(bottles as int) as String
        if bottles == 0
            return "Go to the store and buy some more, "
        else
            return "Take one down and pass it around, "

    def main
        for bottle as int in 99 : -1 : -1
            print .onTheWall(bottle) + ", " + .bottlesOfBeer(bottle) + ","
            print .bottleFall(bottle) + .onTheWall(bottle-1) + "."
            print```