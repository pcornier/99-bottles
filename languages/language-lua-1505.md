
## Language LUA ##
---
- Author: Peter Cawley
- Date: 06/07/07
- Info: http
- Score:  (3.00 in 23 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-lua-1505.html
---

```phrase  = "Take one down and pass it around,"
none    = "No more bottles of beer"
justone = "1 bottle of beer"

bottles = setmetatable({0,
	drink = {
		phrase .. "\n" .. none .. " on the wall,",
		"Go to the store and buy some more!"
	}},{
	__index = function(crate,num)
		crate[num] = nil
		print(crate[num] .. " on the wall,")
		print(crate[num] .. ",")
		print(phrase)
		crate[num] = crate[num-1]
		return justone .. " on the wall,\n"
	end, __newindex = function(crate,num,drink)
		rawset(crate,num,drink or (num .. " bottles of beer"))
		if rawget(crate,num+1) then
			print(crate[num] .. " on the wall,\n")
		end
	end, __call = function()
		return ipairs{justone, none}
	end}
)

print(bottles[99])

for it, beer in bottles() do
	print(beer .. " on the wall,")
	print(beer .. ",")
	print(bottles.drink[it])
	print ""
end```