
## Language IRCII ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.38 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ircii-336.html
---

```This is the scripting language for Inter Relay Chat.

alias bottles.start {
        while (1) {
                @ bottles.count = 99;
                while ( bottles.count )
                {
                        bottles.sayonwall ,
                        bottles.say
                        echo Take one down and pass it around
                        @ bottles.count = bottles.count - 1
                        bottles.sayonwall .
                        echo
                }
                echo No more bottles of beer on the wall,
                echo no more bottles of beer,
                echo Go to the store and buy some more,
                echo 99 bottles of beer on the wall.
                echo
        }
}

alias bottles.sayonwall echo $bottles.count bottles of beer on the wall$0
alias bottles.say echo $bottles.count bottles of beer,

bottles.start```