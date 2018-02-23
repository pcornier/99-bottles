
## Language Tutor ##
---
- Author: Chris Lopez
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tutor-475.html
---

```*--- Chris Lopez - lopez@huey.vp.uiuc.edu ---*
*--- start of code ---*
define
        maxbeer = 99
        origin:n1
        beer            $$ # of beers remaining
        atloc           $$ where to start writing this line
        nextlin(x) = (x <= (x+100) $mod$ 3200)
*
mode    rewrite
calc    beer  <= maxbeer
        atloc <= 1
loop
.       at      nextlin(atloc)
.       showt   beer,2
.       * Warning: trailing space on following line
.       write    bottles of beer on the wall,
.       showt   beer,2
.       write    bottles of beer.
.       at      nextlin(atloc)
.       write   Take one down, pass it around.
outloop ((beer<=beer-1) < 2)
.       showt   beer-1,2
.       write    bottles of beer.
endloop
*
write    1 bottle of beer.
at      nextlin(atloc)
write    1 Bottle of beer on the wall,  1 bottle of beer.
         Take it down, pass it around, no bottles of beer on the wall.
*
pause   keys=all
jumpout q

*--- end of code ---*```