
## Language TinTin++ ##
---
- Author: Igor van den Hoven
- Date: 08/16/09
- Info: http
- Score:  (4.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tintin++-2162.html
---

```#nop 99 bottles of beer for TinTin++ (a Mud Client)

#function {bottles_of_beer}
{
    #math value %0;

    #switch {$value}
    {
        #case 0
        {
            #return no more bottles of beer
        };
        #case 1
        {
            #return 1 bottle of beer
        };
        #default
        {
            #return $value bottles of beer
        }
    }
}

#loop 99 0 number
{
    #if {$number > 0}
    {
        #showme @bottles_of_beer{$number} on the wall, @bottles_of_beer{$number}.;
        #showme Take one down pass it around, @bottles_of_beer{$number - 1} on the wall.;
        #showme;
    };
    #else
    {
        #showme No more bottles of beer on the wall, no more bottles of beer.;
        #showme Go to the store and buy some more, 99 bottles of beer on the wall.;
    }
}```