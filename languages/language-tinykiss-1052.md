
## Language TinyKiss ##
---
- Author: Marcel Hendrix
- Date: 02/13/06
- Info: http
- Score:  (3.00 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-tinykiss-1052.html
---

```{ TinyKiss version of 99 Bottles of beer }

#include "tinykiss.lib"

procedure BOB (integer n) 
var string s;
BEGIN
  IF n  write(n); 
        IF n=1 s = ""; ELSE s="s"; ENDIF
  ELSE  write("no more"); s = "s";
  ENDIF write(" bottle" + s + " of beer")
END;

program sing;
BEGIN
  FOR 99 DOWNTO 1 STEP -1
      writeln(); 
      BOB(I); write(" on the wall, "); 
      BOB(I); write(".");
      writeln("Take one down, pass it around, ") 
      BOB(I-1); write(" on the wall.");
  ENDFOR   
END.```