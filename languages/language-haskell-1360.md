
## Language Haskell ##
---
- Author: Adrien Pi�rard
- Date: 12/25/06
- Info: http
- Score:  (3.02 in 146 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-haskell-1360.html
---

```Haskell isn't fun unless you use monads.
Monads aren't fun unless you use monad transformers :)

-- 

import Control.Monad.State

-- new data type
data Beer = B Int

-- factorize code a little bit
tk = "Take one down and pass it around, "
wall = " of beer on the wall.\n"
end 1 =  tk++"1 bottle"++ wall
end n =  tk++show n++" bottles"++wall

-- define the way our brand new data type shows up 
instance Show Beer where
  show (B 0) = "No more bottle of beer on the wall, no more bottle of beer.\n"
         ++ "Go to the store and buy some more, 99 bottles of beer on the wall."
  show (B 1) = "1 bottle of beer on the wall, 1 bottle of beer.\n"++end 0
  show (B n)   = show n++ " bottles of beer on the wall, " ++ show n ++
                 " bottles of beer.\n"++end (n-1)

-- This is not even a function, though it's recursive
-- Makes use of the IO monad over a State Int () monad
verse :: StateT Int IO ()
verse = do
  cpt <- get
  liftIO $ print (B cpt)
  put (cpt-1)
  if (cpt >=1) then verse else return ()

-- I say "now" !
main = runStateT verse 99```