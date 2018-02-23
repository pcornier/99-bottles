
## Language ObjectScript ##
---
- Author: Christian Meurin
- Date: 04/20/06
- Info: http
- Score:  (3.02 in 114 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-objectscript-1130.html
---

```// ObjectScript is a language for the Java VM that resembles a sort of
// simplified JavaScript. The language is small and easy to learn, yet
// powerful to utilize. It is licensed under LGPL.
//
// http://objectscript.sourceforge.net/

/**
 * This demonstrates how ObjectScript can distinguish a function as a class.
 * The code contained within that comes before the nested functions (treated
 * as class methods) is considered class constructor code.
 *
 * @author Christian Meurin
 * @version 1.0
 */
public function BottlesOfBeer() extends Object {
  public const var BEERMAX = 99;
  public const var LOWBEER = 1;
  public var beerCount;

  public function letsDoIt() {
    beerCount = BEERMAX;

    while (beerCount >= LOWBEER) {
      if (beerCount != LOWBEER) {
          writeln(beerCount + " bottles of beer on the wall,\n");
          writeln(beerCount + " bottles of beer.\n");
      } else {
          writeln("One more bottle of beer on the wall,\n");
          writeln("One more bottle of beer.\n");
      }

      writeln("Take one down, pass it around,\n");

      // Using if statement since ObjectScript doesn't have switch-case
      // statement.
      if (beerCount > LOWBEER) {
          writeln(beerCount + " more bottles of beer on the wall.\n");
      } else if (beerCount == LOWBEER) {
          writeln("One more bottle of beer on the wall.\n");
      } else {
          writeln("No more bottles of beer on the wall.\n");
      }
    }
    writeln("Ugh! I think I'm gonna be sick...");
  }
}```