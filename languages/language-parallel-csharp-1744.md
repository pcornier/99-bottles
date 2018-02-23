
## Language Parallel C# ##
---
- Author: Vadim B. Guzev
- Date: 03/29/08
- Info: http
- Score:  (3.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-parallel-csharp-1744.html
---

```/**
 * This little program generate the lyrics to the song 
 * 99 Bottles of Beer as an output. 
 * In case you do not know the song, you will find the lyrics 
 * to the song here:
 * http://www.99-bottles-of-beer.net/lyrics.html
 *
 * This version is made for manycore processors, 
 * i.e. this is not a cluster version!
 * More information on site http://www.parallelcsharp.com
 *
 **/
using System;

public class Bottles99 {
 static string getPart( int nBottles ) { 
  // Just a helper function which spells "bottles"...
  return nBottles == 1 ? 
   "1 bottle" : nBottles == 0 ? "no more bottles" : nBottles + " bottles";
 }

 static async SingAndDrink() & static void PassMicrophone( int nBottles ) {
  string bottles = getPart( nBottles );
  Console.WriteLine( bottles.Replace('n','N') + " of beer on the wall, " + 
   bottles + " of beer." );

  nBottles--;
  bottles = getPart( nBottles );

  if (nBottles >= 0) Console.WriteLine( 
   "Take one down and pass it around, " + bottles + " of beer on the wall." );
  else Console.WriteLine( 
   "Go to the store and buy some more, 99 bottles of beer on the wall." );
  Console.WriteLine();

  if ( nBottles >= 0 ) PassMicrophone( nBottles );
 }

 public static void Main( string[] args ) {
  for ( int i = 0; i < 100; i++ ) 
   Bottles99.SingAndDrink(); // We'll have 100 singers
  Bottles99.PassMicrophone( 99 );
 }
}```