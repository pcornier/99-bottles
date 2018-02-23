
## Language ALAN ##
---
- Author: Stephen Griffiths
- Date: 04/20/05
- Info: n/a
- Score:  (2.68 in 25 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-alan-23.html
---

```-- "99 Bottles of Beer" ALAN (v2.x) version
-- Stephen Griffiths, 1999
-- ALAN is a text adventure authoring system
-- webpage at http://www.welcome.to/alan-if

LOCATION Wall NAME '99' Bottles 'of' Beer
    HAS Bottles 99.
END LOCATION.

EVENT Sing
    "$p"
    SAY Bottles OF Wall.
    "bottle"
    IF Bottles OF Wall > 1 THEN
        "$$s"
    END IF.
    "of beer on the wall,"
    "$n"
    SAY Bottles OF Wall.
    "bottle"
    IF Bottles OF Wall > 1 THEN
        "$$s"
    END IF.
    "of beer."
    "$nTake"
    IF Bottles OF Wall > 1 THEN
        "one"
    ELSE
        "it"
    END IF.
    "down, pass it around,"
    DECREASE Bottles OF Wall.
    IF Bottles OF Wall > 0 THEN
        "$n"
        SAY Bottles OF Wall.
        "bottle"
        IF Bottles OF Wall > 1 THEN
        "$$s"
        END IF.
        "of beer on the wall."
        SCHEDULE Sing AFTER 0.
    ELSE
        "$nNo bottles of beer on the wall,"
        "$nNo bottles of beer."
        QUIT.
    END IF.
END EVENT.

START AT Wall.
SCHEDULE Sing AFTER 0.```