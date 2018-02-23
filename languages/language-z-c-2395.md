
## Language Z-C ##
---
- Author: TrojaA
- Date: 05/17/10
- Info: n/a
- Score:  (3.00 in 14 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-z-c-2395.html
---

```// Z-C natives

native DISPLAY(string msg) = 0x43CFAA ?? 0;

function main()
{
    local int bottles
    bottles = 99

    while bottles
    {
        DISPLAY(itos(bottles))
        DISPLAY("bottles of beer on the wall, ")
        DISPLAY(itos(bottles))
        DISPLAY(" bottles of beer~n~")
        DISPLAY("Take one down and pass it around,")
        DISPLAY(itos(bottles))
        DISPLAY(" bottles of beer on the wall.~n~")

        bottles--
    }

    DISPLAY("1 bottle of beer on the wall, 1 bottle of beer~n~")
    DISPLAY("Take one down and pass it around, no more bottles of beer on the wall~n~~n~")
    DISPLAY("No more bottles of beer on the wall, no more bottles of beer.~n~")
    DISPLAY("Go to the store and buy some more, 99 bottles of beer on the wall.~n~")

    return 1
}```