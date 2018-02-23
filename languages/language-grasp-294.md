
## Language GrASP ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-grasp-294.html
---

```GrASP is used for controlling the GrASP animation program.

video 1
local var1 99
local var2 24
mark 98
text 1 @var2 @var1
text " bottle(s) of beer on the wall,"
text 1 @var2-1 @var1
text " bottle(s) of beer!"
text 1 @var2-2 "Take one down, pass it around,"
text 1 @var2-3 @var1-1
text " bottle(s) of beer on the wall!"
waitkey 500
set var1 @var1-1
loop```