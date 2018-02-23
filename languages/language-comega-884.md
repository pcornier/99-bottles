
## Language Comega ##
---
- Author: Marc A�mann
- Date: 09/22/05
- Info: http
- Score:  (3.00 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-comega-884.html
---

```using System;
using System.Threading;

public class Test
{
  static Bottle* ProduceBottles(int n)
  {
    for(int i=0; i<n; i++)
    {
      yield return <Bottle content="beer" />;
    }
  }
  static void Main()
  {
    Singer singer = <Singer>
	                  <wall noOfBottles=0 />
                    </Singer>;
    singer.SetUpBottles(ProduceBottles(99));
    singer.StartSinging();
    Console.ReadLine();
  }
}

public class Wall
{
  attribute int noOfBottles;
  public delegate void BeerTakenDownHandler(int noOfBottlesLeft);
  public event BeerTakenDownHandler BeerTakenDown;
  public void Put(Bottle b)
  {
    noOfBottles++;
    OneBottleToTakeDown(b);
  }
  public async OneBottleToTakeDown(Bottle b);
  public Bottle Get() & OneBottleToTakeDown(Bottle b)
  {
    noOfBottles--;
    if(BeerTakenDown != null){BeerTakenDown(noOfBottles);}
    return b;
  }
}

public class BeerSong
{
  public BeerSong(Wall wall)
  {
    wall.BeerTakenDown += new Wall.BeerTakenDownHandler(AddStrophe);
  }
  public Strophe* Strophes
  {
    get
    {
      while(true)
      {
        yield return GetStrophe();
      }
    }
  }
  
  async AddStrophe(int bottlesLeft);
  Strophe GetStrophe() & AddStrophe(int bottlesLeft)
  {
    return  <Strophe bottlesLeft={bottlesLeft} />;
  }
  
  public class Strophe
  {
    attribute int bottlesLeft;
    
    public override string ToString()
    {
      if(bottlesLeft > 0)
      {
        return (bottlesLeft+1) + " bottles of beer on the wall, "
          +(bottlesLeft+1)+" bottles of beer."
          + "\nTake one down and pass it around, "+(bottlesLeft)
          +" bottles of beer on the wall.\n";
      } else {
        return (bottlesLeft+1) + " bottles of beer on the wall, "
          +(bottlesLeft+1)+" bottles of beer."
          + "\nTake one down and pass it around,"
          + " no more bottles of beer on the wall.\n"
          + "\nNo more bottle of beer on the wall, "
          + "no more bottles of beer."
          + "\nGo to the store and buy some more, 99"
          + " bottles of beer on the wall.";
      }
    }
  }
}

public class Singer
{
  struct
  {
    Wall wall;
  }
  public void SetUpBottles(Bottle* bottles)
  {
    bottles.{this.wall.Put(it)};
  }
  public void StartSinging()
  {
    Thread t = new Thread(new ThreadStart(SingAboutTheWallAndTheBeer));
    t.IsBackground = true;
    t.Start();
  }
  void SingAboutTheWallAndTheBeer()
  {
    BeerSong song = new BeerSong(this.wall);
    new Drinker(this.wall).StartDrinking();
    song.Strophes.{ Console.WriteLine(it) };
  }
}

public class Bottle
{
  attribute string content;
}

public class Drinker
{
  Wall wall;
  public Drinker(Wall wall)
  {
    this.wall = wall;
  }
  public void StartDrinking()
  {
    Thread t = new Thread(new ThreadStart(DrinkAllBeerFromTheWall));
    t.IsBackground = true;
    t.Start();
  }
  public void DrinkAllBeerFromTheWall()
  {
    while(true)
    {
      Bottle b = wall.Get();
    }
  }
}```