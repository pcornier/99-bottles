
## Language ALClient ##
---
- Author: Grim
- Date: 05/18/05
- Info: http
- Score:  (2.65 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-alclient-662.html
---

```#set x_b = 99;
#while (x_b > 0)
{
   #pause 2;
   say $x_b$ bottles of beer on the wall.  $x_b$ bottles of beer...;
   say take one down and pass it around.;
   #set x_b = (x_b - 1);
   say $x_b$ bottles of beer on the wall.;
}
;```