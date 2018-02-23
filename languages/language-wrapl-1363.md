
## Language Wrapl ##
---
- Author: Raja Mukherji
- Date: 12/30/06
- Info: http
- Score:  (3.00 in 99 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-wrapl-1363.html
---

```mod bottles;

imp std.io.terminal use Out;

def tens <- [
	"", "Twenty", "Thirty", "Forty", "Fifty",
	"Sixty", "Seventy", "Eighty", "Ninety"
];

def ones <- [
	"one", "two", "three", "four", "five",
	"six", "seven", "eight", "nine"
];

def small <- [
	"One", "Two", "Three", "Four", "Five",
	"Six", "Seven", "Eight", "Nine", "Ten",
	"Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
	"Sixteen", "Seventeen", "Eighteen", "Nineteen"
];

def words(N) (
--	If 0 < N < 20 then we use the simple number small[N].
--	If N > 20 then small[N] fails so we try a compound number.
--	ones[N % 10] will fail for N a multiple of 10 so we just use the tens string in this case.
--	If N = 0 then tens[N / 10] will fail so we get "No more".
	ret (small[N] | (tens[N / 10] + ((" " + ones[N % 10]) | "")) | "No more") +
--	If N = 1 then " bottle of beer" otherwise " bottles of beer".
	(N = 1 => " bottle of beer" // " bottles of beer")
);

var I <- 99;
var Words <- words(I);
rep (
	Out:write(Words + " on the wall,\n");
	Out:write(Words + ",\n");
	Out:write("You take one down and pass it around,\n");
	Words <- words(I <- $ - 1);
	Out:write(Words + " on the wall.\n");
	Out:write("\n");
	until I = 0;
);```