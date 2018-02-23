
## Language Pascal ##
---
- Author: Michael Niedermayr
- Date: 02/28/06
- Info: n/a
- Score:  (3.02 in 88 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-pascal-1067.html
---

```program BottlesOfBeer (output);
{this program plays the 99 bottles of beer song}

const
  BOTTLESSTART = 99;
  BOTTLESEND = 1;

type
  tBottles = BOTTLESEND..BOTTLESSTART;

var
  bottles : tBottles;

begin
  for bottles := BOTTLESSTART downto BOTTLESEND do
  begin
    if bottles > 1 then
    begin
      writeln (bottles,' bottles of beer on the wall, ',bottles, ' bottles of beer.');
      write ('Take one down, pass it around, ');
      writeln (bottles - 1, ' bottles of beer on the wall.');
      writeln
    end
    else
    begin
      writeln ('1 bottle of beer on the wall, one bottle of beer.');
      writeln ('Take one down, pass it around, no more bottles of beer on the wall');
      writeln;
      writeln ('No more bottles of beer on the wall, no more bottles of beer.');
      writeln ('Go to the store and buy some more, 99 bottles of beer on the wall.')    
    end
  end
end.```