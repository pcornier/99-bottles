
## Language Cold Fusion ##
---
- Author: S. Isaac Dealey
- Date: 04/20/05
- Info: n/a
- Score:  (2.90 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cold-fusion-138.html
---

```By S. Isaac Dealey

<cfscript>
   function beerSong(x) {
      b = iif(x gt 1, DE("bottles"), DE("bottle"));
      if (x) {
        WriteOutput("#x# #b# of beer on the wall...<br>#x# #b# of beer!</br>");
        WriteOutput("Take one down, pass it around...<br>";
        beerSong( x - 1 );
      }
      else
      {
        WriteOutput("No bottles of beer on the wall");
      }
   }
   beerSong(99);
</cfscript>```