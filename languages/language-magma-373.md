
## Language Magma ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (4.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-magma-373.html
---

```Magma is a computer algebra system from Australia.

verse := function(n)
    bottles := function(n)
	return n eq 1 select "1 bottle" 
                      else IntegerToString(n) cat " bottles";
    end function;

    return current cat " of beer on the wall,\n" cat
	   current cat " of beer;\n" cat
           "Take one down, pass it around,\n" cat
	   bottles(n - 1) cat " of beer on the wall.\n\n"
		where current is bottles(n);
end function;

song := procedure()
    print &cat [verse(n) : n in [99 .. 1 by -1]] cat 
	  "Go to the store and get some more.";
end procedure;```