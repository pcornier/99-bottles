
## Language Nemerle ##
---
- Author: caminoix
- Date: 09/13/05
- Info: http
- Score:  (3.00 in 38 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-nemerle-869.html
---

```/*
"Nemerle is a high-level statically-typed programming language for the .NET platform. It offers
functional, object-oriented and imperative features. It has a simple C#-like syntax and a powerful
meta-programming system." - http://nemerle.org/Main_Page

TIP: If you like this code and would like to try Nemerle, take a look at
http://nemerle.org/Editors#Editors for text editors supporting Nemerle syntax highlighting.
*/

using System.Console;

class bottles{
   static bottles(count:int):void{
      mutable s="s"; when (count==2) s="";
      WriteLine($"$count bottles of beer on the wall, $count bottles of beer.");
      WriteLine($"Take one down and pass it around, $(count-1) bottle$s of beer on the wall.\n");
      when (count>2) bottles(count-1);
   }

   public static Main():void{
      bottles(99);
      WriteLine("1 bottle of beer on the wall, 1 bottle of beer.");
      WriteLine("Take one down and pass it around, no more bottles of beer on the wall.\n");
      WriteLine("No more bottles of beer on the wall, no more bottles of beer.");
      WriteLine("Go to the store and buy some more, 99 bottles of beer on the wall.");
   }
}```