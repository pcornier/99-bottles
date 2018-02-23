
## Language C/C++ Preprocessor ##
---
- Author: Wim Rijnders
- Date: 04/20/05
- Info: n/a
- Score:  (3.03 in 245 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c-c++-preprocessor-115.html
---

```This is the pre-processor for C or C++.  Normally, not a language 
in itself, but created to make using C/C++ easier.  This is a 
novel use of the pre-processor

-- BEER.CPP ---------------------------------------------------------
// 99 Bottles written entirely in Visual C++ preprocessor directives.
// By Wim Rijnders.
#pragma warning(disable : 4005 )

#define BOTTLES "bottles"
#define TAKE_ONE_DOWN "Take one down, pass it around,"
#define DEC_NUM 9
#define DEC_STR "9"
#define DEC2_NUM 9
#define DEC2_STR "9"

#define TEST_BOTTLES(a,b) (DEC2_NUM == a  && DEC_NUM == b )
#define STILL_HAVE__BOTTLES !TEST_BOTTLES(0,0)
#define NO_MORE__BOTTLES TEST_BOTTLES(0,0)
#define JUST_ONE__BOTTLE TEST_BOTTLES(0,1)

#define OF_BEER DEC2_STR DEC_STR " " BOTTLES " of beer"
#define BEER_ON_WALL OF_BEER " on the wall"

#include "sing.h"
-- SING.H -----------------------------------------------------------
//Following to beat the 32-file include limit of VC
#if STILL_HAVE__BOTTLES
	#include "stanza.h"               
	#include "stanza.h"               
	#include "stanza.h"               
	#include "stanza.h"               
	#include "sing.h"               
#endif 
-- STANZA.H ---------------------------------------------------------
#if STILL_HAVE__BOTTLES
	#pragma message(BEER_ON_WALL ",")
	#pragma message(OF_BEER ",")
	#pragma message(TAKE_ONE_DOWN)
	
	#include "dec.h"         
	#if NO_MORE__BOTTLES
		#define DEC2_STR ""
		#define DEC_STR "No more"
	#endif	
	
	#if JUST_ONE__BOTTLE
		#define BOTTLES "bottle"
	#else
		#define BOTTLES "bottles"	
	#endif
	
	#pragma message(BEER_ON_WALL ".")
	#pragma message("")
#endif 
-- DEC.H ------------------------------------------------------------
#if DEC_NUM == 9
	#define DEC_NUM 8
	#define DEC_STR "8"
#elif DEC_NUM == 8
	#define DEC_NUM 7
	#define DEC_STR "7"
#elif DEC_NUM == 7
	#define DEC_NUM 6
	#define DEC_STR "6"
#elif DEC_NUM == 6
	#define DEC_NUM 5
	#define DEC_STR "5"
#elif DEC_NUM == 5
	#define DEC_NUM 4
	#define DEC_STR "4"
#elif DEC_NUM == 4
	#define DEC_NUM 3
	#define DEC_STR "3"
#elif DEC_NUM == 3
	#define DEC_NUM 2
	#define DEC_STR "2"
#elif DEC_NUM == 2
	#define DEC_NUM 1
	#define DEC_STR "1"
#elif DEC_NUM == 1
	#define DEC_NUM 0
	#define DEC_STR "0"
#elif DEC_NUM == 0    
	#include "dec2.h"
	#define DEC_NUM 9
	#define DEC_STR "9"
#endif   
-- DEC2.H -----------------------------------------------------------
#if DEC2_NUM == 9
	#define DEC2_NUM 8
	#define DEC2_STR "8"
#elif DEC2_NUM == 8
	#define DEC2_NUM 7
	#define DEC2_STR "7"
#elif DEC2_NUM == 7
	#define DEC2_NUM 6
	#define DEC2_STR "6"
#elif DEC2_NUM == 6
	#define DEC2_NUM 5
	#define DEC2_STR "5"
#elif DEC2_NUM == 5
	#define DEC2_NUM 4
	#define DEC2_STR "4"
#elif DEC2_NUM == 4
	#define DEC2_NUM 3
	#define DEC2_STR "3"
#elif DEC2_NUM == 3
	#define DEC2_NUM 2
	#define DEC2_STR "2"
#elif DEC2_NUM == 2
	#define DEC2_NUM 1
	#define DEC2_STR "1"
#elif DEC2_NUM == 1
	#define DEC2_NUM 0
	#define DEC2_STR ""
#endif```