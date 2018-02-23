
## Language Ferite ##
---
- Author: Rowan Lewis
- Date: 09/25/06
- Info: http
- Score:  (3.00 in 4 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ferite-1282.html
---

```class BottlesOfBeerSong {
	private number bottles;
	private string output;
	private string format;
	
	constructor(number bottles) {
		self(bottles, "html");
	}
	
	constructor(number bottles, string format) {
		.bottles = bottles;
		.format = format;
	}
	
	function play() {
		while (.bottles > 0) {
			string bottles = "bottle";
			
			.start();
			
			if (.bottles > 1) {
				bottles += "s";
			}
			
			.line("${.bottles} ${bottles} of beer on the wall,");
			.line("${.bottles} ${bottles} of beer,");
			.line("Take one down, pass it around,");
			
			.bottles--;
			
			if (.bottles > 0) {
				.line("${.bottles} ${bottles} of beer on the wall.");
			} else {
				.line("No bottles of beer on the wall!");
			}
			
			.stop();
		}
		
		return .output;
	}
	
	private function start() {
		if (.format == "html") {
			.output += "\n<p>";
		}
	}
	
	private function line(string line) {
		if (.format == "html") {
			.output += "\n\t${line}<br />";
		} else {
			.output += "\n${line}";
		}
	}
	
	private function stop() {
		if (.format == "html") {
			.output = .output[..-7] + "\n</p>";
		}
	}
	
}

object song = new BottlesOfBeerSong(99);
Console.println("" + song.play());```