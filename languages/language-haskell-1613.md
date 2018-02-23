
## Language Haskell ##
---
- Author: Simon Johansson
- Date: 10/25/07
- Info: n/a
- Score:  (3.02 in 174 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-haskell-1613.html
---

```--Version of http://99-bottles-of-beer.net/language-haskell-1070.html
--using guards.

bottles :: Int -> String
bottles n
        |n == 0 = "no more bottles"
        |n == 1 = "1 bottle"
        |n >  1 = show n ++ " bottles"

verse :: Int -> String
verse n
        |n == 0 = "No more bottles of beer on the wall, no more bottles of beer.\n"
                   ++ "Go to the store and buy some more, 99 bottles of beer on the wall."
        |n>0  = bottles n ++ " of beer on the wall, " ++ bottles n ++ " of beer.\n"
                   ++ "Take one down and pass it around, " ++ bottles (n-1)
                   ++ " of beer on the wall.\n"

main      = mapM (putStrLn . verse) [99,98..0]```