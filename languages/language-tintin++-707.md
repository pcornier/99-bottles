
## Language TinTin++ ##
---
- Author: Igor van den Hoven
- Date: 05/30/05
- Info: http
- Score:  (3.00 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tintin++-707.html
---

```/*
    99 Bottles of beer for TinTin++ (Mud Client)
*/

#loop {99 1}
{
    #showme {@beer{$loop} on the wall};
    #showme {@beer{$loop}......};
    #showme {Take one down pass it around, @beer{$loop-1} on the wall.\n}
}

#function {beer}
{
    #math {val} {&0};

    #if {$val == 1}
    {
        #variable {result} {$var bottle of beer}
    }
    {
        #if {$val == 0}
        {
            #variable {result} {No more bottles of beer}
        }
        {
            #variable {result} {$val bottles of beer}
        }
    }
}```