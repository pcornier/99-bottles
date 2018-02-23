
## Language WordPerfect Macro ##
---
- Author: Feherke
- Date: 09/29/05
- Info: n/a
- Score:  (3.00 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-wordperfect-macro-896.html
---

```{;}99 bottles of beer~

{ASSIGN}nr~99~
{WHILE}1~
        {CALL}beer~ on the wall,{Enter}
        {CALL}beer~.{Enter}
        {ASSIGN}nr~{VARIABLE}nr~-1~
        {IF}{VARIABLE}nr~>-1~
                Take one down and pass it around,{Enter}
                {CALL}beer~ on the wall.{Enter}
        {ELSE}
                {ASSIGN}nr~99~
                Go to the store and buy some more,{Enter}
                {CALL}beer~ on the wall.{Enter}
        {END IF}
        {Enter}
        {IF}{VARIABLE}nr~=99~
                {BREAK}
        {END IF}
{END WHILE}

{RETURN}

{LABEL}beer~
        {IF}{VARIABLE}nr~!=0~
                {VARIABLE}nr~
        {ELSE}
                No more
        {END IF}
         bottle
        {IF}{VARIABLE}nr~!=1~
                s
        {END IF}
         of beer
{RETURN}```