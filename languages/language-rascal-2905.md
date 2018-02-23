
## Language Rascal ##
---
- Author: Mariusz Krawczyk
- Date: 06/26/12
- Info: http
- Score:  (3.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-rascal-2905.html
---

```module demo::basic::Bottles

import IO;

str bottles(0)     = "no more bottles"; 
str bottles(1)     = "1 bottle";
default str bottles(int n) = "<n> bottles"; 

public void sing(){ 
  for(n <- [99 .. 1]){
       println("<bottles(n)> of beer on the wall, <bottles(n)> of beer.");
       println("Take one down, pass it around, <bottles(n-1)> of beer on the wall.\n");
  }  
  println("No more bottles of beer on the wall, no more bottles of beer.");
  println("Go to the store and buy some more, 99 bottles of beer on the wall.");
}```