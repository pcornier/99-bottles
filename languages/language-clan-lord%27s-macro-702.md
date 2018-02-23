
## Language Clan Lord's macro ##
---
- Author: Jerome Lefebvre
- Date: 05/28/05
- Info: n/a
- Score:  (4.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clan-lord%27s-macro-702.html
---

```// Based http://www.clmacros.com/view.php?id=4
// modified the format a tad, match it more closely 
// to the other songs' format

singmacro
{
    set @env.key_interrupts true
    set @env.click_interrupts false

    set bottles 5
    pause 5
    label singtop
    
    bottles " bottles of beer on the wall, " bottles " bottles of beer,\r"
    pause 5
    "take one down, pass it around,\r"
    pause 5
    set bottles - 1
    bottles " bottles of beer on the wall.\r"
    pause 5
    if bottles != 1
        goto singtop
    end if

    "1 bottle of beer on the wall, 1 bottle of beer,\r"
    pause 5
    "take one down, pass it around,\r
    pause 5
    "no more bottles of beer on the wall.\r'"
}

"/sing" call singmacro
"\sing" call singmacr```