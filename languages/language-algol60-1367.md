
## Language Algol60 ##
---
- Author: Tom Jennings
- Date: 01/05/07
- Info: n/a
- Score:  (2.96 in 164 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-algol60-1367.html
---

```'begin'

'comment'
    99 Bottles of Beer on the Wall
    written in Algol60, for the a60 interpreter
    by Erik Schoenfelder.

    Lower case, whitespace, ASCII, literal strings,
    implementation character set, etc, and other    
    modern conceits are ahistoric and waste cards and tape.

    Tom Jennings 5 Jan 2006
;

'integer' 'procedure' bottles(n);
'value' n;
'integer' n;
'begin'
    'if' n < 1 'then' outstring(1, "no more ") 'else' outinteger(1, n);
    'if' n = 1 'then' outstring(1, "bottle") 'else' outstring(1, "bottles");
    outstring(1, " of beer");
'end';



'comment' Here is main.  ;

'integer' i;

    'for' i := 99 'step' -1 'until' 1 'do' 'begin'
        bottles(i); outstring(1, " on the wall, ");
        bottles(i); outstring(1, "\n");
        outstring(1, "take one down and pass it around, ");
        bottles(i - 1); outstring(1, " on the wall.\n");
    'end';

'end'```