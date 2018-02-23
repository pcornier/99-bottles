
## Language MetaCard ##
---
- Author: Richard MacLemale
- Date: 04/20/05
- Info: n/a
- Score:  (4.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-metacard-389.html
---

```# This is 99 bottles of beer on the wall, in metacard.
# MetaCard is a RAD tool that is HyperCard on steroids for multiple
# platforms, available at www.metacard.com

on mouseup
     repeat with i = 99 down to 2
          answer i & "bottles of beer on the wall," & return & \
          i & "bottles of beer..." & return & \
          "Take one down, pass it around," & return & \
          (i-1) & "bottles of beer on the wall."
     end repeat
     --
     answer "1 bottle of beer on the wall," & return & \
     "1 bottle of beer..." & return & \
     "Take one down, pass it around, no bottles of beer on the wall."
     --
     answer "NO bottles of beer on the wall," & return & \
     "NO bottlse of beer..." & return & \
     "There's no beer left, that's the end."
end mouseUp```