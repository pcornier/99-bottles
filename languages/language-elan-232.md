
## Language ELAN ##
---
- Author: Michael Hocke
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-elan-232.html
---

```// By Michael Hocke (2002.06.24)

INT VAR number of bottles;

PROCEDURE print how many bottles are on the wall (INT CONST number):

  print number;
  print bottle;
  print trailing text.

  print number:
    IF number = 0 THEN
      put ("No")
    ELSE
      put (number)
    END IF.

  print bottle:
    out ("Bottle");
    IF no <> 1 THEN
      out ("s")
    END IF.

  print trailing text:
    out (" of beer").

END PROCEDURE print how many bottles are on the wall;

say hello;
print song;
say goodbye.

say hello:
  putline ("99 Bottles of Beer");
  putline ("==================");
  line.

print song:
  FOR number of bottles FROM 99 DOWNTO 1 REPEAT
    print first line;
    print second line;
    print third line
  END REPEAT.

say goodbye:
  line;
  putline ("=====================");
  putline ("You need a ride home?");
  line.

print first line:
  print how many bottles are on the wall (number of bottles);
  out (" on the wall, ");
  print how many bottles are on the wall (number of bottles);
  line.

print second line:
  putline ("Take one down and pass it around,").

print third line:
  print how many bottles are on the wall (number of bottles - 1);
  putline (" on the wall");
  line.```