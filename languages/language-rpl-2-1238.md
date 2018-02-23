
## Language RPL/2 ##
---
- Author: JKB
- Date: 08/13/06
- Info: n/a
- Score:  (2.87 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-rpl-2-1238.html
---

```#!/usr/local/bin/rpl -sc

/*
 * With multithread and recursive function.
 * RPL/2 4.00pre8p is required.
 * (C) JKB, 12th of august 2006.
 */

BOTTLES
<<
        // Child process is started.
        100 'RECURSIVE' detach
        -> PROC
        <<
                do PROC recv until end drop2

                do
                        // Parent waits for datas sent by child.
                        do PROC recv until end
                        list-> drop dup " on the wall," + disp "." + disp
                        "Take one down, pass it around," disp

                        if dup 1 same not then
                                do PROC recv until end list-> drop
                        else
                                1 "No more bottles of beer"
                        end
                        " on the wall." + disp drop "" disp
                until
                        1 same
                end

                // Parent waits for Child's death.
                PROC wfproc
        >>
>>

RECURSIVE
<<
        while
                dup
        repeat
                1 - dup dup ->str
                if over 1 > then " bottles " else " bottle " end +
                "of beer" + 2 ->list dup
                // Child send datas to parent process.
                send send
                // Recursive function is caught.
                RECURSIVE
        end
>>```