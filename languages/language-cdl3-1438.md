
## Language CDL3 ##
---
- Author: Mark
- Date: 04/06/07
- Info: http
- Score:  (2.80 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-cdl3-1438.html
---

```# Made in CDL3, a language for making compilers.
# Function names can include spaces as you can see.
#
# This program can be made a hundred times simpler in this language,
# but I wanted to demonstrate the 'ease' of having inbuilt affix grammars :)
# Code looks elaborate in places because there are no iterative loops,
# everything has to be done recursively
#
# Still, CDL3 is obscure rather than esoteric, you can make anything you want in it :)
#
#
# pun only half intended ;)
ROOT beer.

# Here we define a tree of bottles of beer, recursively through the inbuilt affix grammar.
# At the leaves we find a bottle of beer or no beer here ;)
BEERS = BEERS and BEERS;
        a bottle of beer;
        no beer here.

# function for the bottle/bottles.
# note that to some extent we can place variables anywhere in the function name
FUNCTION dont put an s into TEXT> if >INT equals one:
   [INT -> 1], ["" -> TEXT]; ["s" -> TEXT].

# binary in a TEXT to INT conversion
FUNCTION convert >TEXT to >INT>:
   [TEXT -> ""];
   ([2 * INT -> INT],
      (is prefix ("0", TEXT, TEXT1),
         convert TEXT1 to INT;
      is prefix ("1", TEXT, TEXT1),
         [INT + 1 -> INT],
         convert TEXT1 to INT;
      write ("Oops! This can't happen!"), ?))
.

# print the text
ACTION write >TEXT bottles:
   [0 -> INT1],
   convert TEXT to INT1,
   ([INT1 -> 0];
   [INT1 - 1 -> INT2],
   bindec (INT1, TEXT11),
   dont put an s into TEXT12 if INT1 equals one,
   bindec (INT2, TEXT21),
   dont put an s into TEXT22 if INT2 equals one,
   [ "\n" + TEXT11 + " bottle" + TEXT12 + " of beer on the wall, " -> TEXT3 ],
   [ TEXT3 + TEXT11 + " bottle" + TEXT12 + " of beer." -> TEXT3 ],
   [ TEXT3 + "\nTake one down and pass it around, " -> TEXT3 ],
   [ TEXT3 + TEXT21 + " bottle" + TEXT22 + " of beer on the wall.\n" -> TEXT3],
   write (TEXT3)).

# drink beer: notice that it's recursive,
# using the path in the tree as binary number for the number of the bottle.
ACTION drink the >BEERS tree with >TEXT as binary number:
   [BEERS -> BEERS1 and BEERS2],
      drink the BEERS2 tree with TEXT + "1" as binary number,
      drink the BEERS1 tree with TEXT + "0" as binary number;
   [BEERS -> BEERS1 and no beer here],
      drink the BEERS1 tree with TEXT + "0" as binary number;
   [BEERS -> no beer here and BEERS2],
      drink the BEERS2 tree with TEXT + "1" as binary number;
   [BEERS -> a bottle of beer],
      write TEXT bottles;

# some drivel to keep the compiler happy ;)   
   +.

ACTION drink the >BEERS:
   drink the BEERS tree with "" as binary number,
   write ("\nNo more bottles of beer on the wall, no more bottles of beer."),
   write ("\nGo to the store and buy some more, 99 bottles of beer on the wall.\n").
      
ACTION beer:

# let's put 99 bottles of beer in a variable, the quick way
   [a bottle of beer -> BEERS1],
   [BEERS1 and BEERS1 -> BEERS2],
   [BEERS2 and BEERS2 -> BEERS4],
   [BEERS4 and BEERS4 -> BEERS8],
   [BEERS4 and no beer here -> BEERS88],
   [BEERS8 and BEERS8 -> BEERS16],
   [BEERS88 and no beer here -> BEERS1616],
   [BEERS16 and BEERS16 -> BEERS32],
   [BEERS1616 and no beer here -> BEERS3232],
   [BEERS32 and BEERS32 -> BEERS64],
   [BEERS32 and BEERS3232 -> BEERS6464],
   [BEERS64 and BEERS6464 -> BEERS],
# BEERS now looks like:
# a bottle of beer and a bottle of beer and a bottle of beer and a bottle of beer....
# 99 times repeated, in a tree
   
# let's drink em!   
   drink the BEERS.```