
## Language C# ##
---
- Author: Paul Stancer
- Date: 04/14/09
- Info: n/a
- Score:  (2.98 in 47 votes)
- URL: https
- Original URL: http://www.99-bottles-of-beer.net/language-csharp-2041.html
---

```using System;
using System.Collections.Generic;
using System.Linq;

namespace Bottles99
{
    /// <summary>
    /// A gratuitously functional implementation of the 99 bottle of beer on the wall program.
    /// </summary>
    static class Program
    {
        static void ForEach<T>(this IEnumerable<T> items, Action<T> action)
        {
            foreach (var item in items) action(item);
        }

        static void Main(string[] args)
        {
            Console.WriteLine("99 bottles of beer on the wall, 99 bottles of beer.");

            Func<int, bool, string> bottle = (v, upper) => 
            {
                return string.Format("{0} bottle{1}", 
                    (v == 0) ? ((upper ? "N" : "n") + "o more"):v.ToString() , ((v == 1) ? "" :
"s"));
            };

            Enumerable.Range(0, 99).Reverse()
                .ForEach(i =>
                {
                    Console.WriteLine(string.Format(
                        "Take one down and pass it around, {0} of beer on the wall.\r\n", 
                            bottle(i, false)));
                    Console.WriteLine(string.Format(
                        "{0} of beer on the wall, {1} of beer.", 
                            bottle(i, true), bottle(i, false)));
                });

            Console.WriteLine("Go to the store and buy some more, 99 bottles of beer on the
wall.");

            Console.ReadLine();
        }
    }
}```