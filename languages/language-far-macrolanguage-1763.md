
## Language Far macrolanguage ##
---
- Author: Kildor
- Date: 04/17/08
- Info: http
- Score:  (2.67 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-far-macrolanguage-1763.html
---

```macro:post ShiftF4 $text "99 bottles of beer in the wall.txt" CtrlEnter 
$if (Dialog)
  CtrlEnter CtrlA CtrlD
  $end
CtrlHome
$MMode 1
%b = 99;
%s = "s";

$while(%b>0)
  $if (%b==1)
    %s="";
    $end
  %string = %b+" bottle"+%s+" of beer on the wall, "+%b+" bottle"+%s+ " of beer";
  $text %string
  Enter
  $text "Take one and pass it around"
  Enter
  %b=%b-1;
  $if (%b!=0)
    %string= %b+" bottle"+%s+" of beer on the wall";
    $text %string
    Enter Enter
    $end
  sleep(10)
  $end

msgbox("No more bottles of beer on the wall.",
  "No more bottles of beer...\nGo to the store and buy some more...",
  1)```