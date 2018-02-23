
## Language WinBot Script (WBS) ##
---
- Author: Craig Edwards
- Date: 07/20/05
- Info: http
- Score:  (3.02 in 88 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-winbot-script-(wbs)-802.html
---

```When text matches: !beer
Sent by: * (*@*)
Perform these commands:

/SET $beers 99
:drinkmorebeer
/SET $plural {}
/IF $beer ne 1 /SET $plural {s}
/MSG $channel $beers bottle$plural of beer on the wall,
/MSG $channel $beers bottle$plural of $boldBEER$bold!
/MSG $channel Take one down, pass them around,
/MSG $channel $beers bottle$plural of beer on the wall!
/DEC $beers
/IF $beers ne 0 /goto drinkmorebeer
/MSG $channel ...who drank all my beer? :(```