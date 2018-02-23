
## Language LUA ##
---
- Author: Philippe Lhoste
- Date: 04/20/05
- Info: http
- Score:  (3.03 in 644 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lua-365.html
---

```-- Lua 99 Bottles of Beer
-- by Philippe Lhoste <PhiLho@GMX.net> http://jove.prohosting.com/~philho/

function PrintBottleNumber(n)
  local bs
  if n == 0 then
    bs = "No more bottles"
  elseif n == 1 then
    bs = "One bottle"
  else
    bs = n .. " bottles"
  end
  return bs .. " of beer"
end

for bn = 99, 1, -1 do
  write(PrintBottleNumber(bn), " on the wall, \n")
  write(PrintBottleNumber(bn), "\n")
  write("Take one down and pass it around,\n")
  write(PrintBottleNumber(bn-1), " on the wall, \n\n")
end
write("No more bottles of beer on the wall,\nNo more bottles of beer\n")
write("Go to the store, buy some more!\n")```