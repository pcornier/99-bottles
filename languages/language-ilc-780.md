
## Language ilc ##
---
- Author: Patrik Graf
- Date: 07/05/05
- Info: n/a
- Score:  (3.00 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ilc-780.html
---

```public

  import system, stdio

private

  $Bottles: Byte = 99

  loop
    write($Convert.ToStr($Bottles)+" Bottles of beer on the wall, ")
    writeln($Convert.ToStr($Bottles)+" bottles of beer.")
    write("Take one down and pass it around, ")
    writeln($Convert.ToStr($Bottles)+" bottles of beer on the wall.")
    writeln(" ")
    $Bottles = $Bottles - 1
    if ($Bottles = 1) do (break)
  end

  write($Convert.ToStr($Bottles)+" Bottle of beer on the wall, ")
  writeln($Convert.ToStr($Bottles)+" bottle of beer.")
  write("Take one down and pass it around, ")
  writeln("no more bottles of beer on the wall.")
  writeln(" ")
  write("No more bottle of beer on the wall. ")
  writeln("No more bottles of beer...")
  write("Go to the store and buy some more...")
  writeln("99 bottles of beer.")```