
## Language SABLE ##
---
- Author: Keith L Robertson
- Date: 04/12/08
- Info: http
- Score:  (3.50 in 2 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-sable-1758.html
---

```#!sable
"Derived from Smalltalk, SABLE is better viewed in an IDE than in linear files.
 See a syntax-colorized version at http://sable-language.com/intro/ex-beersong.aspx"!

!SABLE assembly
!
beersong.exe
    {~ console
        entryClass: #BottlesOfBeer.SONG method: #main:;

        reference: 'mscorlib.dll';
        use: #System}
!
!
"##############################################################################"
"##                                   SONG                                   ##"
"##############################################################################"!
!SABLE namespace: #BottlesOfBeer; classes
!
SONG
    {~ object static}
    "Simple class which prints the bottles-of-beer song.
     This is not o-o, but it shows some nice features of the SABLE language."
!
!
"=============================================================================="!
!SONG staticMethods in: 'entrypoint'
!
main: args {ARRAY[STRING]}.
    "Sing the bottles song using the command line argument as the initial number,
     or 99 if none is provided."

    "Obtain the number of bottles from the first argument, or default to 99."
    |bottleCount| := 99.
    args notEmpty then:
        [[bottleCount := INT32 parse: args first] try
            catch: [:exc {DIVIDE_BY_ZERO_EXCEPTION} | "Never hits; just showing syntax"];
            catch: [:exc | bottleCount := 0]].

    "Print an error, or sing the song."
    bottleCount <= 0
        then: [CONSOLE writeLine: 'Argument must be a positive integer']
        else: [THIS_CLASS sing: bottleCount].
!
!
"=============================================================================="!
!SONG staticMethods in: 'singing'
!
sing: bottles {INT32}.
    {~ cilName: 'Sing'}     "Allows other languages to call the method using this name."
    "Sing the bottles song using :bottles as the initial number.
     The typical value is 99."
    {~ require: 'bottles positive' as: [bottles > 0]}   "Precondition"

    bottles to: 0 by: -1 do:    ">#until:by:do: would not iterate with [count=0]; this will."
        "The grave accent character can be used to visually demarcate structures."
        [:count |
        `"When we run out of bottles, start over at the beginning."
        `|minus1| := count - 1 ifLess: [bottles].
        `   "->#ifLess: means 'if less than zero'. Related methods are >#ifZero: and >#ifMore:."
        `
        `CONSOLE
        `   write:
        `       "'Constant Block' structure is evaluated during type initialization."
        `       ##['{0} on the wall, {1}.$LINE`'    "-Adjacent strings are concatenated"
        `          '{2}, {3} on the wall.$LINE`'    "- which allows for nice formatting."
        `          '$LINE`' lineEscaped]            "-Substitutes the platform line terminator."
        `   withAll:
        `       "'Runtime Array' structure creates a new array each time it is reached."
        `       #(SONG bottles: count  capitalized: True,
        `         SONG bottles: count  capitalized: False,
        `         "We could use a conditional, but let's show switch-case resulting in a value."
        `         (count switch
        `               case: 0 do: ['Go to the store and buy some more'];
        `               else:       ['Take one down and pass it around'] ),
        `         SONG bottles: minus1 capitalized: False)].
!
bottles: qty {INT32} capitalized: capitalized {BOOLEAN}  ^{STRING}.
    "A string stating the number of bottles of beer given by :qty, either
     '# bottles...', '1 bottle...', or 'No more bottles of beer'.
     When :qty is 0, 'No more' is capitalized only if :capitalized is True."

    ^'{0} {1} of beer'
        format:
            "'Cascaded Conditional' can result in a value."
            (IF test
                if: [qty ~= 0]    then: [qty to_STRING];
                if: [capitalized] then: ['No more'];
                else:                   ['no more'])
        and:
            "'Constant Array' structure is evaluated during class initialization.
             BOOLEAN converts to numeric types as 0 or 1 using a 'typecast' expression."
            (##('bottle', 'bottles') at: (qty ~= 1) ~{INT32})
!
!```