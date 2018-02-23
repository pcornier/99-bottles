
## Language LSL ##
---
- Author: Linden Lab
- Date: 06/04/11
- Info: http
- Score:  (2.33 in 3 votes)
- URL: https
- Original URL: http://www.99-bottles-of-beer.net/language-lsl-2668.html
---

```//  Thorenbuilt - 99 Bottles of Beer
//  http://99-bottles-of-beer.net/
//  As counted in Thor's Tavern, Thorstein's Lair in 1045
//  
//  LSL is an event driven script language used in SecondLife
//  Because the song is sung in public chat, a regular loop would 
//  make it impossible to hold a normal conversation ("chatspam"). 
//  Instead, a timer event is used for the countdown.


//  Fill the shelves:
float   fTimer      = 30.0;
integer iBottles    = 0;
integer iMaxLoad    = 99;
integer iRunning    = FALSE;


//  Pass 'em around:
default
{
    //  This is where it all begins:
    state_entry()
    {
        iBottles = iMaxLoad;
        llSay(0, "Touch me to pass the bottles!");
    }

    //  Start or stop counting when object is clicked:
    touch_start(integer iNum)
    {
        iRunning = !iRunning;
        if (iRunning)
            llSetTimerEvent(fTimer);
        else
        {
            llSetTimerEvent(0.0);
            llSay(0, "They pulled the plug and stopped the count, " + 
                "holding the bottles of beer on the wall.");
        }
    }

    //  It's time to pass another bottle:
    timer()
    {
        string sBottles = " bottles ";
        if (iBottles > 0)
        {
            if (iBottles == 1) // down to the last bottle
                sBottles = " bottle ";
            llSay(0, (string)iBottles + sBottles + "of beer on the wall, " + 
                (string)iBottles + sBottles + "of beer.");
            iBottles--; // take one
            if (iBottles == 1) // only one left
                sBottles = " bottle ";
            if (iBottles > 0) // still more on the wall
                llSay(0, "Take one down and pass it around, " + 
                    (string)iBottles + sBottles + "of beer on the wall.");
            else // last one gone
                llSay(0, "Take one down and pass it around, " + 
                    "no more bottles of beer on the wall.");
        }
        else // go shopping:
        {
            llSay(0, "No more bottles of beer on the wall, " + 
                "no more bottles of beer.");
            iBottles = iMaxLoad; // fill the shelves
            llSay(0, "Go to the store and buy some more, " + 
                (string)iBottles + sBottles + "of beer on the wall.");
        }
    }
}```