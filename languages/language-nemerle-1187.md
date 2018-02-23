
## Language Nemerle ##
---
- Author: Vermicious Knid
- Date: 06/20/06
- Info: n/a
- Score:  (3.00 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nemerle-1187.html
---

```using System;

def capitalize = s => Char.ToUpper(s[0]).ToString() + s.Substring(1);

def numeral(n)
{
	assert(n <= 99);
	def tens = array["twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
	def nums = array["no more", "one", "two", "three", "four", "five", "six", 
	                "seven", "eight", "nine", "ten", "eleven", "twelve"];
	def teens = array["thir", "four", "fif", "six", "seven", "eigh", "nine"];
	if (n < 13)
		nums[n] 
	else if (n < 20)
		teens[n - 13] + "teen"
	else
		tens[(n / 10) - 2] + (if ((n % 10) > 0) " " + nums[n % 10] else "")
}

def beers(n)
{
	| 0 => "no more bottles of beer"
  	| 1 => "one more bottle of beer"
  	| _ => $"$(numeral(n)) bottles of beer"
}

def onTheWall = n => $"$(beers(n)) on the wall, $(beers(n)).\n";

def passAround(n)
{
	| 0 => $"Go to the store and buy some more, $(beers(99)) on the wall.\n"
	| _ => $"Take one down and pass it around, $(beers(n-1)) on the wall.\n"
}

$[99, 98 .. 0].Iter(n => Console.WriteLine(capitalize(onTheWall(n)) + passAround(n)))```