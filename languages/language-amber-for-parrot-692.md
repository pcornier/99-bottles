
## Language Amber for parrot ##
---
- Author: Roger Browne
- Date: 05/27/05
- Info: http
- Score:  (2.96 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-amber-for-parrot-692.html
---

```-- Written in amber for parrot 0.2.0 - http://xamber.org/
-- by Roger Browne - roger AT eiffel.demon.co.uk

99.down_to(1, agent(n) do
   print_line(bottles(n) & " on the wall, " & bottles(n) & ".")
   if n = 0 then
      print_line("Go to the store and buy some more ... 99 bottles of beer.")
   else
      print("Take one down and pass it around, ")
      print_line(bottles(n - 1) & " on the wall.\n")
   end
end)

private
   bottles(n)
      do
         if n = 0 then
            result := "No more bottles of beer"
         elseif n = 1 then
            result := "1 bottle of beer"
         else
            result := n & " bottles of beer"
         end
      end
end```