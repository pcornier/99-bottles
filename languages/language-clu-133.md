
## Language CLU ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-clu-133.html
---

```% 99 bottles of beer in CLU by dcurtis@lcs.mit.edu

start_up = proc()
   po: stream := stream$primary_output()
   for i: int in int$from_to_by(99, 1, -1) do
      if i = 1 then
         stream$putl(po, int$unparse(i) || " bottle of beer on the wall")
         stream$putl(po, int$unparse(i) || " bottle of beer...")
      else
         stream$putl(po, int$unparse(i) || " bottles of beer on the wall")
         stream$putl(po, int$unparse(i) || " bottles of beer...")
      end
      stream$putl(po, "Take one down, pass it around...")
      end
   stream$putl(po, "\nTime to get more beer!")
   end start_up```