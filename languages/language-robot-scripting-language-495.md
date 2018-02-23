
## Language Robot Scripting Language ##
---
- Author: Ville Saalo
- Date: 04/20/05
- Info: http
- Score:  (2.88 in 8 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-robot-scripting-language-495.html
---

```# RSL version of 99 Bottles of Beer
# See http://www.robotbattle.com/
# By Ville Saalo, http://koti.mbnet.fi/villes/

Init
{
    Name( "99 Bottles of Beer" )
    Version( "1.6" )
    Author( "Ville Saalo" )
    Style( "Omicron" )

    print("New game!")
    print("")
    LockAll(1)
    RegCore( SingingAndFighting )
    if( _gamenbr > 10 )
        RegDtcWall( MeSeeWallMeGoNuts, 1 )
    endif

    if( bottles <= 0 )
        bottles = 99
    endif
}

SingingAndFighting
{
    if( bottles <= 0 )
        print("*Bottle delivery!*")
        bottles = 99
    endif
    GoSub( GetPlural )
    print(bottles+" bottle"+plural+" of beer on the wall")
    print(bottles+" bottle"+plural+" of beer")
    print("Take one down, pass it around")
    bottles = bottles-1
    GoSub( GetPlural )
    if( bottles > 0 )
        print(bottles+" bottle"+plural+" of beer on the wall")
        print("")
    else
        print("No more bottles of beer on the wall")
        msgbox("Go to the store, buy some more?")
        if( _result^2 == 1 )
         #-1 means the msgbox was redirected to print and 1 means "OK".
         #couldn't use abs() because it would have used _result and
         #I didn't want a new variable for it, so x^2==1 if abs(x)==1.
            print("---")
            bottles = 99
        else
            Suicide()
        endif
    endif

    GunLeft( (_dtcrobot==0)*5 )
    Scan()
    Fire( _dtcrobot*7 )
}

MeSeeWallMeGoNuts
{
    GetRandom(42)
    if( _result == 42 )
        print("")
        print(bottles+" bottles of beer on the wall")
        print(bottles+" bottles of beer")
        print("Shoot the wall down, drive over the debris")
        bottles = 0
        print("No more bottles of beer on the wall!")
        print("(I got bored...)")
        print("")
    endif
}

GetPlural
{
    if( bottles != 1 )
        plural = "s"
    else
        plural = ""
    endif
}

Dead
{
    print("Oh, the game ended. There were "+bottles+" bottles of beer on the wall left")
    Store(bottles)  #store the number for next match
}```