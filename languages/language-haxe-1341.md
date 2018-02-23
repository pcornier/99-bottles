
## Language haXe ##
---
- Author: Stephane Bebrone
- Date: 11/27/06
- Info: http
- Score:  (3.02 in 185 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-haxe-1341.html
---

```/// Implementation of Ninety-Nine Bottles of Beer Song in HaXe.
/// This code is inspired by C# implementations.
/// You can use the differents outputs (JS, Flash, Neko) allowed by HaXe compiler.
///
/// Stephane Bebrone
/// http://weblog.shaoken.be
/// November 27, 2006
/// 

package ninetyninebottles;

class SingTheSong
{

	static var _BOTTLECOUNT:Int = 100;
	
	static function main()
	{
        var binge:Binge = 
			new Binge(_BOTTLECOUNT);
		binge.start();
	}	
}

class Binge
{
	private var _beverage:String;
	private var _count:Int;
	
	/**
	 * Initializes the binge.
	 * 
	 * @param	count		How many we're consuming.
	 */
	public function new(count:Int)
	{
		_count = count;
	}
	
	/**
	 * Let's get started.
	 * 
	 */
	public function start():Void
	{
		var currentIndex:Int = 0;
		var sb:StringBuf = new StringBuf();
		var count:Int = _count;
		while(count-- > 0)
		{
			sb.add(singVerseMethod(count));
		}
		trace(sb.toString());
	}
	
	/**
	 * The pluralization method type.
	 * 
	 * @param	bottleIndex	The bottle index.
	 * @return	An "bottles" if plural, otherwise "bottle".
	 */
	private function pluralizer(bottleIndex:Int):String
	{
		if(bottleIndex == 1)
		{
			return "1 bootle";
		}
		else
		{
			return bottleIndex + " bottles";
		}
	}
	
	/**
	 * Sings one verse of the 99 Bottles of Beer song.
	 * 
	 * @param	bottleIndex	The bottle index.
	 * @return	The song verse.
	 */
	private function singVerseMethod(bottleIndex:Int):String
	{
		var sbTmp:StringBuf = new StringBuf();
		if(bottleIndex > 1)
		{
			sbTmp.add(pluralizer(bottleIndex));
			sbTmp.add(" of beer on the wall, ");
			sbTmp.add(pluralizer(bottleIndex));
			sbTmp.add(" of beer.\nTake one down, pass it around,");
			sbTmp.add(pluralizer(bottleIndex - 1));
			sbTmp.add(" of beer on the wall.\r\r");
		}
		else if (bottleIndex == 1)
		{
			sbTmp.add(pluralizer(bottleIndex));
			sbTmp.add(" of beer on the wall, ");
			sbTmp.add(pluralizer(bottleIndex));
			sbTmp.add(" of beer.\nTake one down, pass it around,");
			sbTmp.add(" no more bottles of beer on the wall.\r\r");	
		}
		else if (bottleIndex == 0)  
		{
			sbTmp.add("No more bottles of beer on the wall,");
			sbTmp.add("no more bottles of beer.\r");
			sbTmp.add("Go to the store and buy some more, ");
			sbTmp.add(_count-1);
			sbTmp.add(" bottles of beer on the wall.\r");
		}
		return sbTmp.toString();
	}
}```