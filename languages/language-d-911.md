
## Language D ##
---
- Author: Fredrik Olsson
- Date: 10/09/05
- Info: http
- Score:  (3.02 in 172 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-d-911.html
---

```/*
  bob.d
  bob - 99 Bottles of beer
 
  Numbers in written form correct grammar and last verse included. 
 
  Uses D features such as; 
    Nested functions, in two levels; numToBottles and numToText.
    Dynamic arrays, static such in numToText for text lookups, and as strings.
    Strings in switches.
    Imports, stdio to get writefl()/writefln(), string for capitalize().
 
  Created by Fredrik Olsson on 2005-10-09.
  Copyright (c) 2005 Treyst AB. All rights reserved.
*/

module bob;

private {
  import std.stdio;
  import std.string;
}

int main(char[][] args) {
  char[] numToBottles(uint num) {
    char[] numToText() {
      static char[][] nums = ["", "one", "two", "three", "four", "five", "six", 
        "seven", "eight", "nine", "ten", "eleven", "twelve"];
      static char[][] decs = ["twenty", "thirty", "forty", "fifty", "sixty",
        "seventy", "eighty", "ninety"];
      if (num == 0)
        return "no more";
      if (num < 13)
        return nums[num];
      if (num < 20) {
        char[] tmp = nums[num % 10];
        switch(tmp) {
          case "three":
            return "thirteen";
          case "five":
            return "fifteen";
          default:
            return tmp ~ "teen";
        }
      }
      return decs[(num / 10) - 2] ~ (!(num % 10) ? "" : "-" ~ nums[num % 10]);
    }
    return capitalize(numToText()) ~ " bottle" ~ ((num != 1) ? "s" : "");
  }
  int bottles = 99;
  char[] temp = numToBottles(bottles);
  while (bottles >= 0) {
    writefln(temp, " of beer on the wall, ", temp, " of beer.");
    bottles--;
    if (bottles >= 0) {
      writef("Take one down, pass it around,");
      temp = numToBottles(bottles);
    } else {
      writef("Go to the store and buy some more, ");
      temp = numToBottles(99);
    }
    writefln(temp, " of beer on the wall.\n");
  }
  return 0;
}```