
## Language SCL ##
---
- Author: Steve Hammond
- Date: 08/24/05
- Info: n/a
- Score:  (3.02 in 56 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-scl-848.html
---

```@ SCL is the system control language used on ICL (now Fujitsu) mainframes
@ running the VME2900 operating system.
@
@ It was originally intended to be used to perform batch flow control
@ (assigning files etc) but was extended and made compilable to be able
@ to perform complex mathematics.
@
@ August 2005
@ Steve Hammond
@

PROC BOTTLES IS (@ no parameters required @)
PROCBEGIN

    INT   I_COUNT

    FOR
        I_COUNT
    FROM
        99
    TO
        1
    BY
        -1
    DO
        SYSCALL SEND_MESSAGE (
            MESSAGE = NUMERIC(I_COUNT) +
                      " bottles of beer on the wall" + HEX(15) + @ line feed @
                      NUMERIC(I_COUNT) +
                      " bottles of beer." )
    REPEAT

PROCEND```