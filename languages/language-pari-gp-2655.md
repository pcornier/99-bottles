
## Language PARI/GP ##
---
- Author: Charles R Greathouse IV
- Date: 05/17/11
- Info: http
- Score:  (3.00 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-pari-gp-2655.html
---

```forstep(n=99,3,-1,
  print(n" bottles of beer on the wall, "n" bottles of beer.");
  print("Take one down and pass it around, ",n-1" bottles of beer on the wall.\n")
);
print("2 bottles of beer on the wall, 2 bottles of beer.");
print("Take one down and pass it around, 1 bottle of beer on the wall.\n");
print("1 bottle of beer on the wall, 1 bottle of beer.");
print("Take one down and pass it around, no more bottles of beer on the wall.\n");
print("No more bottles of beer on the wall, no more bottles of beer.");
print("Go to the store and buy some more, 99 bottles of beer on the wall.")```