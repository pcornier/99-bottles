
## Language SCAR ##
---
- Author: Kaitnieks & Dylock & Freddy199
- Date: 06/25/07
- Info: http
- Score:  (2.00 in 5 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-scar-1533.html
---

```program BeerBottler;

const WaitForRefill = True; //Time to wait (Milleseconds)
      RefillTime    = 1000; //between each saying if Wait = True

var i: Integer;
begin
  for i := 99 downto 1 do
  begin
    WriteLn(IntToStr(i) + ' bottle(s) of beer on the wall, '
      + IntToStr(i) + ' bottle(s) of beer!');
    WriteLn('Take one down, pass it around, '
      + IntToStr(i - 1) + ' bottle(s) of beer on the wall.');
    if WaitForRefill then Wait(RefillTime);
  end;
end.```