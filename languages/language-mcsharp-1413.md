
## Language MC# ##
---
- Author: Vadim B. Guzev
- Date: 03/09/07
- Info: http
- Score:  (3.02 in 63 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mcsharp-1413.html
---

```using System;

public class Barman {
 public int NumberOfBottlesAtTheBegining;
 public int CurrentNumberOfBottles;
 BDChannel barmanChannel;

 public Barman( int numberOfBottles ) {
  this.NumberOfBottlesAtTheBegining = numberOfBottles;
  this.CurrentNumberOfBottles = numberOfBottles;
  barmanChannel = new BDChannel();
 }

 public int HowManyBottlesOnTheWall() { // Ask the barman - How many bottles are left on the wall?
  HowManyBottlesLeft ! ();
  return (int) barmanChannel.Receive() [0];
 }

 public void AnswerHowManyBottlesLeft() & Channel HowManyBottlesLeft() {
  barmanChannel.Send( CurrentNumberOfBottles );
 }

 public void TakeOneDown() & Channel PassOneAround( string replicaFromSinger ) {
  Console.WriteLine( replicaFromSinger );
  CurrentNumberOfBottles--;

  if ( CurrentNumberOfBottles > 0 )
   Console.WriteLine( "Take one down and pass it around, {0} bottles of beer on the wall.",
CurrentNumberOfBottles );
  else if ( CurrentNumberOfBottles == 0 )
   Console.WriteLine( "Take one down and pass it around, no more bottles of beer on the wall." );
  else
   Console.WriteLine( "Go to the store and buy some more, {0} bottles of beer on the wall.",
NumberOfBottlesAtTheBegining );
 }

 public void Serve() {
  for ( int i = NumberOfBottlesAtTheBegining; i >=0 ; i-- ) {
   AnswerHowManyBottlesLeft();
   TakeOneDown();
  }
 }
}

public class Singer {
 movable SingAndDrink( BDChannel prevSinger, BDChannel nextSinger, Barman bm ) {
  prevSinger.Receive(); // Waiting for microphone from previous singer or barman
  int nBottles = bm.HowManyBottlesOnTheWall();
  if ( nBottles == 1 )
   bm.PassOneAround ! ( "1 bottle of beer on the wall, 1 bottle of beer." );
  else if ( nBottles == 0 )
   bm.PassOneAround ! ( "No more bottles of beer on the wall, no more bottles of beer." );
  else
   bm.PassOneAround ! ( nBottles + " bottles of beer on the wall, " + nBottles + " bottles of beer."
);
  // Drinking here...
  if ( nextSinger != null ) nextSinger.Send( "microphone" ); // Giving the microphone to the next
singer
 }
}

public class Bar {
 public static void StartParty() {
  // We need at least one barman for a good party... isn`t it? ;)
  Barman bm = new Barman( 99 );

  BDChannel prevSinger = null;
  BDChannel nextSinger = new BDChannel();
  BDChannel firstSinger = nextSinger;

  // We`ll have 100 drunk singers in our bar :)
  for ( int i = 0; i <= bm.NumberOfBottlesAtTheBegining; i++ ) {
   Singer s = new Singer();
   prevSinger = nextSinger;
   nextSinger = new BDChannel();
   s.SingAndDrink( prevSinger, nextSinger, bm );
  }
  firstSinger.Send( "microphone" ); // Come on guys! Let`s start!

  bm.Serve(); // Yeah... barman is working on parties...
 }

 public static void Main() {
  Bar.StartParty();
 }
}```