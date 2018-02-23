
## Language Clean ##
---
- Author: Peter Achten
- Date: 04/19/07
- Info: http
- Score:  (2.94 in 17 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-clean-1460.html
---

```module bottles99
//  Compile with Clean 2.2 (http://clean.cs.ru.nl/) with Project:Project Options:No Return Type
import StdEnv

Start           :: *World -> *World
Start world
# (stdio,world) = stdio world
# (_,    world) = fclose (fwrites (foldr (+) "" [sing nr \\ nr<-[99,98..0]]) stdio) world
= world

the_wall        = " on the wall"

sing            :: Int -> String
sing n          = capitalize (bottles n) + the_wall + ", " + bottles n + ".\n"
                        +
                  if (n==0) 
                     ("Go to the store and buy some more, " + bottles 99 + the_wall + ".\n")
                     ("Take one down and pass it around, " + bottles (n-1) + the_wall + ".\n\n")

bottles 0       = "no more bottles of beer"
bottles n       = toString n + " bottle" + if (n==1) "" "s" + " of beer"

capitalize      :: String -> String
capitalize str  = toString (cap str.[0]) + str%(1,size str-1)

cap             :: Char -> Char
cap c           = if (isMember c ['a'..'z'])
                     (hd [['A'..'Z']!!i \\ c`<-['a'..'z'] & i<-[0..] | c`==c])
                     c

instance + String where (+) a b = a +++ b   // shorthand notation + instead of +++```