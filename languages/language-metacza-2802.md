
## Language Metacza ##
---
- Author: Henrik Theiling
- Date: 12/21/11
- Info: http
- Score:  (2.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-metacza-2802.html
---

```#! metacza --style=metacza

#include <stdio.h>
#include <metacza.h>

digit(n)
digit(0) = "0"; digit(1) = "1"; digit(2) = "2"; digit(3) = "3"; digit(4) = "4"
digit(5) = "5"; digit(6) = "6"; digit(7) = "7"; digit(8) = "8"; digit(9) = "9"

str(n) = str(n/10) + digit(n%10)
str(0) = ""

bottles(n) = str(n) + " bottles"
bottles(1) = "1 bottle"
bottles(0) = "No more bottles"

verse(n) = bottles(n) + " of beer on the wall,\n" +
           bottles(n) + " of beer.\n" +
           "Take one down and pass it around,\n" +
           bottles(n-1) + " of beer on the wall.\n"

verse(0) = "No more bottles of beer on the wall,\n" +
           "No more bottles of beer.\n" +
           "Go to the store and buy some more,\n" +
           "99 bottles of beer on the wall.\n"

song(n) = verse(n) + "\n" + song(n-1)
song(0) = verse(0)

beerSong = song(99)

%{
    int main(void)
    {
        puts(metacza::evaluate<beerSong>::value);
        return 0;
    }
%}```