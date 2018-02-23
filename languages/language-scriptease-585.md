
## Language ScriptEase ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (1.00 in 7 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-scriptease-585.html
---

```// ScriptEase version of 99 Bottles of beer (Bottles.jsa)
// See http://www.sedesk.com/us/desktop/
// Philipp Winterberg, http://www.winterbergs.de

#include <inout.jsh>

a = " bottle(s) of beer"; 
c = " on the wall"; 
d = "Take one down, pass it around,";

for (b = 99 ; b > 0 ; b--) 
  Clib.printf("%d%s%s,\n%d%s.\n%s\n%d%s%s.\n\n", b, a, c, b, a, d, (b - 1), a, c);

PauseForWin(''); 
Clib.exit(EXIT_SUCCESS);```