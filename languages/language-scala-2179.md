
## Language Scala ##
---
- Author: Eduardo Costa
- Date: 09/16/09
- Info: http
- Score:  (3.00 in 18 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-scala-2179.html
---

```/**
 * Scala implementation of "99 beers on the wall" with a vengeance. Contains
 * examples of Scala features, like tail recursion.
 *
 * @author Eduardo Costa http://extremejava.tpk.com.br
 */
object Beers extends Application {

	def bottles(qty : Int, f : => String) = // higher-order functions
		qty match {
			case 0 => "no more bottles of beer" + f
			case 1 => "1 bottle of beer" + f
			case x => x + " bottles of beer" + f
		}

	def beers(qty : Int) = bottles(qty, " on the wall.")

	def sing(qty : Int)(implicit song : String) : String = {
		def takeOne =
			qty match {
				case 0 => "Go to the store and buy some more."
				case x => "Take one down and pass it around."
			}

		def nextQty = // nested functions
			if (qty == 0) 99
			else qty - 1

		def refrain = {
			beers(qty).capitalize + " " + bottles(qty, "") + ".\n" +
			takeOne + " " + beers(nextQty) + "\n\n"
		}

		if (qty == -1) song
		else sing(qty - 1)(song + refrain) // tail recursion
	}

	implicit val headOfSong : String = ""

	println(sing(99)) // implicit parameter

}```