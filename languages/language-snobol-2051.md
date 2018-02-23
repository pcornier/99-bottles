
## Language SNOBOL ##
---
- Author: Steve Byers
- Date: 04/16/09
- Info: n/a
- Score:  (2.92 in 12 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-snobol-2051.html
---

```*	Here is a little bit better implementation that produces the correct output.  
*	It has been tested with Catspaw's SNOBOL4 interpreter.
*	
*	Author:  Steve Byers
*	Company: EDS an HP Company
*
	B = 99
LOOP	SENTENCE1 = "?? BOTTLES OF BEER ON THE WALL, ?? BOTTLES OF BEER"
	SENTENCE2 = "TAKE ON AND DOWN PASS IT AROUND, ?? BOTTLES OF BEER ON THE WALL."
	
S1	SENTENCE1 "??" = B				:S(S1)
S2	SENTENCE1 "BOTTLES" = EQ(B,1) "BOTTLE"		:S(S2)
	
	OUTPUT = SENTENCE1
	
	B = B - 1
	
	EQ(B,0)						:S(FINISH)

	SENTENCE2 "??" = B
	SENTENCE2 "BOTTLES" = EQ(B,1) "BOTTLE"
	
	
	OUTPUT = SENTENCE2
	OUTPUT = " "
	
	GT(B,0)						:S(LOOP)
FINISH  OUTPUT = "TAKE ONE DOWN AND PASS IT AROUND, NO MORE BOTTLES OF BEER ON THE WALL."
	OUTPUT = " "
	OUTPUT = "NO MORE BOTTLES OF BEER ON THE WALL, NO MORE BOTTLES OF BEER"
	OUTPUT = "GO TO THE STORE AND BUY SOME MORE, 99 BOTTLES OF BEER ON THE WALL."
END```