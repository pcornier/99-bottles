
## Language Mops ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.60 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mops-405.html
---

```\ Mops Beer (object paradigm)
\ by Bruce Bennett

:class BEER super{ object }

record{
          var   n
}

private

:m lastBottle:
        cr ." 1 last bottle of beer on the wall," cr
        ." Only 1 bottle of beer." cr
        ." Take it down, pass it around --" cr
        ." No more bottles of beer!" cr
;m

public

:m bottlesOf: { n -- }
        1 n DO
            i 1 = IF lastBottle: self LEAVE THEN cr
            i . ." bottles of beer on the wall," cr
            i . ." bottles of beer." cr
            ." Take one down, pass it around," cr
            i 2 = IF i 1 - . ." last bottle of beer." ELSE
            i 1 -  . ." bottles of beer on the wall." THEN cr
        -1 +LOOP
;m

;class

beer    beer!

99 bottlesOf: beer!```