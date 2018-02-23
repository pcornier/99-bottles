
## Language ABAP ##
---
- Author: Dominik Ritter
- Date: 04/20/05
- Info: n/a
- Score:  (2.90 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-abap-55.html
---

```REPORT  z_99_bottles_of_beer.
*&---------------------------------------------------------------------*
*& Author: Dominik Ritter                                              *
*& Sprache: ABAP-Objects                                               *
*& Version: SAP R/3 4.6c
*&---------------------------------------------------------------------*

CLASS shelf DEFINITION.
  PUBLIC SECTION.
    METHODS:  constructor      IMPORTING value(bottles) TYPE i,
              take_bottles     IMPORTING value(n) TYPE i,
              bottles_left     EXPORTING value(bottles) TYPE i.
  PROTECTED SECTION.
    DATA: no_bottles TYPE i.
ENDCLASS.

CLASS shelf IMPLEMENTATION.
  METHOD constructor.
    no_bottles = bottles.
  ENDMETHOD.

  METHOD take_bottles.
    no_bottles = no_bottles - n.
  ENDMETHOD.

  METHOD bottles_left.
    bottles = no_bottles.
  ENDMETHOD.

ENDCLASS.

DATA: beer           TYPE REF TO shelf.
DATA: bottlesonshelf TYPE i.

START-OF-SELECTION.

  CREATE OBJECT: beer EXPORTING bottles = 99.

  CALL METHOD beer->bottles_left IMPORTING bottles = bottlesonshelf.

  WHILE bottlesonshelf GT 1.

    WRITE:/(2) bottlesonshelf, ' bottles of beer on the wall, '.
    WRITE:/(2) bottlesonshelf, ' bottles of beer.'.
    WRITE:/ 'Take one down, pass it around, '.
    CALL METHOD beer->take_bottles EXPORTING n = 1.
    CALL METHOD beer->bottles_left IMPORTING bottles = bottlesonshelf.
    WRITE:/(2) bottlesonshelf, ' bottles of beer on the wall.'.
    SKIP.

  ENDWHILE.

  WRITE:/ '1 bottle of beer on the wall,'.
  WRITE:/ '1 bottle of beer.'.
  WRITE:/ 'Take one down, pass it around, '.
  WRITE:/ 'no more bottles of beer on the wall.'.```