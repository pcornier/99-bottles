
## Language Dot Tool ##
---
- Author: Christopher Winter
- Date: 04/20/05
- Info: n/a
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dot-tool-218.html
---

```Dot-Tool is a self-written development-tool from Christopher
Winter, employee of Siemens VDO Automotive AG, and is used 
within the software development and simulation of the multi-
function-displays of Siemens VDO.



@99Bottles
 // 99 bottles of beer with DOT-Tool Macro
 // DOT-Tool - dot-display-simulation
 // (c) Christopher Winter
 
 // set display dimensions
 MODE("FREI", 193, 36);
 // show dot
 PAGE(3);
 // switch on dot-grid
 GRID(1);
 ANIMATE(0);
 // drink!
 FOR (i=99; i > 0; i--) {
  CLS();
  TEXT(1, 1,2,itoa(i)+" BOTTLES OF BEER ON THE WALL,");
  TEXT(1,10,2,itoa(i)+" BOTTLES OF BEER");
  TEXT(1,19,2,"TAKE ONE DOWN AND PASS IT AROUND");
  TEXT(1,28,2,itoa(i-1)+" BOTTLES OF BEER ON THE WALL");
  UPDATE();
  ANIMATE(2);
  PAUSE(100);
  ANIMATE(1);
 }
 ANIMATE(3, "99BOTTLES.GIF");```