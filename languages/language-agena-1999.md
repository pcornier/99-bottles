
## Language Agena ##
---
- Author: Alexander Walz
- Date: 03/10/09
- Info: http
- Score:  (3.00 in 21 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-agena-1999.html
---

```bottles := proc() is
   local start, stop, step := 99, 0, -1;
   local numbers, subject, i;

   # the `numbers` sequence defines a vector of twelve words
   numbers := seq('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
      `nine, `ten, `eleven, `twelve);  # single words can also be entered as in this line

   #/ the `subject` subprocedure returns a string with the number n of bottles left;
      if n < 13 then it returns the number as a word instead of one or more digits /#
   subject := proc(n) is
      local subject;
      try n as number;
      if n > 1 then     # return plural
         subject := is n > 12 then n else numbers[n] si .. ' bottles'
      elif n = 1 then   # return singular
         subject := numbers[n] .. ' bottle'
      else
         subject := 'no more bottles'
      fi;
      return subject
   end;

   # `capitalize` changes the first letter in a word to upper case; it leaves digits untouched
   local capitalize :=
      << str -> is strings.isNumber(str) then str else
            upper str$(1) .. is size str > 1 then str$(2, -1) else '' si
         si >>;

   # now iterate ...
   for external i from start to stop by step do
      # loop control variables are usually not known to the outside scope; the `external` option
      # however makes it known to the block surrounding the loop
      local n := subject(i);
      writeline(capitalize(n), ' of beer on the wall, ', n, ' of beer.');
      if i <> 0 then
         writeline('Take one down and pass it around, ',
            lower subject(i-1), ' of beer on the wall.\n');
      else
         writeline('Go to the store and buy some more, 99 bottles of beer on the wall.')
      fi
   od;

   # return the last iteration value of the `for` loop plus the step size
   return i
end;

bottles():
-1```