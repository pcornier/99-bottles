
## Language Ursala ##
---
- Author: Dennis Furey
- Date: 07/13/08
- Info: http
- Score:  (2.50 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ursala-1819.html
---

```# compile with --show to display the lyrics

#import nat

# each function takes a natural number to a block of text

quantity = # forms the appropriate plural

~&iNC+ --' of beer'+ ~&?(
   1?=/'1 bottle'! --' bottles'+ ~&h+ %nP,
   'no more bottles'!)

verse =

^(successor,~&); ("s","n"). -[
   -[quantity "s"]- on the wall, -[quantity "s"]-,
   Take one down and pass it around, -[quantity "n"]- on the wall.]-

refrain "n" =

-[
   No more bottles of beer on the wall, -[quantity 0]-.
   Go to the store and buy some more, -[quantity "n"]- on the wall.]-

whole_song "n" = ~&tttt2SPSNiCSL (verse*x iota "n")--<refrain "n">

main = whole_song 99```