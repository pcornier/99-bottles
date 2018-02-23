
## Language Boo ##
---
- Author: Doug H.
- Date: 05/22/05
- Info: http
- Score:  (2.69 in 13 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-boo-682.html
---

```import System.Threading

class Bottle:
	[Property(Type)]
	static type = "beer"
	
	static start = 99
	static count = start
	static Count:
		get:
			return count
		set:
			count = value
			start = value
			
	id as int
	private def constructor(n as int):
		id = n
	
	static def take() as Bottle:
		if count > 0:
			print "take one down, pass it around,"
			return Bottle(--count)
		return null
		
	static def buy() as Bottle:
		count = start + 1
		print "go to the store, buy some more,"
		return Bottle(--count)
	
	static State as string:
		get:
			return Bottle.ToString()
			
	static def ToString():
		s = "${count} bottle"
		s += "s" if count != 1
		s += " of ${type}"
		return s


Bottle.Count = 5
while true:
	print "${Bottle.State} on the wall, ${Bottle.State},"
	b = Bottle.take() or Bottle.buy()
	print Bottle.State, "on the wall!\n"
	Thread.Sleep(1500)```