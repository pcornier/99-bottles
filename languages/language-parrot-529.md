
## Language Parrot ##
---
- Author: Jonathan Scott Duff
- Date: 04/20/05
- Info: http
- Score:  (3.01 in 116 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-parrot-529.html
---

```Here's a version of 99 bottles in Parrot assembler
(http://www.parrotcode.org/)

# parameterized bottles on the wall 
# Jonathan Scott Duff duff@pobox.com
#
# If arguments are given on the command line, the first is how
# many bottles (defaults to 99), and the second is of what
# (defaults to beer).

.macro print4 (a,b,c,d)
        print .a
        print .b
        print .c
        print .d
.endm

        set I0, P0[1]                   # how many
        set S0, P0[2]                   # of what?

        ne S0, "", BOTCHK
        set S0, "beer"

BOTCHK:
        gt I0, 0, N_BOTTLES             # make sure the count > 0
        set I0, 99

N_BOTTLES:
        .print4(I0," bottles of ",S0," on the wall,\n")
        .print4(I0," bottles of ",S0,",\n")
        print "Take one down, pass it around,\n"
        dec I0
        lt I0, 2, ONE_BOTTLE
        .print4(I0," bottles of ",S0," on the wall.\n\n")
        branch N_BOTTLES             # keep on drinking

ONE_BOTTLE:
        .print4(I0," bottle of ",S0," on the wall.\n\n")

        .print4(I0," bottle of ",S0," on the wall,\n")
        .print4(I0," bottle of ",S0,",\n")
        print "Take one down, pass it around,\n"
        .print4("No more bottles of ",S0," on the wall.\n\n", "")

        print "*Buuurrp*\n"
        end
# THE END```