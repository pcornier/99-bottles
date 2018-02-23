
## Language C# ##
---
- Author: Yelinna Pulliti Carrasco
- Date: 08/04/09
- Info: http
- Score:  (2.00 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-csharp-2155.html
---

```using System;
using System.Text;

namespace Bottles_of_Beer
{
    class Program
    {
        delegate int BottlesBeer(BottlesBeer B, int n);

        static void Main(string[] args)
        {
            Func<int, int> BeerEnd = n =>
            {
                Console.WriteLine(
     "Take one down and pass it around, no more bottles of beer on the wall.");
                Console.WriteLine(
     "No more bottles of beer on the wall, no more bottles of beer.");
                Console.WriteLine(
     "Go to the store and buy some more, {0} bottles of beer on the wall.",
                 n + 98);
                return 0;
            };

            Func<int, int> Beer = n =>
            {
                string s = n > 2 ? 
                    String.Concat(
                    "Take one down and pass it around, ",
                    (n - 1).ToString(), " bottles of beer on the wall.") :
                    String.Concat(
                    "Take one down and pass it around, ",
                    (n - 1).ToString(), " bottle of beer on the wall.");

                Console.WriteLine(s);
                return 0;
            };

            BottlesBeer B2 = (b, i) =>
            {
                string s = i >= 2 ? String.Concat(
                    (i).ToString(), " bottles of beer on the wall, ",
                    (i).ToString(), " bottles of beer on the wall.") :
                                String.Concat(
                    (i).ToString(), " bottle of beer on the wall, ",
                    (i).ToString(), " bottle of beer on the wall.");

                Console.WriteLine(s);

                if (i == 1)
                {
                    BeerEnd(i);
                    return 0;
                }

                else
                {
                    Beer(i);
                    return i = b(b, i - 1);
                }
            };

            B2(B2, 99); // you can do: int b0 = B2(B2,99)
            Console.ReadLine();
        }
    }
}```