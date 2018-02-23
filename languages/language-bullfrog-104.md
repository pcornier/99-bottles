
## Language Bullfrog ##
---
- Author: Ryan Kuserny
- Date: 04/20/05
- Info: n/a
- Score:  (2.40 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-bullfrog-104.html
---

```99 Bottles of Beer in Bullfrog
By Ryan Kuserny http://members.tripod.com/rkusnery/index.html

99
beer:
dup outn bottles doutsn wall doutsn
dup outn bottles doutsn dots doutsn
--
dup --!(onlyone morebeer-)*morebeer+jump
morebeer:
dup outn bottles doutsn wall doutsn
10 out
beer jump
onlyone:
onebottle doutsn wall doutsn
10 out
onebottle doutsn wall doutsn
onebottle doutsn dots doutsn
nomore doutsn bottles doutsn wall doutsn
end
bottles: " bottles of beer" datab 0
wall: " on the wall.
" datab 0
dots: "...
Take one down, pass it around,
" datab 0
onebottle: "One bottle of beer" datab 0
nomore: "No more" datab 0```