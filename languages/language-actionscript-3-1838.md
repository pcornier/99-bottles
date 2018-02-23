
## Language Actionscript 3 ##
---
- Author: Jason Tye
- Date: 08/06/08
- Info: http
- Score:  (2.56 in 16 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-actionscript-3-1838.html
---

```package {
	import flash.display.MovieClip;
	
	public class Beer extends MovieClip {
		/* Set default song parameters: 'beer' in 'bottles' on a 'wall' */
		private var bottleCount:int = 5;
		private var liquid:String = 'beer';
		private var container:String = 'bottle';
		private var surface:String = 'wall';
		
		/* song is comprised of 4 verses, which we loop through for each bottle */
		private var verse:int = 0;
		
		private var itVsOne:String = 'one';
		private var plural:String = 's';
		private var outNumber:String = bottleCount.toString();
		
		/* song line for output */
		private var songLine:String;
		
		public function Beer() {
			/* Loop through 4 times the numeber of bottles, 4 verses for each bottle */
			var loopCount:int = bottleCount*4; 
			for (var i:int=0; i<loopCount; i++) {
				sing();
			}
		}
		
		/* set plural states*/
		private function checkPlural(count:int):void {
			if (count == 1) {
				plural = '';
				outNumber = 'one'
				itVsOne = 'it';
			} else {
				outNumber = count.toString();
			}
		}
		
		private function sing():String {
			switch (verse) {
				case 0 :
					songLine = outNumber+' '+container+plural+' of '+liquid+' on the '+surface;
					verse++;
					break;
				case 1 :
					songLine = outNumber+' '+container+plural+' of '+liquid;
					verse++;
					break;
				case 2 :
					songLine = 'take '+itVsOne+' down, pass it around';
					verse++;
					break;
				case 3 :
					bottleCount--;
					checkPlural(bottleCount);
					verse = 0;
					if (bottleCount == 0) {
						songLine = 'no more '+container+'s of '+liquid+' on the '+surface;
					} else {
						songLine = outNumber+' '+container+plural+' of '+liquid+' on the '+surface;
					}
					break;
				default :
			}
			return songLine;
		}
	}
}```