
## Language F3 ##
---
- Author: Bryan Knowles
- Date: 07/25/09
- Info: http
- Score:  (2.92 in 12 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-f3-2151.html
---

```package sixpack;
import f3.ui.*;
import java.lang.System;

var lyrics = [];
for (count in [99..0]){
  var line = "";
  if (count == 0){
    line = "No bottles of beer on the wall, No bottles of beer.\nTake none down, pass none
around.\nNo bottles of beer on the wall.";
  } else if (count == 1){
    line = "One bottle of beer on the wall, One bottles of beer.\nTake it down, pass it around.\nOne
bottle of beer on the wall.";
  } else{
    line = "{count} bottles of beer on the wall, {count} bottles of beer.\nTake one down, pass it
around.\n{count} bottles of beer on the wall.";
  }
  insert line into lyrics;
}

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
      text: bind lyrics[[0..100] dur 5000 linear]
    }
}```