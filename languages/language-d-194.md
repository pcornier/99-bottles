
## Language D ##
---
- Author: Philipp Winterberg
- Date: 04/20/05
- Info: http
- Score:  (2.14 in 42 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-d-194.html
---

```// D version of 99 Bottles of beer (Bottles.d)
// (http://www.digitalmars.com/d/index.html).
// Philipp Winterberg, http://www.winterbergs.de

int main()
{
    for (int b = 99; b > 0; b--) 
    {
        printf("%d bottle(s) of beer on the wall,\n", b);
        printf("%d bottle(s) of beer.\n", b);
        printf("Take one down, pass it around,\n");
        printf("%d bottle(s) of beer on the wall.\n\n", (b-1));
    }
    return 0;
}```