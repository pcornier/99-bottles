
## Language Tiger ##
---
- Author: Micah Walter
- Date: 05/01/12
- Info: n/a
- Score:  (2.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tiger-2877.html
---

```/* For fun in CS350 at Haverford College. */
/* Micah Walter '14 */

for i := 1 to 100 do
  (if (100 - i > 1) then
    (printint(100 - i); print(" bottles of beer on the wall,\n");
     printint(100 - i); print(" bottles of beer.\n");
     if (100 - i > 2) then
       (print("take one down, pass it around,\n");
        printint(99 - i); print(" bottles of beer on the wall.\n\n"))
     else
       (print("take one down, pass it around,\n");
        print("1 bottle of beer on the wall.\n\n")))
   else
     (print("1 bottle of beer on the wall,\n1 bottle of beer.\n");
      print("take one down, pass it around,\n");
      print("no more beer on the wall!\n")))```