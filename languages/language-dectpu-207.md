
## Language DECTPU ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dectpu-207.html
---

```DEC's Pascal-like "Text Processing Utility."

PROCEDURE BEER
          LOCAL BOTTLES, LINE_1, LINE_2, LINE_3;

          BOTTLES := 99;
          LINE_1 := "!SL bottle!%S of beer on the wall";
          LINE_2 := "!SL bottle!%S of beer,";
          LINE_3 := "If !0<!SL!>!1%Cthat single bottle"
                  + "!%Eone of those bottles!%F should happen to fall,";
          LOOP;
               COPY_TEXT( FAO( LINE_1, BOTTLES) + ","); SPLIT_LINE;
               COPY_TEXT( FAO( LINE_2, BOTTLES));       SPLIT_LINE;
               COPY_TEXT( FAO( LINE_3, BOTTLES));       SPLIT_LINE;
               BOTTLES := BOTTLES - 1;
               COPY_TEXT( FAO( LINE_1, BOTTLES) + "."); SPLIT_LINE;
SPLIT_LINE;
               EXITIF BOTTLES = 0;
          ENDLOOP;
ENDPROCEDURE```