
## Language JScript/NET ##
---
- Author: Chris R. Timmons
- Date: 04/20/05
- Info: n/a
- Score:  (3.01 in 91 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-jscript-net-8.html
---

```*
 * NinetyNine.js
 *
 * The "99 Bottles of Beer" song rendered in JScript.NET.
 *
 * To compile:
 *
 *   jsc /target:exe NinetyNine.js
 *
 * written by Chris R. Timmons (chris@crtimmonsinc.com)
 * March 25, 2003
 */

import System;

new Sing();

public final class Sing
{
  const verse : String =
    "{0} bottle{2} of beer on the wall,\n" +
    "{0} bottle{2} of beer.\n" +
    "{4}" +
    "{1} bottle{3} of beer on the wall.\n";
  const beerLeft : String = "Take one down, pass it around.\n";
  const noBeerLeft : String = "Go to the store, get some more!\n";

  public function Sing()
  {
    var bottles : int = this.GetNumberOfBottles();

    for (var x = bottles; x >= 0; x--)
    {
      if (x == 2)
        Console.WriteLine(verse, x, x - 1, "s", "", beerLeft);
      else if (x == 1)
        Console.WriteLine(verse, x, "No more", "", "s", beerLeft);
      else if (x == 0)
        Console.WriteLine(verse, "No more", bottles, "s", (bottles == 1 ? "" : "s"), noBeerLeft);
      else
        Console.WriteLine(verse, x, x - 1, "s", "s", beerLeft);
    }
  }

  private function GetNumberOfBottles() : int
  {
    const defaultBottles : int = -1;

    // Return value.
    var bottles : int = defaultBottles;

    // Check the command line arguments.
    // (First array element is the program name.  Elements 2 thru N
    // are the actual arguments).
    var args : String[] = Environment.GetCommandLineArgs();

    if (args.Length == 1)
    {
      // If no arguments were given, default to 99 bottles.
      bottles = 99;
    }
    else if (args.Length == 2)
    {
      // One argument was given.

      // Is it a "/?" argument?
      if (args[1] == "/?")
      {
        DisplayUsage();
      }
      else
      {
        // Attempt to convert the argument to an integer.
        try
        {
          // Strip out any commas the user may have included
          // in the number before attempting the conversion.
          bottles = Convert.ToInt32(args[1].Replace(",", ""));

          // The conversion succeeded...
          if (bottles < 1)
          {
            // ...but zero and negative numbers are not allowed.
            bottles = defaultBottles;

            Console.WriteLine("");
            Console.WriteLine("ERROR: Can't sing a song for \"{0}\" bottles.", args[1]);
            DisplayUsage();
          }
        }
        catch(ex)
        {
          Console.WriteLine("");
          Console.WriteLine("ERROR: Can't sing a song for \"{0}\" bottles.", args[1]);
          DisplayUsage();
        }
      }
    }
    else
    {
      // More than one argument was given.
      DisplayUsage();
    }

    return bottles;
  }

  private function DisplayUsage()
  {
    Console.WriteLine("");
    Console.WriteLine("NinetyNine.exe - Displays lyrics for the \"99 Bottles of Beer\" song.");
    Console.WriteLine("");
    Console.WriteLine("Usage:");
    Console.WriteLine("  NinetyNine [option]");
    Console.WriteLine("");
    Console.WriteLine("           NinetyNine Command Line Options");
    Console.WriteLine("");
    Console.WriteLine("  /?                    :  Display this help screen.");
    Console.WriteLine("");
    Console.WriteLine("  Integer between");
    Console.WriteLine("  1 and 2,147,483,648   :  Number of bottles to sing about.  ");
    Console.WriteLine("                           Commas in the number are allowed.");
    Console.WriteLine("");
  }
}```