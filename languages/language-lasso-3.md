
## Language Lasso 3.6.6 ##
---
- Author: Chris Latko
- Date: 04/20/05
- Info: http
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lasso-3.6.6-353.html
---

```See http://www.blueworld.com/ for more informations

[lasso_comment]
    Implementation of 99 Bottles of Beer in Lasso 3.6.6.
    Chris Latko
    http://www.latko.org/
    October 19, 2002
[/lasso_comment]

<html>
<head>
<title>99 Bottles of Beer</title>
</head>
<body>

[var_set:'bottleNo'='Bottles']

[loop:loopfrom=99,loopto=2,loopincrement=-1]
    [if:(loopcount)==1]
        [var_set:'bottleNo'='Bottle']
    [/if]
    [loopcount] [var:'bottleNo'] of Beer on the wall, [loopcount]
[var:'bottleNo'] of Beer,<br>

    [if:(math_sub:(loopcount),'1')==1]
        [var_set:'bottleNo'='Bottle']
    [/if]
    Take one down, pass it around, [math_sub:(loopcount),'1']
[var:'bottleNo'] of Beer on the wall
[/loop]

1 Bottle of Beer on the wall, 1 Bottle of Beer,
<br>Take one down, pass it around, no Bottles of Beer on the wall

</body>
</html>```