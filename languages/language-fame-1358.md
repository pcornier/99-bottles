
## Language FAME ##
---
- Author: daveo
- Date: 12/19/06
- Info: http
- Score: No votes yet
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-fame-1358.html
---

```-- first, let's set up the text vars
block               -- isolates overwrite setting to this block
    overwrite on    -- option set to freely create variables
    %beer = " of beer"
    b=" bottle"
    %wall =" on the wall"
    c=", "
    p=".  "
    %Take="Take 1 down and pass it around, "
end block

-- next, define the quantity formula with "plurality" and caps where needed
-- (functions are database objects, formulae are "free code" thingys)
-- %plur takes 2 args: x:quantity and %Cap:"start of line" (boolean)

formula <over on> %plur = &&
    ( &&
        if (x eq 0) then ( &&
            (if (%Cap) then "N" else "n") &&
            + "o more" &&
        ) else &&
            string(x) &&
    ) &&
    + b + &&
    (if (x eq 1) then "" else "s")

-- Looping with a CASE range causes implicit looping 
--   with "N" as the loop counter var
-- EVAL does basic "in-line macro substitution" of vars 
--   in the formula before execution

display <case 100 to 1 step -1; image case row ""> &&
    eval(%plur, x=N-1, %Cap=TRUE) + %beer + %wall + c &&
    + eval(%plur, x=N-1, %Cap=FALSE) + %beer + p + NEWLINE &&
    + (if N eq MINCASE then &&
            "Go to the store and buy some more, " &&
            + eval(%plur, x=99, %Cap=FALSE) &&
       else %Take + eval(%plur, x=N-2, %Cap=FALSE)) &&
    + %beer + %wall + p + NEWLINE```