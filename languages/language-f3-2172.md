
## Language F3 ##
---
- Author: Bryan Knowles
- Date: 08/29/09
- Info: 	http
- Score:  (4.00 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-f3-2172.html
---

```package sixpack;
import f3.ui.*;
import java.lang.System;

Frame {
  visible: true
  title: "99 Bottles of Beer"
  width: 720
  height: 100
  onClose: operation(){
    System.exit(0);
  }
  content:
    SimpleLabel {
      text: bind [foreach(l in [99..0])
        if (l == 0) then
          "No bottles of beer on the wall, No bottles of beer.\nTake none down, pass none
around.\nNo bottles of beer on the wall."
        else if (l == 1) then
          "One bottle of beer on the wall, One bottles of beer.\nTake it down, pass it
around.\nOne bottle of beer on the wall."
        else "{l} bottles of beer on the wall, {l} bottles of beer.\nTake one down, pass it
around.\n{l} bottles of beer on the wall."]
      [[0..100] dur 5000 linear]
    }
}```