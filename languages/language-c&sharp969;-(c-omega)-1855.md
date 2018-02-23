
## Language Cω (C-Omega) ##
---
- Author: Halo_Four
- Date: 08/25/08
- Info: http
- Score:  (3.00 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c&sharp969;-(c-omega)-1855.html
---

```using System;

class Program {
	static int* ReverseRange(int max, int min) {
		for(int i = max; i >= min; i--) {
			yield return i;
		}
	}
	
	public struct verse {
		public string part1;
		public string action;
		public string part2;
		public int index;
	}

    static void Main() {
		ReverseRange(99, 0).{
			if(it != 0) {
				string plural = it != 2 ? "s" : "";
				return <verse>
					<part1>{ return string.Format("{0} bottle{1} of beer", it, plural); }</part1>
					<action>Take one down and pass it around</action>
					<part2>{ return string.Format("{0} bottle{1} of beer", it - 1, plural); }</part2>
					<index>{ it }</index>
				</verse>;
			}
			else {
				return <verse>
					<part1>No more bottles of beer</part1>
					<action>Go to the store and buy some more</action>
					<part2>99 bottles of beer</part2>
					<index>{ it }</index>
				</verse>;
			}
		}.{
			Console.WriteLine("{0} on the wall, {0}", it.part1);
			Console.WriteLine("{0}, {1} on the wall", it.action, it.part2);
		};
		
        Console.ReadLine();
    }
}```