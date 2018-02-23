
## Language Sather ##
---
- Author: David Stoutamire
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 65 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sather-579.html
---

```-- Sather for 99 Bottles of Beer
--
-- David Stoutamire (davids@icsi.berkeley.edu)

class MAIN is
   main is
      loop
         b::=99.downto!(1);
         #OUT + bob(b) + " on the wall, "
              + bob(b) + ".\n"
              + "Take one down, pass it around, "
              + bob(b-1) + " on the wall.\n\n";
      end
   end;

   bob(i:INT):STR is
      case i
      when 0 then return "no more bottles of beer";
      when 1 then return "1 bottle of beer";
      else return i.str + " bottles of beer";
      end
   end
end```