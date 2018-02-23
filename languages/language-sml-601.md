
## Language SML ##
---
- Author: Norvald
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 113 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-sml-601.html
---

```(* SML version of 99 bottles of beer *)
(* written by Norvald - norvald@hsr.no *)
let
    val itoa = Makestring.intToStr
    fun getabeer 0 = (print "Go to the store and buy some more,\n";
		      print "99 bottles of beer on the wall.\n")
      | getabeer 1 = (print "1 bottle of beer on the wall,\n";
		      print "1 bottle of beer,\n";
		      print "Take one down, pass it around,\n";
		      print "0 bottle of beer on the wall.\n\n";
		      getabeer (0)) 
      | getabeer x = (print (itoa(x)^" bottles of beer on the wall,\n"); 
		      print (itoa(x)^" bottles of beer,\n");
		      print "Take one down, pass it around,\n";
		      print (itoa(x-1)^" bottles of beer on the wall.\n\n");
		      getabeer (x-1)) 
in
    getabeer 99;
end```