
## Language ABAP ##
---
- Author: Dominik Ritter
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 38 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-abap-12.html
---

```REPORT  z_99_bottles_of_beer.
*&---------------------------------------------------------------------*
*& Author: Dominik Ritter                                              *
*&---------------------------------------------------------------------*

DATA: nobottles  TYPE i.

START-OF-SELECTION.

  nobottles = 99.
  WHILE nobottles GT 1.

    WRITE:/(2) nobottles, ' bottles of beer on the wall, '.
    WRITE:/(2) nobottles, ' bottles of beer.'.
    WRITE:/ 'Take one down, pass it around, '.
    nobottles = nobottles - 1.
    WRITE:/(2) nobottles, ' bottles of beer on the wall.'.
    SKIP.

  ENDWHILE.

  WRITE:/ '1 bottle of beer on the wall,'.
  WRITE:/ '1 bottle of beer.'.
  WRITE:/ 'Take one down, pass it around, '.
  WRITE:/ 'no more bottles of beer on the wall.'.```