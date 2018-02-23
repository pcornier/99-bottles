
## Language Chrome ##
---
- Author: Christian Meurin
- Date: 04/19/06
- Info: http
- Score:  (2.20 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-chrome-1128.html
---

```(* Chrome is an Object Pascal variant that runs on the .NET
   platform. It is inspired by Delphi.NET and adds several
   new language features.

   Although a Chrome application normally includes an
   AssemblyInfo.pas file, I felt it was insignificant for
   a 99 Bottles of Beer example.

   This example utilizes Chrome v1.5, which can be found at:
   http://www.chromesville.com/index.asp
*)

namespace BottlesOfBeer;

interface

uses
  System; // from the .NET framework that is...

type
  LetsStartChugging = public class
  {$REGION Declarations} // Not necessary, just for show off
  public
    constructor;
    class method Main(Args: array of String);
  end;
  {$ENDREGION}

implementation

constructor LetsStartChugging;
begin
  // Does nothing, but just shows how Chrome constructors are used.
end;

[STAThread] // Apparently needed for .NET application Main method
class method LetsStartChugging.Main(Args: array of String);
var
  GotAlcoholPoisoning: Boolean;
  BeerStock: Integer;
begin
  for BeerStock := 99 downto 0 do begin
    if BeerStock > 1 then begin
      Console.WriteLine(BeerStock + ' bottles of beer on the wall,');
      Console.WriteLine(BeerStock + ' bottles of beer.');
    end
    else begin
      Console.WriteLine('One more bottle of beer on the wall,');
      Console.WriteLine('One more bottle of beer.');
    end

    Console.WriteLine('Take one down, pass it around,');

    if BeerStock = 1 then begin
      Console.WriteLine('One more bottle of beer on the wall.');
    else begin
      Console.WriteLine(BeerStock + ' more bottles of beer on the wall.');
    end
  end

  Console.WriteLine('<passes out from drinking too much>');
end

end.```