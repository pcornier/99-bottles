
## Language EDI C ##
---
- Author: Kurt Svensson
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 123 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-edi-c-230.html
---

```// Author: Kurt Svensson, www.inobiz.se, 2003-05-23
const drinkingtime = -300; // Milliseconds
main()
    {
    for (integer bottles = 99; bottles; )
        {
       println (bottles & txt(bottles) & " of beer on the wall");
       println (bottles-- & txt(bottles) & " of beer.");
       println ("Take one down, pass it around,\r\n");
       sleep (drinkingtime);
       }
    println ("Now they are all gone");
    }

string txt (integer bottles)
    {
    string b = " bottle";
    b &= bottles > 1 ? "s";
    return b;
    }
// end-of-program```