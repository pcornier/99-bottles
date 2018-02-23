
## Language Scratch ##
---
- Author: Tim Locke
- Date: 06/01/07
- Info: http
- Score:  (3.01 in 76 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scratch-1500.html
---

```Project: 99 Bottles of Beer
Author: Tim Locke
Scratch: 1.1
Notes:

History:
    2007-5-31 23:16:08	save	99 Bottles of Beer		Tim Locke

Totals: 
    Sprites: 1
    Stacks: 3
    Unique costumes: 2
    Unique sounds: 0
--------
Sprite: Stage
  Costumes (1):
    brick-wall1 (480x360)
  Sounds (0):
  Stacks (1):
    when green flag clicked
        set bottles to 99
        forever 
            broadcast "sing" and wait
    end
--------
Sprite: Sprite1
  Costumes (1):
    bottle_of_beer (21x82)
  Sounds (0):
  Stacks (2):
    when I receive "sing"
        broadcast "bottles" and wait
        if bottles = 1 
            say bottle of beer on the wall, for 1.5 secs
        else
            say bottles of beer on the wall, for 1.5 secs
        broadcast "bottles" and wait
        if bottles = 1 
            say bottle of beer. for 1.5 secs
        else
            say bottles of beer. for 1.5 secs
        if bottles = 0 
            say Go to the store and buy some more, for 2 secs
            set bottles to 99
        else
            say Take one down and pass it around, for 2 secs
            change bottles by -1
        broadcast "bottles" and wait
        if bottles = 1 
            say bottle of beer on the wall. for 2 secs
        else
            say bottles of beer on the wall. for 1.5 secs
        wait 0.5 secs
        stop script
    end

    when I receive "bottles"
        if bottles = 0 
            say No more for 0.66 secs
        else
            say bottles for 0.66 secs
        stop script
    end

--------```