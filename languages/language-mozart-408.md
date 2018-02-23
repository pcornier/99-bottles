
## Language Mozart ##
---
- Author: Kari Pahula
- Date: 04/20/05
- Info: http
- Score:  (3.02 in 111 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mozart-408.html
---

```% http://www.mozart-oz.org/
% By Kari Pahula

functor
import
   Application	at 'x-oz://system/Application'
   Open		at 'x-oz://system/Open'
define
   Stdout = {New Open.file init(name:stdout)}
   proc {Bottles N} S in
      if N \= 1 then S="s" else S=nil end
      {Stdout write(vs:N#" bottle"#S#" of beer on the wall,\n")}
      {Stdout write(vs:N#" bottle"#S#" of beer.\n")}
   end

   proc {Drink B}
      case B of X|Xr then
	 {Bottles X}
	 {Stdout write(vs:"Take one down, pass it around,\n\n")}
	 {Drink Xr}
      [] nil then
	 {Bottles "No more"}
	 {Stdout write(vs:"Go buy more beer!\n")}
      end
   end

   fun {Shelve N}
      if N > 0 then N|{Shelve N-1} else nil end
   end

   {Drink {Shelve 99}}
   {Application.exit 0}
end```