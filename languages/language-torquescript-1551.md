
## Language TorqueScript ##
---
- Author: Soldier of Light
- Date: 07/19/07
- Info: http
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-torquescript-1551.html
---

```function beer()
{
   for(%i = 99; %i >= 0; %i--)
   {
      if(%i == 1)
      {
         echo("1 more bottle of beer on the wall, 1 more bottle of beer.
Take it down, pass it around, no more bottles of beer on the wall.");
      }
      else if(%i == 0)
      {
         echo("No more bottles of beer on the wall, no more bottles of beer.
Go to the store, buy some more, 99 bottles of beer on the wall.");
      }
      else
      {
         echo(%i @ " more bottles of beer on the wall, " @ %i @ " more bottles of beer.
Take one down, pass it around, " @ (%i - 1) @ " bottles of beer on the wall.");
      }
   }
}
beer();```