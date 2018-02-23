
## Language QuickBASIC ##
---
- Author: Al Boulley
- Date: 01/19/08
- Info: n/a
- Score:  (3.00 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-quickbasic-1673.html
---

```'set fridge capacity, beverage type, and container type
X = 99
B$ = "beer"
C$ = "bottle"

'build number strings so "0" can be sung correctly in second to last verse
DIM N$(X)
FOR L = 1 TO X
  N$(L) = LTRIM$(STR$(L))
NEXT
N$(0) = "no more"

'fully stock the fridge, and then start singing!
F = X
DO

  'each verse has four "phrases"
  FOR P = 1 TO 4
    SELECT CASE P:

      'three phrases are very similar - first, second, and fourth
      CASE 1, 2, 4:

        'use some boolean algebra to handle the "what-ifs":

        PRINT N$(F); " "; C$; LEFT$("s", -(F <> 1)); " of "; B$;
        '-(F=1) evaluates to 1 when F=1.... [-(-1)]
        '                    0 when F<>1... [-(0) ]
        '(don't want to pluralize a lone container)
       
        PRINT LEFT$(" on the wall", -12 * (P <> 2));
        '-12*(P<>2) evaluates to 0 when P=2.... [-12*(0) ]
        '                       12 when P<>2... [-12*(-1)]
        '(don't want to sing those words in the second phrase)
        
        PRINT MID$(", ." + CHR$(13), 3 + 2 * (P = 1), 2);
        '3+2*(P=1) evaluates to 1 when P=1.... [3+2*(-1)]
        '                       3 when P<>1... [3+2*(0) ]
        '(brief pause after first phrase, long pause after other two)

        '[using length of zero with Left$ results in empty string]
     
      'third phrase of the song never changes
      CASE 3:
        PRINT "Take one down and pass it around, ";
        F = F - 1
    END SELECT
  NEXT

  'take an extra breath between verses
  PRINT

'F evaluates to FALSE when F=0  [exactly zero is always FALSE]
'                TRUE when F<>0 [every nonzero is always TRUE]
'(continue singing verses until fridge is empty)
LOOP WHILE F

'sing final verse the easy way
PRINT "No more "; C$; "s of "; B$; " on the wall, no more "; C$; " of "; B$; "."
PRINT "Go to the store and buy some more, "; N$(X); " "; C$; "s of "; B$; " on the wall."

'boolean algebra is your friend :)```