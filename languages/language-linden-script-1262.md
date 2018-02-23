
## Language Linden Script ##
---
- Author: mnmnk
- Date: 09/07/06
- Info: http
- Score:  (2.62 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-linden-script-1262.html
---

```integer bottles = 99;

default
{
    state_entry()
    {
        llSetObjectName("99 Bottles Of Beer");
        llSay(0, "99 Bottle of Beer on the Wall - mnmnk");
    }

    touch_start(integer total_number)
    {
    while ( bottles > 0 )
        {    
            llSay(0, (string)bottles+ " bottles of beer on the wall,");
            llSay(0, (string)bottles+" bottles of beer.");
            llSay(0,"Take one down, pass it around,");
            --bottles;
            
            if(bottles == 0) 
            {
                llSay(0, "No More Beer On the Wall...."); 
                llSay(0, "Go to the store and buy some more,99 bottles of beer on the wall");
            }
            
            else
            {
                llSay(0, (string)bottles+" bottles of beer on the wall.");
            }       
        }
    }
}```