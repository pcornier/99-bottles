
## Language AWK ##
---
- Author: Arnold Robbins
- Date: 01/25/08
- Info: n/a
- Score:  (2.97 in 31 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-awk-1677.html
---

```#! /usr/bin/awk

# beer.awk --- print the lyrics to the famous travelling song
# Arnold Robbins

BEGIN {
        # Setup
        take = "Take one down, pass it around"
        buy = "Go to the store and buy some more"

        Instruction[0] = buy
        Next[0] = 99
        Count[0, 1] = "No more"
        Count[0, 0] = "no more"

        for (i = 99; i >= 1; i--) {
                Instruction[i] = take
                Next[i] = i - 1
                Count[i, 0] = Count[i, 1] = (i "")
                Bottles[i] = "bottles"
        }
        Bottles[1] = "bottle"
        Bottles[0] = "bottles"
        # Execution
        for (i = 99; i >= 0; i--) {
                printf("%s %s of beer on the wall, %s %s of beer.\n",
                        Count[i, 1],
                        Bottles[i],
                        Count[i, 0],
                        Bottles[i])
                printf("%s, %s %s of beer on the wall.\n\n",
                        Instruction[i],
                        Count[Next[i], 0],
                        Bottles[Next[i]])
        }
}```