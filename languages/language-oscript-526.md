
## Language OScript ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-oscript-526.html
---

```Function BeerFunction()

	Integer i
	String s = "s"

	for i = 99 downto 1
		echo( Str.String( i ) + " bottle" + s + " of beer on the wall. " )
		echo( "   " + Str.String( i ) + " bottle" + s + " of beer. " )
		echo( "Take one down and pass it around," )
	    if (i < 3)
	       s = ( ( ( i - 1 ) == 1 ) ? "" : "s" )
	    end
		echo( "   " + Str.String( i - 1 ) + " bottle" + s + " of beer on the wall." )
	end
end```