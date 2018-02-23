
## Language FAME ##
---
- Author: daveo
- Date: 12/18/06
- Info: http
- Score:  (3.00 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-fame-1356.html
---

```-- first, let's set up the text vars
block
    overwrite on
    beer = " of beer"
    b=" bottle"
    wall =" on the wall"
    c=", "
    p="."
    d="Take 1 down and pass it around, "
end block

-- next, define the quantity formula with "plurality" and caps where needed
-- (functions are database objects, formulae are "free code" thingys)
-- %plur takes 2 args: x:quantity and y:"start of line" (1=yes)
formula <over on> %plur = &&
    ( &&
        if (x eq 0) then ( &&
            (if (y eq 1) then "N" else "n") &&
            + "o more" &&
        ) else &&
            string(x) &&
    ) &&
    + b + &&
    (if (x eq 1) then "" else "s")

loop for i = 99 to 0 step -1
--  EVAL does "macro substitution" of vars in the formula
    type eval(%plur, x=i, y=1) + beer + wall + c + eval(%plur, x=i, y=0) + beer + p

    if i eq 0
        type "Go to the store and buy some more, " + eval(%plur, x=99, y=0) + beer + wall + p
    else 
        type <deci 0> d + eval(%plur, x=i-1, y=0) + beer + wall + p
    end if

    type ""

end loop```