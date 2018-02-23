
## Language KonsolScript ##
---
- Author: Mj Mendoza
- Date: 04/14/07
- Info: http
- Score:  (2.83 in 6 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-konsolscript-1450.html
---

```#define ESC_KEY_NOT_PRESS        B3 EQ false
#define PRESS_ESC_KEY            B3 = true;
#define ARROW_LEFT_IS_PRESSED    BL EQ true
#define ARROW_RIGHT_IS_PRESSED   BR EQ true
#define SCREEN_HEIGHT            screenheight
#define TEXT_WIDTH               textwidth

Var:String sMsg = "", sPart = "";
Var:Number nCtr, nY = SCREEN_HEIGHT, nX = 1;

function main() {
  Screen:Show()
  for (nCtr=99; nCtr>1; nCtr--) {
    sMsg = sMsg + nCtr + " bottles of beer on the wall, " + nCtr + " bottles of beer.\n" +
           "Take one down and pass it around, " + (nCtr-1) + " bottle of beer on the wall.\n\n";
  }

  sMsg = sMsg + nCtr + " bottles of beer on the wall, " + nCtr + " bottles of beer.\n" +
         "Take one down and pass it around, no more bottle of beer on the wall.\n\n" +
         "No more bottles of beer on the wall, no more bottle of beer.\n" +
         "Go to the store and buy some more, 99 bottles of beer on the wall.";
  
  while (ESC_KEY_NOT_PRESS) {
    Screen:CLS()
    Screen:GoToXY(nX, nY)
    Screen:PrintString(sMsg)
    Screen:Render()

    if (ARROW_LEFT_IS_PRESSED) {
      nX -= TEXT_WIDTH;
    } else if (ARROW_RIGHT_IS_PRESSED) {
      nX += TEXT_WIDTH;
    } else {
      nY--;
    }

    if (nY LE -4200) { PRESS_ESC_KEY }
  }
}```