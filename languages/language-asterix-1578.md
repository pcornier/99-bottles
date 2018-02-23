
## Language Asterix ##
---
- Author: Gordon Henderson
- Date: 08/16/07
- Info: http
- Score:  (2.92 in 106 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-asterix-1578.html
---

```; *99:
;       99 bottles of beer on the wall.
;

; Until end of 2007 you may dial +44 1364 698 225
; to see this in action (limited to three bottles)

; Voicefiles available: http://www.drogon.net/dsx/bottles.tar.bz2

exten => *99,1,Noop(99 Bottles of beer on the wall)
exten => *99,n,Answer()
exten => *99,n,Set(bottles=3)

exten => *99,n(loop),Noop(${bottles} bottles of beer on the wall)
exten => *99,n,SayNumber(${bottles})
exten => *99,n,Playback(/data/tmp/bottles1)
exten => *99,n(loop),Noop(${bottles} bottles of beer)
exten => *99,n,SayNumber(${bottles})
exten => *99,n,Playback(/data/tmp/bottles2)
exten => *99,n,Noop(Take one done and pass it round and there's)
exten => *99,n,Playback(/data/tmp/takebottle)
exten => *99,n,Set(bottles=$[${bottles}-1])
exten => *99,n,GotoIf($["${bottles}" = "0"]?nomore)
exten => *99,n,Noop(${bottles} bottles of beer on the wall)
exten => *99,n,SayNumber(${bottles})
exten => *99,n,Playback(/data/tmp/bottles3)
exten => *99,n,Goto(loop)

exten => *99,n(nomore),Noop(No more bottles of beer on the wall)
exten => *99,n,Playback(/data/tmp/nomore)
exten => *99,n,Hangup()```