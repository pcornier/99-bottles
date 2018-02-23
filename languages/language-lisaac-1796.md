
## Language Lisaac ##
---
- Author: Xavier
- Date: 06/05/08
- Info: http
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lisaac-1796.html
---

```Section Header

  + name := BOTTLES;

  - comment := "The cool song 99 bottles of beer!";

Section Private

  + b : STRING_CONSTANT := " bottles ";

Section Public

  - main <-
  (
    + v : INTEGER;
    99.downto 1 do { i : INTEGER;
      i.print;
      (b + "of beer on the wall, ").print;
      i.print;
      (b + "of beer.\nTake one down and pass it around, ").print;

      v := i - 1;
      (v = 0).if {
        "no more bottles of beer on the wall.".print;
        "\n\nNo more bottles of beer on the wall, no more bottles of beer.".print;
        "\nGo to the store and buy some more, 99 bottles of beer on the wall.\n".print;
      } else {
        v.print;
        (v == 1).if_true {
          b := " bottle ";
        };
        (b + "of beer on the wall.\n\n").print;
      };
    };
  );```