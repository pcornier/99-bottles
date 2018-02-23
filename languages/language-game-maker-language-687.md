
## Language Game Maker Language ##
---
- Author: Jake Gilbert
- Date: 05/25/05
- Info: http
- Score:  (2.69 in 26 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-game-maker-language-687.html
---

```//in create event:
bottles    = 99;
s          = "s";
sm1        = "s";
room_speed = 1;
text       = "";


//in draw event:
if ((bottles>2) || (bottles=0)) {s = "s"; sm1 = "s";}
if (bottles = 1) {s = ""; sm1 = "s";}
if (bottles = 2) {s = "s"; sm1 = "";}

text =  (string(bottles) + " bottle" + s + " of beer on the wall, ");
text += (string(bottles) + " bottle" + s + " of beer." + "#");
text += ("Take one down, pass it around, ");
text += (string(bottles-(bottles>0)) + " bottle" + sm1 + " of beer on the wall.");
draw_text(10,10,text);
if (bottles > 0) bottles -= 1;```