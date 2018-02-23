
## Language D++ ##
---
- Author: Null1024
- Date: 01/26/07
- Info: n/a
- Score:  (2.00 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-d++-1382.html
---

```'99 Bottles of Beer in D++
'App by Null1024
'Get D++ at www.pagemac.com

newvar beer;

function main()
{
for beer = 99 to 1 step -1;

  if beer > 1 then
    screenout beer & " bottles of beer on the wall,"; screen;
    screenout beer & " bottles of beer,"; screen;
    screenout "Take one down, pass it around,"; screen;
    screenput beer & " bottles of beer on the wall,"; screen; screen;
  endif

  if beer = 1 then
    screenout "1 bottle of beer on the wall,"; screen;
    screenout "1 bottle of beer,"; screen;
    screenout "Take one down, pass it around,"; screen;
    screenput "1 bottle of beer on the wall,"; screen; screen;
  endif;

next beer;
screenput "We need more beer."; screen;
pak;
end;
}```