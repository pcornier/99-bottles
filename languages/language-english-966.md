
## Language English ##
---
- Author: Kent Olsen
- Date: 11/29/05
- Info: n/a
- Score:  (3.06 in 50 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-english-966.html
---

```
    1  Does  COMMENT  text is  **********************************
    2   and  COMMENT  text is  *                                *
    3   and  COMMENT  text is  *  Beer -- '99 bottles of beer'  *
    4   and  COMMENT  text is  *                                *
    5   and  COMMENT  text is  *  K. D. Olsen  2004/02/20       *
    6   and  COMMENT  text is  *                                *
    7   and  COMMENT  text is  *  kent@nettally.com             *
    8   and  COMMENT  text is  *                                *
    9   and  COMMENT  text is  **********************************
   10   and  MOVE  88  to  BOTTLES
   11   and  LABEL  this line with
LOOP
   12   and  DISPLAY  BOTTLES
   13   and  DISPLAY  " bottles of beer on the wall."
   14   and  DISPLAY NEW LINE  count is  1
   15   and  DISPLAY BOTTLES
   16   and  DISPLAY  " bottles of beer."
   17   and  DISPLAY NEW LINE  count is  1
   18   and  DISPLAY  "Take one down, pass it around."
   19   and  DISPLAY NEW LINE  count is  1
   20   and  SUBTRACT  1  from  BOTTLES
   21   and  MOVE  DIFFERENCE  to  BOTTLES
   22   and  DISPLAY  BOTTLES
   23   and  " bottles of beer on the wall."
   24   and  DISPLAY NEW LINE  count is  2
   25   and  IF  BOTTLES  >  0
         do  GO TO  line labeled  LOOP
   26   and  DISPLAY  "No more bottles.  sigh...."```