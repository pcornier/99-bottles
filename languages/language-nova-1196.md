
## Language Nova ##
---
- Author: Sachin Kainth
- Date: 06/28/06
- Info: http
- Score:  (2.80 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nova-1196.html
---

```// 99 Bottles of beer

class App
{
	static void main( String[] args )
	{
		for (int i = 99; i >= 0; i--) 
		{
		 	if (i == 0) 
			{
				Stream.writeLine("No more bottles of beer on the wall, " + 
					"no more bottles of beer.");	
				Stream.writeLine("Go to the shop and buy some more, " +
					"99 bottles of beer on the wall.");
		
			}
			else if (i == 1)
			{
				Stream.writeLine("1 bottle of beer on the wall, " +
					"1 bottle of beer.");	
				Stream.writeLine("Take one down and pass it around, " +
					"no more bottles of beer on the wall.");
			}
			else if (i == 2)
			{
				Stream.writeLine("2 bottles of beer on the wall, " +
					"2 bottles of beer.");	
				Stream.writeLine("Take one down and pass it around, " +
					"1 bottle of beer on the wall.");
			}
			else 
			{
				Stream.writeLine(
					Integer.toString(i) + 
					" bottles of beer on the wall, " + 
					Integer.toString(i) + " bottles of beer.");
				Stream.writeLine(
					"Take one down and pass it around, " + 
					Integer.toString(i-1) + 
					" bottles of beer on the wall.");
			}
			Stream.writeLine("");
		}
	}
}```