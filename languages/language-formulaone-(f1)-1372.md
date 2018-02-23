
## Language FormulaOne (F1) ##
---
- Author: anonymous
- Date: 01/14/07
- Info: http
- Score:  (2.99 in 101 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-formulaone-(f1)-1372.html
---

```//////////////////////////////////////////////////////////////////////////////////////////////////
// F1 Program to generate the lyrics of the song 99 Bottles of Beer
//
// To execute the program, run the query
//
//      BottlesOfBeer(99)
//
//////////////////////////////////////////////////////////////////////////////////////////////////

proc BottlesOfBeer(i:<I[0..99]) iff
    if i > 2 then
        Print( i, ' bottles of beer on the wall, ', i,' bottles of beer.\n') &
        Print('Take one down and pass it around, ',i-1,' bottles of beer on the wall.\n\n') &
        BottlesOfBeer(i-1)
    elsif i = 2 then    
        Print('2 bottles of beer on the wall, 2 bottles of beer.\n') &
        Print('Take one down and pass it around, 1 bottle of beer on the wall.\n\n') &
        BottlesOfBeer(i-1) 
    else
        Print('1 bottle of beer on the wall, 1 bottle of beer.\n') &
        Print('Take one down and pass it around, no more bottles of beer on the wall.\n\n') &
        Print('No more bottles of beer on the wall, no more bottles of beer.\n') & 
        Print('Go to the store and buy some more, 99 bottles of beer on the wall.\n')
    end```