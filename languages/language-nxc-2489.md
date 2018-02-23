
## Language NXC ##
---
- Author: Fabian Wobito
- Date: 09/07/10
- Info: http
- Score:  (2.50 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nxc-2489.html
---

```/**************************************************************************
 * 99 bottles of beer on the wall in NXC                                  *
 * by Fabian Wobito <Wobito@gmx.de>, Saarland, Germany                    *
 * NXC stands for "Not eXactly C" and is a programming language           *
 * for the Lego Mindstorms NXT.                                           *
 * It was developed by John Hansen under the MPL.                         *
 *                                                                        *
 * The NXT brig has a 100*64 pixel display which is large enough          *
 * for about one stanza. The program prints as many letters in each line  *
 * as possible whithout regard to blanks or line breaks, which - in my    *
 * eyes - still forms the most coherent image. Hence I implemented two    *
 * loops and some special cases.                                          *
 * After printing one stanza, the program waits the time specified        *
 * in the constant TIME before printing the next one.                     *
 **************************************************************************/

#define TIME 1000 // ms

task main()
{
	int n;

	for( n = 99; n > 10; n -= 1 )
	{
		ResetScreen();
		
		NumOut(  0, 56,  n);
		TextOut(12, 56,   " bottles of be");
		
		TextOut( 0, 48, "er on the wall, ");
		
		NumOut(  0, 40,  n                );
		TextOut(12, 40,   " bottles of be");
		
		TextOut( 0, 32, "er. Take one dow");
		TextOut( 0, 24, "n and pass it ar");
		
		TextOut( 0, 16, "ound, "          );
		NumOut (36, 16,        n-1        );
		TextOut(48, 16,         " bottles");
		
		TextOut( 0,  8, " of beer on the ");
		TextOut( 0,  0, "wall."           );
		
		Wait(TIME);
	}
	
	ResetScreen();
	TextOut( 0, 56, "10 bottles of be");
	TextOut( 0, 48, "er on the wall, ");
	TextOut( 0, 40, "10 bottles of be");
	TextOut( 0, 32, "er. Take one dow");
	TextOut( 0, 24, "n and pass it ar");
	TextOut( 0, 16, "ound, 9 bottles ");
	TextOut( 0,  8, "of beer on the w");
	TextOut( 0,  0, "all.");
	Wait(TIME);
	
	for( n = 9; n > 2; n -= 1 )
	{
		ResetScreen();
		
		NumOut(  0, 56,  n                );
		TextOut(6, 56,   " bottles of bee");
		
		TextOut( 0, 48, "r on the wall, " );
		NumOut( 90, 48,                 n );
		
		TextOut( 0, 40, " bottles of beer");
		TextOut( 0, 32, ". Take one down ");
		TextOut( 0, 24, "and pass it arou");
		
		TextOut( 0, 16, "nd, "            );
		NumOut (24, 16,      n-1          );
		TextOut(30, 16,      " bottles of");
		
		TextOut( 0,  8, " beer on the wal");
		TextOut( 0,  0, "l.");
		
		Wait(TIME);
	}
	
	ResetScreen();
	TextOut( 0, 56, "2 bottles of bee");
	TextOut( 0, 48, "r on the wall, 2");
	TextOut( 0, 40, " bottles of beer");
	TextOut( 0, 32, ". Take one down ");
	TextOut( 0, 24, "and pass it arou");
	TextOut( 0, 16, "nd, 1 bottle of ");
	TextOut( 0,  8, "beer on the wall");
	TextOut( 0,  0, "."              );
	Wait(TIME);
	
	ResetScreen();
	TextOut( 0, 56, "1 bottle of beer");
	TextOut( 0, 48, " on the wall, 1 ");
	TextOut( 0, 40, "bottle of beer. ");
	TextOut( 0, 32, "Take one down an");
	TextOut( 0, 24, "d pass it around");
	TextOut( 0, 16, "no more bottles ");
	TextOut( 0,  8, "of beer on the w");
	TextOut( 0,  0, "all."            );
	Wait(TIME);
	
	ResetScreen();
	TextOut( 0, 56, "No more bottles ");
	TextOut( 0, 48, "of beer on the w");
	TextOut( 0, 40, "all, no more bot");
	TextOut( 0, 32, "tles of beer. Go");
	TextOut( 0, 24, " to the store an");
	TextOut( 0, 16, "d buy some more,");
	TextOut( 0,  8, " 99 bottles of b");
	TextOut( 0,  0, "eer on the wall.");
	Wait(TIME);
}```