
## Language Ferite ##
---
- Author: Rowan Lewis
- Date: 09/25/06
- Info: http
- Score:  (2.88 in 8 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ferite-1281.html
---

```uses "console";

number bottles = 99;
boolean looping = true;
object counter = closure {
	if (--bottles > 0) {
		return true;
	} else {
		return false;
	}
};

while (looping) {
	Console.println("${bottles} bottles of beer on the wall,");
	Console.println("${bottles} bottles of beer,");
	Console.println("Take one down, pass it around,");
	
	looping = counter.invoke();
	
	Console.println("${bottles} bottles of beer on the wall.");
}```