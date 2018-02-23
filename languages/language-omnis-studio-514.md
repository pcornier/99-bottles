
## Language Omnis Studio ##
---
- Author: Minh Hoac
- Date: 04/20/05
- Info: http
- Score:  (2.43 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-omnis-studio-514.html
---

```99 Bottles song in Omnis Studio (http://www.omnis-software.com/)
Author: Minh Hoac

Usage: 
Create a new library. Name it for instance 99Bottles.lbs
In the Startup_Task.$construct add:

[Local variable]:Count [Type]:Number [Subtype]:Short integer

For Count from 99 to 1 step -1
  OK message 99 Bottles song {[Count] bottle(s) of beer on the wall, [Count]
bottle(s) of beer.//Take one down and pass it around, [Count-1] bottle(s) of
beer on the wall}
End For```