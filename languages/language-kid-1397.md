
## Language kid ##
---
- Author: Arvin Schnell
- Date: 02/13/07
- Info: http
- Score:  (2.89 in 9 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-kid-1397.html
---

```<?xml version="1.0" encoding="utf-8"?>

<!--! Author: Arvin Schnell -->
<!--! Tested with kid 0.9.4 on openSUSE 10.2, run: -->
<!--! kid beer.kid > beer.html -->

<?python

max_bottles = 99

def nbs (num, upper = False):
    if num == 0:
        return ["no", "No"][upper] + " more bottles of beer"
    elif num == 1:
        return "1 bottle of beer"
    else:
        return "%s bottles of beer" % num

?>

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:py="http://purl.org/kid/ns#">

<head>
    <title>99 Bottles of Beer</title>
</head>

<body>

<p py:for="n in xrange (max_bottles, -1, -1)">
<span py:strip="True">
${nbs(n, True)} on the wall, ${nbs(n)}.
</span>
<br/>
<span py:if="n >= 1" py:strip="True">
Take one down and pass it around, ${nbs(n-1)} on the wall.
</span>
<span py:if="n == 0" py:strip="True">
Go to the store and buy some more, ${nbs(max_bottles)} on the wall.
</span>
</p>

</body>

</html>```