
## Language MechaniQue ##
---
- Author: MQSoft
- Date: 03/20/07
- Info: http
- Score:  (3.11 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mechanique-1424.html
---

```@^+beer*99
@[start]{beer*2}^:%%beer%% bottles of beer on the wall, %%beer%% bottles of beer
@{=beer*1}^:%%beer%% bottle of beer on the wall, %%beer%% bottle of beer
@^-beer
@{beer*2}^:Take one down and pass it around, %%beer%% bottles of beer on the wall.
@{=beer*1}^:Take one down and pass it around, %%beer%% bottle of beer on the wall.
@{!beer}^:Take one down and pass it around, no more bottles of beer on the wall.
@{beer}^->start
@^:No more bottles of beer on the wall, no more bottles of beer
@^:Go to the store and buy some more, 99 bottles of beer on the wall.
@fin```