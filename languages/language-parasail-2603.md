
## Language ParaSail ##
---
- Author: Tucker Taft
- Date: 02/18/11
- Info: http
- Score:  (3.00 in 3 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-parasail-2603.html
---

```// 99 bottles of beer on the wall, written in ParaSail.
// See http://parasail-programming-language.blogspot.com for more info.

interface Bottles<Bottle_Index is Integer<>; String<>> is

    function Bottle_Lyrics(Initially : Bottle_Index := 99) -> Vector<String>;
      // Return vector of lyrics, where Initially is initial number of bottles

end interface Bottles;

class Bottles is
    function Bottle_Count(B : Bottle_Index) -> String is
      // Return phrase to use to refer to "B" bottles
        case B of
          [0] => return "No bottles";
	  [1] => return "One bottle";
	  [..] => return B | " bottles";
	end case;
    end function Bottle_Count;

  exports
    function Bottle_Lyrics(Initially : Bottle_Index := 99) -> Vector<String> is
      // Return vector of lyrics, where Initially is initial number of bottles
	return [for I in 1..Initially => 
          Bottle_Count(Initially+1-I) | " of beer on the wall.\n" | 
          Bottle_Count(Initially+1-I) | " of beer.\n" |
	  "Take one down, pass it around.\n" |
          Bottle_Count(Initially-I) | " of beer on the wall.\n\n"];
    end function Bottle_Lyrics;
end class Bottles;```