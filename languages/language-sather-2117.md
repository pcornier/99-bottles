
## Language Sather ##
---
- Author: Michael Talbot-Wilson
- Date: 06/06/09
- Info: n/a
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sather-2117.html
---

```-- A more elaborate version of 99 Bottles Of Beer.
-- Michael Talbot-Wilson, May-June 2009.
-----------------------------------------------------------------

partial class N is
   const starting_number : INT := 99;
end;

class BEER

-- The main class, containing main, where execution starts and ends.
-- Compile with: cs -main BEER -chk_all all -o beer beer.sa

is
   include N;
   main(args:ARRAY{STR}):INT is
      protect

	 SING{B}::sing(starting_number);

      when STR then
	 #ERR + #FMT("%s: %s\n", args[0], exception);
	 return 1
      end;
      return 0
   end
end;

class SING{D_TYPE < $DITTY} is

   sing(verses:INT)
      pre verses > 0
   is
      w : D_TYPE;
      w := D_TYPE::create(verses);
      loop
	 #OUT + w + w.act!
      end
   end

end;

class B < $DITTY

-- Bottles On The Wall

is

   private const voidmsg:STR:="Class calls (:: calls) "
	 "on the methods of class B will not be refreshing.";

   private attr num:INT;
   private attr at_start:INT;

   private invariant:BOOL is
      return void(self) or num.is_bet(-1, at_start)
   end;

   create(i:INT):SAME
      pre i > 0
      post ~void(result)
   is
      r ::= new;
      r.num := i;
      r.at_start := i;
      return r
   end;

   private bottle:STR is return bottle(num) end;

   private bottle(i:INT):STR is
      if i = 1 then return "bottle" end;
      return "bottles"
   end;

   str: STR is
      if void(self) then raise voidmsg end;
      r:STR;
      case num
      when -1 then
	 r:="";
      when 0 then
	 r:="No more bottles of beer on the wall, "
	       "no more bottles of beer.\n"
      else
	 r:=#FMT("<> <> of beer on the wall, <> <> of beer.\n",
		 num, bottle, num, bottle).str;
      end;
      return r
   end; -- of routine str

   act!:STR
      pre void(self) or ~num.is_neg
   is
      if void(self) then raise voidmsg end;
      loop
	 num := num-1;
	 if num < 0 then
	    yield "Go to the store and buy some more, "
		  + at_start.str + " "
		  + bottle(at_start) + " of beer on the wall.\n"
	 elsif num = 0 then
	    yield "Take it down and pass it around, "
		  "no more bottles of beer on the wall.\n\n"
	 else
	    yield "Take one down and pass it around, "
		  + num.str + " "
		  + bottle + " of beer on the wall.\n\n"
	 end;
	 if num < 0 then quit end
      end
   end -- of iterator act!

end; -- of class B

abstract class $DITTY < $STR is
   create(arg:INT):SAME;
   str:STR;
   act!:STR
end;```