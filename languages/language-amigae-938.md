
## Language AmigaE ##
---
- Author: Harry Sintonen
- Date: 11/13/05
- Info: http
- Score:  (3.00 in 38 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-amigae-938.html
---

```-> AmigaE version of 99 Bottles of Beer
->
-> About AmigaE: http://en.wikipedia.org/wiki/AmigaE_programming_language
->
-> Written by Harry Sintonen <sintonen@iki.fi>.

RAISE "MEM" IF String() = NIL

PROC main() HANDLE
  DEF p:PTR TO CHAR
  DEF i

  FOR i := 99 TO 0 STEP -1
    p := gen(i)
    PrintF('\s on the wall, \s.\n', p, p)
    Dispose(p)

    EXIT i = 0

    p := gen(i - 1)
    PrintF('Take one down pass it around, \s on the wall.\n', p)
    Dispose(p)
  ENDFOR

  PrintF('Go to the store and buy some more, 99 bottles of beer on the wall.\n')

EXCEPT

  PrintF('Oops. An exception caught!\n')

ENDPROC

PROC gen(i)
  DEF s

  s := String(24)

  IF i > 1
    StringF(s, '\d bottles', i)
  ELSE
    StrCopy(s, IF i = 0 THEN 'no more bottles' ELSE '1 bottle')
  ENDIF

  StrAdd(s, ' of beer')
ENDPROC s```