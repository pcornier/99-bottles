
## Language Luck ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: http
- Score:  (2.38 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-luck-366.html
---

```<A HREF=http://www.isg.sfu.ca/life/>Luck</A> is 
custom programming language.  99BoB code contributed by the creator.

luck: Beer99
proc: main
  new #bottles = 99
  loop: #bottles > 0

saysolo #bottles
    say " bottle(s) of beer on the wall."
    saysolo
#bottles
    say " bottle(s) of beer."
    say "Take one down and pass it
around."
    #bottles = #bottles - 1
    if: #bottles = 0
      saysolo "No
more"
    end
    if: #bottles > 0
      saysolo #bottles
    end
    say "
bottle(s) of beer on the wall."
    say
  end
end```