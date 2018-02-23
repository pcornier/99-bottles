
## Language C# ##
---
- Author: Jeff Dietrich
- Date: 10/26/07
- Info: n/a
- Score:  (2.99 in 74 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-csharp-1614.html
---

```/// A short and sweet C# 3.5 / LINQ implementation of 99 Bottles of Beer
/// Jeff Dietrich, jd@discordant.org - October 26, 2007

using System;
using System.Linq;
using System.Text;

namespace NinetyNineBottles
{
  class Beer
  {
    static void Main(string[] args)
    {
        StringBuilder beerLyric = new StringBuilder();
        string nl = System.Environment.NewLine;

        var beers =
            (from n in Enumerable.Range(0, 100)
             select new { 
               Say =  n == 0 ? "No more bottles" : 
                     (n == 1 ? "1 bottle" : n.ToString() + " bottles"),
               Next = n == 1 ? "no more bottles" : 
                     (n == 0 ? "99 bottles" : 
                     (n == 2 ? "1 bottle" : n.ToString() + " bottles")),
               Action = n == 0 ? "Go to the store and buy some more" : 
                                 "Take one down and pass it around"
             }).Reverse();

        foreach (var beer in beers)
        {
            beerLyric.AppendFormat("{0} of beer on the wall, {1} of beer.{2}",
                                    beer.Say, beer.Say.ToLower(), nl);
            beerLyric.AppendFormat("{0}, {1} of beer on the wall.{2}", 
                                    beer.Action, beer.Next, nl);
            beerLyric.AppendLine();
        }
        Console.WriteLine(beerLyric.ToString());
        Console.ReadLine();
    }
  }
}```