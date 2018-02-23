
## Language C# ##
---
- Author: Sudipta
- Date: 11/19/10
- Info: n/a
- Score:  (2.85 in 20 votes)
- URL: sudipta.posterous.com
- Original URL: http://www.99-bottles-of-beer.net/language-csharp-2549.html
---

```using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _99Bottlez
{
    class Program
    {
        static void Main(string[] args)
        {
            int countOfBottles = 10;
            string lineTemplate = @"{X} bottles of beer on the wall, {X} bottles 
                                  of beer. Take one down and pass it around, {Y} 
                                  bottles of beer on the wall.";

            string lastLine =  @"No more bottles of beer on the wall, no more   
                               bottles of beer.Go to the store and buy some 
                               more, {X} bottles of beer on the wall.";

            List<string> songLines = new List<string> ();
            Enumerable.Range(1, countOfBottles)
                .Reverse()
                .ToList()
                .ForEach
                 (c => songLines.Add(lineTemplate.Replace("{X}", 
                 c.ToString()).Replace("{Y}", (c-1)!=0?(c - 1).ToString():@" No 
                 more bottles of beer on the wall.")));
            
            //Add the last line
            songLines.Add(lastLine.Replace("{X}", countOfBottles.ToString()));

            songLines.ForEach(c => Console.WriteLine(c));
            Console.ReadLine();
        }
    }
}```