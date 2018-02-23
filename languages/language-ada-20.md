
## Language Ada ##
---
- Author: Gautier de Montmollin
- Date: 04/20/05
- Info: n/a
- Score:  (3.02 in 117 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ada-20.html
---

```-- Ada version of 99 Bottles of Beer

with Ada.Text_IO;         use Ada.Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;

procedure Bottles is

  count : Integer := 99;

begin
  while count > 0 loop
    Put (count, Width=>0);  Put_Line (" bottles of beer on the wall,");
    Put (count, Width=>0);  Put_Line (" bottles of beer.");
    Put_Line ("Take one down and pass it around.");
    count := count - 1;
    if count = 0 then
      Put_Line("No bottles of beer on the wall!");
    else
      Put (count, Width=>0);  Put_Line (" bottles of beer on the wall.");
    end if;
    New_Line;
  end loop;
end Bottles;```