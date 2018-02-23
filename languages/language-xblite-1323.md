
## Language XBLite ##
---
- Author: Guy Lonne
- Date: 11/11/06
- Info: http
- Score:  (3.02 in 131 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-xblite-1323.html
---

```PROGRAM "test"
VERSION "1.0"
CONSOLE

DECLARE FUNCTION Entry ()

FUNCTION Entry ()

  FOR b = 99 TO 3 STEP -1
    ? b; " bottles of beer on the wall,"; b; " bottles of beer."
    b_1 = b - 1
    ? "Take one down and pass it around,"; b_1; " bottles of beer on the wall.\n"
  NEXT b

  ? "2 bottles of beer on the wall, 2 bottles of beer."
  ? "Take one down and pass it around, 1 bottle of beer on the wall.\n"

  ? "1 bottle of beer on the wall, 1 bottle of beer."
  ? "Take one down and pass it around, no more bottles of beer on the wall.\n"

  ? "No more bottles of beer on the wall, no more bottles of beer."
  ? "Go to the store and buy some more, 99 bottles of beer on the wall.\n"

  a$ = INLINE$ ("Press Enter to quit >")

END FUNCTION
END PROGRAM```