
## Language Parallel C# ##
---
- Author: Vadim B. Guzev
- Date: 03/29/08
- Info: http
- Score:  (2.93 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-parallel-csharp-1745.html
---

```/**
 * This little program generate the lyrics to the song 
 * 99 Bottles of Beer as an output. 
 * In case you do not know the song, you will find 
 * the lyrics to the song here:
 * http://www.99-bottles-of-beer.net/lyrics.html
 *
 * This version is made for cluster architectures.
 * More info is available at http://www.parallelcsharp.com/
 **/
using System;
using System.Text;

public class Bottles99 {
 static string getPart( int nBottles ) { 
  // Just a helper function which spells "bottles"...
  return nBottles == 1 ? 
   "1 bottle" : nBottles == 0 ? "no more bottles" : nBottles + " bottles";
 }

 static movable SingAndDrink( () => int takeOneDown, 
                              (int, string) => async passItAround ) {
  int nBottles = takeOneDown();
  string bottles = getPart( nBottles );
  StringBuilder sb = new StringBuilder();
  sb.Append( bottles.Replace('n','N') + " of beer on the wall, " + 
   bottles + " of beer." + Environment.NewLine );
  nBottles--;
  bottles = getPart( nBottles );

  if (nBottles >= 0) sb.Append( 
   "Take one down and pass it around, " + bottles + " of beer on the wall." );
  else sb.Append( "
   Go to the store and buy some more, 99 bottles of beer on the wall." );
  sb.Append( Environment.NewLine );
  sb.Append( Environment.NewLine );

  if ( nBottles >= 0 ) passItAround( nBottles, sb.ToString() );
 }

 static int TakeOneDown() & 
        static async PassItAround( int nBottles, string replica ) {
  Console.Write( replica );
  if ( nBottles == 0 ) Ready();
  return nBottles;
 }

 static int TakeOneDown() & static async BuySomeMore( int nBottles ) {
  return nBottles;
 }

 static async Ready() & static void Wait() {}

 public static void Main( string[] args ) {
  for ( int i = 0; i < 100; i++ ) // We'll have 100 singers
   Bottles99.SingAndDrink( Bottles99.TakeOneDown, Bottles99.PassItAround );
  Bottles99.BuySomeMore( 99 );
  Bottles99.Wait();
 }
}```