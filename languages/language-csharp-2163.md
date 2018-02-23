
## Language C# ##
---
- Author: veteran corporate coder
- Date: 08/16/09
- Info: n/a
- Score:  (3.00 in 37 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-csharp-2163.html
---

```// 99 bottles of beer in typical Fortune 500 style c#/.Net
// from a 20 year veteran of corporate cubicle-dwelling coding
// purpose of this sample: give a flavor of c# and defensive programming

using System;
using System.Text;
using System.Text.RegularExpressions; // todo: find a way to do something with regexp to increase
runtime scalability

namespace _99bottles
{

    class EnglishLyrics // purpose: contain lyrics localized for user's selected language
        // note: in the future, obtain lyrics with web service call to international lyrics element
server
    {
        public static string NoBeer { get { return "Can't sing, no beer!"; }}
        public static string Restock { get { return "Go to the store and buy some more"; }}
        public static string Substance { get { return " of beer"; } }
        public static string Location { get { return EnglishLyrics.Substance + " on the wall"; } }
        public static string Distribution { get { return "Take one down and pass it around"; } }
        public static string AllOut { get { return "no more bottles"; } }
        public static string Singular { get { return "1 bottle";}}
        public static string Plural { get { return "bottles"; } }
    }

    class SongUtilities // API for utility functions that can be used with any song
    {
        public static string capitalizeFirst(string Source)
        {
            return char.ToUpper(Source[0]) + Source.Substring(1);
        }
    }

    class Program
    // generate song lyrics and display to standard out then wait for user to press any key
    // notice: may need to redirect standard out to text file as console may not be able to show 99
bottles worth of verses      
    {

        static void Main(string[] args) 
            // todo: generate text and let command line determine whether to export as text, file,
html, or xml
        {
            const int StartingSupply = 99; // todo: read starting count as command line parameter
            Console.WriteLine(SingVerses(StartingSupply));
            Console.ReadKey();
        }

        static string SingVerses(int StartingCount)
            // purpose: generate as many verses as necessary given starting count of inventory
supply
            // at process entry point (this may change when six sigma team has optimized materiel
processing)
        {
            if (StartingCount > 0)
            {
                int RestockLevel = StartingCount;
                StringBuilder theSong = new StringBuilder();
                // note: this will all need to be rewritten if Legal dept. requires ability to
distribute >1 bottle at a time
                for (int i = StartingCount; i >= 0; --i)
                {
                    theSong.Append(Verse(i, RestockLevel)+ "\n");
                }
                return theSong.ToString();
            }
            else
            {
                return EnglishLyrics.NoBeer;
            }
        }

        static string Verse(int Quantity, int RestockLevel)
        {
            StringBuilder theVerse = new StringBuilder();

            theVerse.Append(SongUtilities.capitalizeFirst(NoticeCurrentLevel(Quantity)));
            theVerse.Append(DistributeOrRestock(Quantity, RestockLevel));

            return theVerse.ToString() + "\n";
        }

        static string NoticeCurrentLevel(int Quantity)
            // management and user reporting of current stocking level and locatino
            // with redundancy for inebriation-inhibited promulgation of mission-critical data
        {
            StringBuilder theLine = new StringBuilder();
            string theCount = singCount(Quantity);

            theLine.Append(theCount);
            theLine.Append(EnglishLyrics.Location + ", ");
            theLine.Append(theCount + EnglishLyrics.Substance + ".\n");

            return theLine.ToString();
        }

        static string singCount(int Quantity)
// shouldn't this be revised with regexp?
        {
            switch (Quantity)
            {
                case 0:
                    return EnglishLyrics.AllOut;
                    break;
                case 1:
                    return EnglishLyrics.Singular;
                    break;
                default:
                    return Quantity.ToString() + " " + EnglishLyrics.Plural;
                    break;
            }
        }

        static string DistributeOrRestock(int Quantity, int RestockLevel)
        {
            StringBuilder theLine = new StringBuilder();
            if (Quantity > 0)
            { // distribute one from current supply then notify stakeholders of post-distribution
depleted supply level
                theLine.Append(EnglishLyrics.Distribution + ", ");
                theLine.Append(singCount(Quantity - 1));
            }
            else
            { // replenish distribution buffer via standard procurement channels,
                // then notify stakeholders that supply chain processing is complete re: inventory
validation
                theLine.Append(EnglishLyrics.Restock + ", ");
                theLine.Append(singCount(RestockLevel));
            }
            theLine.Append(EnglishLyrics.Location + ".");
            return theLine.ToString();
        }

    }
}```