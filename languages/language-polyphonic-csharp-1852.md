
## Language Polyphonic C# ##
---
- Author: Halo_Four
- Date: 08/21/08
- Info: http
- Score:  (3.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-polyphonic-csharp-1852.html
---

```using System;

class Program {
	static async Bottle(int id);
	static async NoMore();
	
	static bool Stanza() & Bottle(int id) {
		Console.WriteLine("{0} bottle{1} of beer on the wall, {0} bottle{1} of beer", id, id != 1 ? "s" :
"");
		Console.Write("Take one down and pass it around, ");
		if(id == 1) {
			Console.WriteLine("no more bottles of beer on the wall");
			NoMore();
		}
		else {
			id--;
			Console.WriteLine("{0} bottle{1} of beer on the wall", id, id != 1 ? "s" : "");
			Bottle(id);
		}
		return true;
	}
	& NoMore() {
		Console.WriteLine("No more bottles of beer on the wall, no more bottles of beer");
		Console.WriteLine("Go to the store and buy some more, 99 bottles of beer on the wall");
		return false;
	}
	
	static async Sing() {
		while(Stanza());
	}

	static void Main() {
		Bottle(99);
		Sing();
		Console.ReadLine();
	}
}```