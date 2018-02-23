
## Language Bobo ##
---
- Author: Bayard W. Wenzel
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 26 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bobo-97.html
---

```The author (below) created the language. "Bobo" is Spanish for idiot.
## 99.bb v1.2
## Bayard W. Wenzel

# some handy macros

/nprint {"\n" add print} def
/space {"\n" print} def
/dec {dup get 1 sub def} def
/class-define {{get invoke} bind pop-dict} def

# i will use the bobo object protocol! it is cool.

/new-bar {
  13 /bar-dict create-dict

  /count 0 def
  /lyric-type "I'm a computer, I can't decide what to say," def

  /set-count {/count exch def} def
  /set-lyric-type {/lyric-type exch def} def

  # proper grammar counts

  /bottle-thing {
    /i exch rdef

    i 1 eq {
      i " bottle" add print
    } {
      i " bottles" add print
    } if-else
  } def

  # and, the meat of it!

  /beer-lyrics {
    /i exch rdef

    i bottle-thing " of beer on the wall," nprint
    i bottle-thing " of beer!" nprint
    lyric-type nprint
    i 1 sub bottle-thing " of beer on the wall." nprint space
  } def

  /final-lyrics {
     "0 bottles of beer on the wall," nprint
     "0 bottles of beer." nprint
     "Go into town, buy a new round," nprint
     "Get some more bottles of beer on the wall!" nprint
  } def

  /consume {
    count {
      count beer-lyrics
      /count dec
    } {
      final-lyrics
    } if-else
  } def

  class-define
} def

/song {
  /lyric-type exch rdef
  /count exch rdef

  /bar new-bar rdef

  count /set-count bar
  lyric-type /set-lyric-type bar  

  count 1 add {/consume bar} loop
} def

/messy "If one of those bottles should happen to fall," def
/thirsty "Take one down, pass it around," def

99 thirsty song```