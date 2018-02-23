
## Language MuPad ##
---
- Author: Thorsten Schaefer
- Date: 06/03/05
- Info: http
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-mupad-736.html
---

```// 99 Bottles of Beer in Mupad
// by Thorsten Schaefer (schaefer-thorsten[at]gmx[dot]de)
// Paderborn, Germany
for beers from 99 downto 0 do
  if beers = 1 then
    s := "":
  else
    s := "s":
  end_if:
 
  print(NoNL, expr2text(beers)." bottle".s." of beer on the wall, "):
  print(NoNL, expr2text(beers)." bottle".s." of beer, \n"):

  if beers = 0 then
    print(NoNL, "Go to the store, buy some more, "):
    print(NoNL, "99 bottles of beer on the wall.\n"):
  else
    print(NoNL, "Take one down, pass it around, "):
    print(NoNL, expr2text(beers)." bottle".s." of beer on the wall.\n\n"):
  end_if:  
end_for:```