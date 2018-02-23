
## Language PL360 ##
---
- Author: Richard L. Guertin
- Date: 06/19/05
- Info: http
- Score:  (2.33 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-pl360-753.html
---

```begin  |-- PL360 version of 99 beers on the wall --|
   |--  By Richard L Guertin - Introduction to PL360 Programming --|
   function reduce(6,#0600);  |-- Decrement register value --|
   long real val;  |-- Number conversion space --|
   array datafill byte part1 = " xx bottles of beer on the wall, ";
   array datafill byte part2 = "xx bottles of beer.";
   equate part1len syn part2 - part1;
   array 134 byte blanks = 134(" ");
   array 134 byte msg;

   r4 := 99;
   repeat  |-- Sing the song --|
      cvd(r4,val);  |-- Convert to decimal --|
      oi(#F,val(7));
      unpk(1,7,part1(1),val);
      if part1(1) = "0" then part1(1) := " ";
      part2(0/2) := part1(1);
      if part1(1) = " " then r0 := @part1(1) else
      r0 := @part1;  print;  |-- print 1st sentence --|
      msg(0/134) := blanks;
      msg := " Take one down, pass it around.";
      r0 := @msg;  print;  |-- print 2nd sentence --|
      reduce(r4);
      if r4 > 1 then
      begin  |-- many more bottles --|
         msg(0/134) := blanks;
         msg(0/part1len-2) := part1;
         cvd(r4,val);  |-- Convert to decimal --|
         oi(#F,val(7));
         unpk(1,7,msg(1),val);
         if msg(1) = "0" then msg(1) := " ";
         msg(part1len-2) := ".";
         if msg(1) = " " then r0 := @msg(1) else
         r0 := @msg;  print;   |-- print 3rd sentence --|
         r0 := @blanks;  print;  |-- print blank line --|
      end else
      begin  |-- only one left --|
         msg := " Only 1 more bottle of beer on the wall!";
         r0 := @msg;  print;  |-- print 3rd sentence --|
         msg(0/134) := blanks;
         msg := " Take it down, pass it around.";
         r0 := @msg;  print;  |-- print next to last sentence --|
         msg(0/134) := blanks;
         msg := " No more bottles of beer on the wall  (Burp).";
         r0 := @msg;  print;  |-- print last sentence --|
         reduce(r4);
      end;
   until r4 <= 0;
end.```