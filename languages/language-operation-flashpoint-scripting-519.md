
## Language Operation Flashpoint Scripting ##
---
- Author: Unknown
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-operation-flashpoint-scripting-519.html
---

```; beer.sqs
;
; by Jussi Tawaststjerna
; fd@finnishplatoon.org
;
; for Operation Flashpoint scripting language
;
counter = 99;
unit = "bottles";
#loop
? counter == 1: goto "end";
hint format ["%1 %2 of beer on the wall",counter,unit];
~2
? (counter - 1) == 1: unit = "bottle";
hint format ["Take one down and pass it around, you got %1 %2 of beer on
the wall.",(counter - 1),unit];
counter = counter - 1;
~3
goto "loop";

#end
hint "Only one bottle of beer on the wall";
~2
hint "Take one down and pass it around, and you're out of beer. Damn."
exit;```