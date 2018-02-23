
## Language NASL - Nessus Attack Scripting Language ##
---
- Author: Paul Dale
- Date: 05/12/05
- Info: http
- Score:  (2.91 in 117 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nasl---nessus-attack-scripting-language-640.html
---

```function bottles(n)
{
  if (n == 0)
    return "no bottles";
  if (n == 1)
    return "1 bottle";
  return i + " bottles";
}

for (i=100; i> 0; ) {
  display(bottles(n: i),' of beer on the wall, ', bottles(n: i),' of beer.\n');
  display('Take one down and pass it around,\n');
  display(bottles(n: --i), ' of beer on the wall.\n\n');
}```