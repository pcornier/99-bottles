
## Language Seed7 ##
---
- Author: Thomas Mertes
- Date: 10/16/07
- Info: http
- Score:  (3.00 in 18 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-seed7-1611.html
---

```$ include "seed7_05.s7i";

const proc: main is func
  local
    var integer: number is 0;
  begin
    for number range 99 downto 2 do
      write(   number <& " bottles of beer on the wall, ");
      writeln( number <& " bottles of beer.");
      write(  "Take one down and pass it around, ");
      writeln( pred(number) <& " bottles of beer on the wall.");
      writeln;
    end for;
    writeln("1 bottle of beer on the wall, 1 bottle of beer.");
    writeln("Take one down and pass it around, no more bottles of beer on the wall.");
    writeln;
    writeln("No more bottles of beer on the wall, no more bottles of beer.");
    writeln("Go to the store and buy some more, 99 bottles of beer on the wall.")    
  end func;```