
## Language Rosi-SQL ##
---
- Author: F.D�hrn
- Date: 04/26/06
- Info: n/a
- Score:  (3.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rosi-sql-1140.html
---

```procedure main
field i smallint
	create channel sysout
	for i = 99 to 0 step -1
		if i > 1
			write(i # " bottles of beer on the wall, " # i # " bottles of beer.")
			if i = 2
				write("take one down, pass it around, " # i - 1 # " bottle of beer on the wall.")
			else
				write("take one down, pass it around, " # i - 1 # " bottles of beer on the wall.")
			end
		elseif i = 1
			write(i # " bottle of beer on the wall, " # i # " bottle of beer.")
			write("take one down, pass it around, no more bottles of beer on the wall.")
		else
			write("No more bottles of beer on the wall, no more bottles of beer.")
			write("Go to the store and buy some more, 99 bottles of beer on the wall.")
		end
		write("")
	end
	close channel sysout
	stop
end```