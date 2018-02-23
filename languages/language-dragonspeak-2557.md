
## Language DragonSpeak ##
---
- Author: Viktor Vanguard
- Date: 11/29/10
- Info: http
- Score:  (2.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dragonspeak-2557.html
---

```DSPK V04.00 Furcadia

(0:0) When everything is starting up,
            (5:300) set variable %beer to the value 99.
            (5:50) set countdown timer 1 to go off in 1 seconds.

(0:50) When countdown timer 1 goes off,
   (1:201) and variable %beer is more than 2,
            (5:204) emitloud message {%beer bottles of beer on the wall, %beer bottles of beer.} to
everyone on the map.
            (5:304) take variable %beer and subtract 1 from it.
            (5:204) emitloud message {Take one down and pass it around, %beer bottles of beer on the
wall.} to everyone on the map.
            (5:50) set countdown timer 1 to go off in 1 seconds.

(0:50) When countdown timer 1 goes off,
   (1:200) and variable %beer is equal to 2,
            (5:204) emitloud message {%beer bottles of beer on the wall, %beer bottles of beer.} to
everyone on the map.
            (5:304) take variable %beer and subtract 1 from it.
            (5:204) emitloud message {Take one down and pass it around, %beer bottle of beer on the
wall.} to everyone on the map.
            (5:50) set countdown timer 1 to go off in 1 seconds.

(0:50) When countdown timer 1 goes off,
   (1:200) and variable %beer is equal to 1,
            (5:204) emitloud message {%beer bottle of beer on the wall, %beer bottle of beer.} to
everyone on the map.
            (5:304) take variable %beer and subtract 1 from it.
            (5:204) emitloud message {Take one down and pass it around, %beer bottles of beer on the
wall.} to everyone on the map.
            (5:50) set countdown timer 1 to go off in 1 seconds.

(0:50) When countdown timer 1 goes off,
   (1:200) and variable %beer is equal to 0,
            (5:204) emitloud message {No more bottles of beer on the wall, no more bottles of beer.}
to everyone on the map.
            (5:300) set variable %beer to the value 99.
            (5:204) emitloud message {Go to the store and buy some more, %beer bottles of beer on
the wall.} to everyone on the map.
            (5:50) set countdown timer 1 to go off in 1 seconds.

*Endtriggers* 8888 *Endtriggers*```