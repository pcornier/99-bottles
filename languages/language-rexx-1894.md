
## Language REXX ##
---
- Author: R. Mark Enright
- Date: 10/23/08
- Info: http
- Score:  (2.95 in 22 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rexx-1894.html
---

```/* REXX VERSION OF THE BOTTLES PROGRAM */
/* BY R. MARK ENRIGHT                  */
DO FOREVER
   DO I = 99 TO 1 BY -1
      IF I > 1 THEN PLURAL_1 = 'BOTTLES'
               ELSE PLURAL_1 = 'BOTTLE'
      IF I = 2 THEN PLURAL_2 = 'BOTTLE'
               ELSE PLURAL_2 = 'BOTTLES'
      SAY I PLURAL_1 'OF BEER ON THE WALL,' I PLURAL_1 'OF BEER'
      SAY 'TAKE ONE DOWN, PASS IT AROUND,' I-1 PLURAL_2 'OF BEER ON THE WALL.'
   END
   SAY 'NO MORE BOTTLES OF BEER ON THE WALL, NO MORE BOTTLES OF BEER'
   SAY 'GO TO THE STORE AND BUY SOME MORE'
END```