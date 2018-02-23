
## Language ABAP ##
---
- Author: David Lacorre
- Date: 11/19/08
- Info: n/a
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-abap-1919.html
---

```*&---------------------------------------------------------------------*
*& Report  Z99_BOTTLES
*&---------------------------------------------------------------------*
* Author : David Lacorre
*&---------------------------------------------------------------------*
REPORT  z99_bottles
.
DATA w_index      TYPE i.

*----------------------------------------------------------------------*
* Allow users to change the maximum bottle capacity on the wall
* Default walls contains up to 99 bottles
*----------------------------------------------------------------------*
PARAMETERS pa_max       TYPE i            DEFAULT 99.

*----------------------------------------------------------------------*
* Main Program
*----------------------------------------------------------------------*
START-OF-SELECTION
.
  DO pa_max TIMES
  .
    w_index = pa_max - sy-index + 1.
    PERFORM
      : describe_bottles         USING    w_index
      , take_one_down            CHANGING w_index
      , describe_bottles_on_wall USING    w_index
      .
    SKIP.
  ENDDO.
*
  PERFORM
    : describe_bottles           USING 0
    , go_to_store
    , describe_bottles_on_wall   USING pa_max
    .

*----------------------------------------------------------------------*
* Forms (Abap functions) and MACROS
*----------------------------------------------------------------------*

*----------------------------------------------------------------------*
* MACRO beg_describe : Data definition for "describe" Forms
*----------------------------------------------------------------------*
DEFINE beg_describe
.
  DATA
    : l_nb(10)
    , l_bottle(7)
    , l_line(80)
    .
  PERFORM find_text_number   USING p_nb_bottles  CHANGING l_nb.
  PERFORM find_text_bottle   USING p_nb_bottles  CHANGING l_bottle.
END-OF-DEFINITION.

*&---------------------------------------------------------------------*
*&      Form  describe_bottles_on_wall
*&---------------------------------------------------------------------*
FORM describe_bottles_on_wall  USING p_nb_bottles   TYPE i
.
  beg_describe.

  CONCATENATE    l_nb  l_bottle 'of beer on the wall.'
    INTO         l_line
    SEPARATED BY space
    .
  WRITE l_line.
ENDFORM.                    "describe_bottles

*&---------------------------------------------------------------------*
*&      Form  describe_bottles
*&---------------------------------------------------------------------*
FORM describe_bottles  USING p_nb_bottles   TYPE i
.
  beg_describe.

  CONCATENATE    l_nb  l_bottle 'of beer on the wall,'
                 l_nb  l_bottle 'of beer.'
    INTO         l_line
    SEPARATED BY space
    .
  WRITE / l_line.
ENDFORM.                    "describe_bottles

*&---------------------------------------------------------------------*
*&      Form  take_one_down
*&---------------------------------------------------------------------*
FORM take_one_down     CHANGING p_nb_bottles   TYPE i
.
  SUBTRACT 1 FROM p_nb_bottles.
  WRITE / 'Take one down and pass it around,'.
ENDFORM.                    "take_one_down

*&---------------------------------------------------------------------*
*&      Form  go_to_store
*&---------------------------------------------------------------------*
FORM go_to_store
.
  WRITE / 'Go to the store and buy some more,'.
ENDFORM.                    "take_one_down

*&---------------------------------------------------------------------*
*&      Form  find_text_number
*&---------------------------------------------------------------------*
FORM find_text_number  USING p_nb_bottles  CHANGING p_txt
.
  CASE p_nb_bottles.
    WHEN 0.      WRITE 'no more'    TO p_txt.
    WHEN OTHERS. WRITE p_nb_bottles TO p_txt.
  ENDCASE.
  CONDENSE p_txt.
ENDFORM.                    "find_text_number

*&---------------------------------------------------------------------*
*&      Form  find_text_bottle
*&---------------------------------------------------------------------*
FORM find_text_bottle  USING p_nb_bottles  CHANGING p_txt
.
  CASE p_nb_bottles.
    WHEN 1.      WRITE 'bottle'    TO p_txt.
    WHEN OTHERS. WRITE 'bottles'   TO p_txt.
  ENDCASE.
ENDFORM.                    "find_text_bottle```