
## Language Eiffel ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 102 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-eiffel-231.html
---

```class SHELF

      -- A shelf of bottles

creation

   make

feature

   make (l_bottles: INTEGER) is
      require
         positive_bottles: l_bottles >= 0
      do
         bottles := l_bottles
      end

   remove is
      require
         bottles_exist: bottles > 0
      do
         bottles := bottles - 1
      ensure
         removed: bottles = old bottles - 1
      end

   bottles: INTEGER

   short_description: STRING is
      do
         if bottles = 0 then
            Result := "No"
         else
            Result := bottles.out
         end
         Result.append (" bottle")
         if bottles /= 1 then
            Result.append ("s")
         end
         Result.append (" of beer")
      ensure
         result_exists: Result /= Void
      end

   description: STRING is
      do
         Result := short_description
         Result.append (" on the wall, ")
         Result.append (short_description)
         Result.append ("%N")
      ensure
         result_exists: Result /= Void
      end

   empty: BOOLEAN is
      do
         Result := bottles = 0
      end

invariant

   positive_bottles: bottles >= 0
         
end -- class SHELF

class BEER

   -- Produuce the ditty
   -- Nick Leaton

creation

   make

feature

   shelf: SHELF

   make is
      do
         from
            !!shelf.make (99)
         until
            shelf.empty
         loop
            io.put_string (shelf.description)
            shelf.remove
            io.put_string ("Take one down, pass it all around%N%N")
         end
         io.put_string (shelf.description)
         io.put_string ("Go to the store and buy some more%N%N")
         shelf.make (99)
         io.put_string (shelf.description)
      end   
            
end -- class BEER

 
  	Programming language: Eiffel
  	

class BEERS

creation

    make

feature     -- Creation

    make is
        local
            i : INTEGER
            b : STRING;
        do
            from i := 99 variant i until i <= 0 loop
                if i = 1 then
                    b := " bottle";
                else
                    b := " bottles"
                end -- if
                io.put_integer(i);
                io.put_string(b);
                io.put_string(" of beer on the wall, ");
                io.put_integer(i);
                io.put_string(b);
                io.put_string(" of beer,");
                io.put_new_line;
                io.put_string("Take one down and pass it around, ");
                i := i - 1;
                io.put_integer(i);
                io.put_string(b);
                io.put_string(" bottles of beer on the wall.");
                io.put_new_line;
            end -- loop
            io.put_string("Go to the store and buy some more,");
            io.put_new_line;
            io.put_string("99 bottles of beer on the wall.");
            io.put_new_line;
        end;

end -- class BEERS```