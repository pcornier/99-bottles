
## Language SenseTalk ##
---
- Author: Doug Simons
- Date: 05/31/08
- Info: http
- Score:  (3.00 in 15 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-sensetalk-1794.html
---

```
NinetyNine Bottles Of Beer
on theWall
	ninetyNine bottles of beer,
	take "one down and pass it around, "
	ninetyEight bottles of beer 
end on theWall

to handle ninetyNine libations, pouring
	global beer
	if the bottles of beer are empty then
		set the bottles of beer to be ninety plus nine
		put one into my drink 
		theWall friend, yes, the bottles of beer are there
	else if libations are flowing then
		drinkUp my hearties
	else
		shout the cheer of bottles of beer
	end if
end ninetyNine

to handle ninetyEight rounds
	if global happiness is achieved then return smiling
	ninetyNine flowing, faces are glowing
	if the number of items in the callStack \
			is greater than four times my drink then return my beer
	repeat while global happiness is not achieved
		theWall again, theWall
	end repeat
end ninetyEight

to take One, from
	global beer
	if bottles of beer are "no more" then
		write "Go to the store and buy some more, "
		put ninety-nine into bottles of beer
		set global happiness to achieved
		ninetyNine flowing, again, people are happy
	else
		write "Take" && one
		subtract my drink from bottles of beer
		if bottles of beer is less than my drink
		then set the bottles of beer to be "all gone"
	end if
end take

to shout HURRAH
	put capitalized of hurrah & " on the wall, " & HURRAH & "."
end shout

to cheer beer
	put " bottle of beer" into bottles
	try to put (if beer is more than one then "s" else empty) \
			after the first word in bottles
	start using me
	if beer is "all gone" then
		put "no more" into beer
		get beer
	else
		get the joy of beer
	end if
	put it into glass
	return glass & bottles
end cheer

to drinkUp beer
	if bottles of global beer is my drink then put bottle into bottles
	write the joy of bottles of global beer && bottles && "of "
	put "beer on the wall!",,
end drinkUp

to handle joy of beer
	if beer is "all gone" then return "no more"
	set wine to nine
	set my hopes to the taste of beer
	set my dreams to beer's foam
	if my hopes are empty then
		if beer is greater than wine 
		then set my dreams to the gusto of beer 
		else get the fruit of my vine
	else if my dreams are not empty then
		put my doubts after my hopes
	end if
	return all of my hopes & all of my dreams
end joy

to taste beer
	return item ten minus beer div ten of ("ninety", "eighty", \
			"seventy", "sixty", "fifty", "forty", "thirty", "twenty")
end taste

to handle foam top
	return item ten minus top rem ten of ("nine", "eight", \
			"seven", "six", "five", "four", "three", "two", "one")
end foam

to handle gusto now
	if now is less than twenty
	then return item twenty minus now of ("nineteen", \
			"eighteen","seventeen", "sixteen", "fifteen", \
			"fourteen", "thirteen", "twelve", "eleven", "ten")
end gusto

to handle all smiles
	return smiles
end all

properties
	doubts: "-"
end properties```