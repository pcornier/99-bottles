
## Language Haskell ##
---
- Author: Iavor
- Date: 03/03/06
- Info: http
- Score:  (4.01 in 504 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-haskell-1070.html
---

```bottles 0 = "no more bottles"
bottles 1 = "1 bottle"
bottles n = show n ++ " bottles"

verse 0   = "No more bottles of beer on the wall, no more bottles of beer.\n"
         ++ "Go to the store and buy some more, 99 bottles of beer on the wall."

verse n   = bottles n ++ " of beer on the wall, " ++ bottles n ++ " of beer.\n"
         ++ "Take one down and pass it around, " ++ bottles (n-1)
                                                 ++ " of beer on the wall.\n"

main      = mapM (putStrLn . verse) [99,98..0]```