
## Language GNU CPP ##
---
- Author: Walter Zimmer
- Date: 04/20/05
- Info: n/a
- Score:  (2.67 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gnu-cpp-286.html
---

```/************************************************************************/
/*	bottle.cpp							*/
/*	1996 Walter Zimmer (walter.zimmer@rz.uni-ulm.de)		*/
/*									*/
/*	Save as "bottle.cpp" or change all the #includes !		*/
/*	#include is necessary since cpp expands each line into		*/
/*	no more than one new line					*/
/*									*/
/*	Invocation: cpp -P bottle.cpp					*/
/*									*/
/*	Remove comments to have less empty lines in the output		*/
/*	but we still have to many...					*/
/************************************************************************/

#if defined TEXT
/* This is the part which outputs one verse. 'Passed' parameters are */
	/* ONES:	inner digit */
	/* TENS:	outer digit */
	/* SECONDTEN:	outer digit decremented by one */

	/* if ONES == 0 then we have to use the decremented outer digit */
	#if ONES == 0
		/* omit output of 00 verse */
		#if SECONDTEN < 10
		/* Use SECONDTEN */
			print(TENS,ONES)
			print(TENS,ONES)
			  Take one down, pass it around
			print(SECONDTEN,SECONDONE)
		#endif /* SECONDTEN */
	#else /* ONES */
		/* Here everthing is normal, we use the normal TENS */
			print(TENS,ONES)
			print(TENS,ONES)
			  Take one down, pass it around
			print(TENS,SECONDONE)
	#endif /* ONES */
#elif defined LOOP
/*	This is the inner loop which iterates about the last digit */
	/* #undef LOOP, #define TEXT so we output text in the next #include */
	#undef LOOP
	#define TEXT

	/* #undef and #define the inner digits, invoke text output */
	#undef ONES
	#undef SECONDONE
	#define ONES 9
	#define SECONDONE 8
	#include "bottle.cpp"

	/* ...and so on for digits 8-0 */
	#undef ONES
	#undef SECONDONE
	#define ONES 8
	#define SECONDONE 7
	#include "bottle.cpp"
	#undef ONES
	#undef SECONDONE
	#define ONES 7
	#define SECONDONE 6
	#include "bottle.cpp"
	#undef ONES
	#undef SECONDONE
	#define ONES 6
	#define SECONDONE 5
	#include "bottle.cpp"
	#undef ONES
	#undef SECONDONE
	#define ONES 5
	#define SECONDONE 4
	#include "bottle.cpp"
	#undef ONES
	#undef SECONDONE
	#define ONES 4
	#define SECONDONE 3
	#include "bottle.cpp"
	#undef ONES
	#undef SECONDONE
	#define ONES 3
	#define SECONDONE 2
	#include "bottle.cpp"
	#undef ONES
	#undef SECONDONE
	#define ONES 2
	#define SECONDONE 1
	#include "bottle.cpp"
	#undef ONES
	#undef SECONDONE
	#define ONES 1
	#define SECONDONE 0
	#include "bottle.cpp"
	#undef ONES
	#undef SECONDONE
	#define ONES 0
	#define SECONDONE 9
	#include "bottle.cpp"

	/* Clean up */
	#undef TEXT

#else /* TEXT, LOOP */
/*	Here is the basic 'loop' which iterates about the outer digit */

	/* First define the print macro which outputs one line of xx beer */
	/* We have to define it over the second define 'raw' to combine */
	/* prescan with concatenation */
	#define raw(TENS,ONES) TENS ## ONES
	#define print(TENS,ONES) raw(TENS,ONES) bottles of beer on the wall

	/* Tell bottle.cpp to invoke the inner loop when #included */
	#define LOOP

	/* #define outer digit and process inner loop */
	#define TENS 9
	#define SECONDTEN 8
	#include "bottle.cpp"

	/* Do this for the other digits 8 to 0, now with #undef */
	/* Since LOOP gets #undef'd, we have to define it again */
	#define LOOP
	#undef TENS
	#define TENS 8
	#undef SECONDTEN
	#define SECONDTEN 7
	#include "bottle.cpp"
	#define LOOP
	#undef TENS
	#define TENS 7
	#undef SECONDTEN
	#define SECONDTEN 6
	#include "bottle.cpp"
	#define LOOP
	#undef TENS
	#define TENS 6
	#undef SECONDTEN
	#define SECONDTEN 5
	#include "bottle.cpp"
	#define LOOP
	#undef TENS
	#define TENS 5
	#undef SECONDTEN
	#define SECONDTEN 4
	#include "bottle.cpp"
	#define LOOP
	#undef TENS
	#define TENS 4
	#undef SECONDTEN
	#define SECONDTEN 3
	#include "bottle.cpp"
	#define LOOP
	#undef TENS
	#define TENS 3
	#undef SECONDTEN
	#define SECONDTEN 2
	#include "bottle.cpp"
	#define LOOP
	#undef TENS
	#define TENS 2
	#undef SECONDTEN
	#define SECONDTEN 1
	#include "bottle.cpp"
	#define LOOP
	#undef TENS
	#define TENS 1
	#undef SECONDTEN
	#define SECONDTEN 0
	#include "bottle.cpp"
	#define LOOP
	#undef TENS
	#define TENS 0
	#undef SECONDTEN

	/* We @define SECONDTEN as 10 to indicate that we are outputting */
	/* the last block and therefore need only 9 verses */
	#define SECONDTEN 10
	#include "bottle.cpp"
#endif```