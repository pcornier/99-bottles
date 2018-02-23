
## Language Draco ##
---
- Author: James Hicks
- Date: 04/20/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-draco-220.html
---

```An Amiga language combining features of  <a href=#c>C</a> and <a href=#pascal>Pascal</a>

/* 99 Bottles of Beer */
/* James Hicks (hicksjl@cs.rose-hulman.edu) */
/* 5 August 1996 */

int BEERS = 99;

proc main()void:

  uint i;

  for i from BEERS downto 1 do
    if i > 1 then
      writeln(i, " bottles of beer on the wall, ", i, " bottles of beer.");
    else
      writeln(i, " bottle of beer on the wall, ", i, " bottle of beer.");
    fi;
    writeln("Take one down, pass it around,");
    if i > 2 then
      writeln(i - 1, " bottles of beer on the wall.");
    elsif i > 1 then
      writeln(i - 1, " bottle of beer on the wall.");
    else
      writeln("No bottles of beer on the wall.");
    fi;
  od;

corp;```