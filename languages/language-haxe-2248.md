
## Language haXe ##
---
- Author: tong
- Date: 11/28/09
- Info: http
- Score:  (2.90 in 10 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-haxe-2248.html
---

```class NinetyNineBottles {
	
	static function sing( i : Int = 99 ) : String {
		var num = i, b = new StringBuf();
		do {
			b.add( i );
			if( i == 1 ) {
				b.add( " bottle of beer on the wall, " );
				b.add( i );
				b.add( " bottle of beer.\nTake one down and pass it around, no more bottles" );
			} else {
				b.add( " bottles of beer on the wall, " );
				b.add( i );
				b.add( " bottles of beer.\nTake one down and pass it around, " );
				b.add( i-1 );
				b.add( " bottle" );
				b.add( (i==2)?"":"s" );
			}
			b.add( " of beer on the wall.\n\n" );
		} while( --i > 0 );
		b.add( "No more bottles of beer on the wall, no more bottles of beer.\n" );
		b.add( "Go to the store and buy some more, " );
		b.add( num );
		b.add( " bottles of beer on the wall." );
		return b.toString();
	}
	
	static function main() {
		#if neko
		neko.Lib.print( sing( 99 ) );
		#end
	}
}```