
## Language Tiger ##
---
- Author: Laurent Le Brun
- Date: 06/12/05
- Info: http
- Score:  (2.92 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tiger-746.html
---

```/* Author: Laurent Le Brun <llb [at] fr.fm>
 * Tiger version of 99 bottles of beer.
 *
 * Tiger's language as described by Andrew Appel in his
 * "Modern Compiler Implementation" books
*/

let
  function beer (n: int) =
    let
      function print_bottles (n: int) =
        (
          print_int(n);
          print (if n = 1 then " bottle" else " bottles")
        )
    in
      print_bottles(n);
      print(" of beer on the wall, ");
      print_bottles(n);
      print(" of beer.\n");
      print("Take one down, pass it around, ");
      if n > 1 then
        (
          print_bottles(n - 1);
          print(" of beer on the wall.\n\n");
          beer(n - 1)
        )
      else
        (
          print("no more bottles of beer on the wall.\n\n");
          print("No more bottle of beer on the wall. No more bottles of beer...\n");
          print("Go to the store and buy some more...99 bottles of beer.\n\n")
        )
    end
in
  beer(99)
end```