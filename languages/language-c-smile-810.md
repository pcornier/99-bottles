
## Language c-smile ##
---
- Author: Andrew (Andrei) Fedoniouk
- Date: 07/26/05
- Info: http
- Score:  (2.83 in 99 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-c-smile-810.html
---

```// C-SMILE version of 99 Bottles of beer (99bottles.csp)
// (http://c-smile.sourceforge.net).
// Andrew Fedoniouk, http://www.terrainformatica.com

function main()
{
    var b = 99;
    while (b > 0) 
    {
        std::out.printf("%d bottle(s) of beer on the wall,\n",b);
        std::out.printf("%d bottle(s) of beer.\n",b);
        std::out.printf("Take one down, pass it around,\n");
        std::out.printf("%d bottle(s) of beer on the wall.\n\n",--b);
    }
    return 0;
}```