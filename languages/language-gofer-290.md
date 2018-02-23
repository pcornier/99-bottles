
## Language Gofer ##
---
- Author: Bow-Yaw Wang
- Date: 04/20/05
- Info: http
- Score:  (1.92 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gofer-290.html
---

```Gofer is a variation of Haskell. 
<a href=http://www.cs.yale.edu/HTML/YALE/CS/haskell/yale-fp.html>More Information</a>

-- 99 bottles of beer (gofer version)
-- Written by Bow-Yaw Wang (bywang@saul.cis.upenn.edu)

radix 0 _ = []
radix x n = (x `mod` n):(radix (x/n) n)

itoa x = map (\x -> chr(x + ord('0'))) (reverse (radix x 10))

bottles :: Int -> Dialogue

bottles 1 resps = [AppendChan stdout "1 bottle of beer on the wall, ",
                   AppendChan stdout "1 bottle of beer.\n",
                   AppendChan stdout "Take one down, pass it around, ",
                   AppendChan stdout "no more bottles of beer on the wall.\n"]
bottles n resps = [AppendChan stdout (itoa n),
                   AppendChan stdout " bottles of beer on the wall, ",
                   AppendChan stdout (itoa n),
                   AppendChan stdout " bottles of beer.\n",
                   AppendChan stdout "Take one down, pass it around, ",
                   AppendChan stdout (itoa (n-1)),
                   AppendChan stdout " bottles of beer on the wall.\n"] ++
                   bottles (n-1) resps```