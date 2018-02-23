
## Language Zonnon ##
---
- Author: Eugene Prokhorov
- Date: 08/19/06
- Info: http
- Score:  (3.02 in 120 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-zonnon-1241.html
---

```(* Zonnon version of 99 Bottles of Beer                    *)
(* Tested on Visual Zonnon 1.00.49 with Visual Studio 2005 *)
(* Programmed by Eugene Prokhorov    genieprox@gmail.com   *) 

module Sing;
  
  var i: integer;
  
  procedure bottles (n: integer): string;
  begin
    if n = 1 then return ' bottle '
             else return ' bottles '
    end
  end bottles;
  
  procedure verse (n: integer);
    const
      S0 = 'Go to the store and buy some more, ';
      S1 = 'of beer on the wall, ';
      S2 = 'of beer on the wall.';
      S3 = 'of beer.';
      S4 = 'Take one down and pass it around, ';
  begin
    if    n = 0 then write ('No more') else write (n:1) end; write   (bottles (n), S1);
    if    n = 0 then write ('no more') else write (n:1) end; writeln (bottles (n), S3);
    if    n = 0 then write (S0, 99:2, bottles (99),  S2)
    elsif n = 1 then writeln (S4, 'no more', bottles (n-1), S2); writeln
                else writeln (S4, (n-1):1,   bottles (n-1), S2); writeln
    end
  end verse;
    
begin
  for i := 99 to 0 by -1 do
    verse (i)
  end
end Sing.```