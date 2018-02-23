
## Language SAIL ##
---
- Author: William Soley
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sail-576.html
---

```COMMENT
  "99 Bottles of Beer" in SAIL (popular on PDP-10s)
  William Soley <soley@sun.com> 14-May-2003
;

BEGIN "99BOB"

  REQUIRE "{}" DELIMITERS;
  DEFINE crlf = {('15&'12)};

  INTEGER n;
  FOR n _ 99 STEP -1 UNTIL 1 DO
    BEGIN "Loop"
      STRING bottles;
      bottles _ IF n > 1 THEN " bottles " ELSE " bottle ";
      PRINT(n, bottles, "of beer on the wall.", crlf);
      PRINT(n, bottles, "of beer,", crlf);
      PRINT("take one down, pass it around,", crlf);
    END "Loop";
  PRINT("no more bottles of beer on the wall.", crlf);

END "99BOB"```