
## Language Lista ##
---
- Author: Jacques Menu
- Date: 10/23/06
- Info: http
- Score:  (3.01 in 96 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-lista-1313.html
---

```// =========================================================================
//	99BottlesOfBeer.lista
//	J. Menu - http://cui.unige.ch/DI/cours/CompInterpretes
//
//	$Id$
// =========================================================================

/*
99BottlesOfBeer.lista constains a Lista solution to the 99 bottles of beer 
problem, with both recursive and iterative versions.

Call by name and call by need can be used in this sample to show the power 
of these evaluation stragegies.

See  http://cui.unige.ch/DI/cours/CompInterpretes/99BottlesOfBeer.README for 
more details about the language and its implementation.
*/


// -------------------------------------------------------------------------
//	Ancillary functions
// -------------------------------------------------------------------------

/* '!!' is the string concatenation operator */

BottlesNumberAsString (n) =
	FormatNumber (n, 2, 0) !!
	If (
		GreaterThan (n, 1),
			" bottles",
			" bottle"
		);

StatusDescription (n) =
	BottlesNumberAsString (n) !! " of beer on the wall, " !!
	BottlesNumberAsString (n) !! " of beer.\n";
	
ActionDescription (n) =
	"Take one down and pass it around, " !!
	BottlesNumberAsString (n - 1) !! " of beer on the wall.\n";

MoreThanOneBottlesLeftString (remainingBottles) =
	StatusDescription (remainingBottles) !!
	ActionDescription (remainingBottles);

OneBottleLeftString =
	StatusDescription (1) !!
	"Take one down and pass it around, no more bottles of beer on the wall.\n";
		
NoBottlesLeftString (howManyToBuy) =
	"No more bottles of beer on the wall, no more bottles of beer.\n"
	"Go to the store and buy some more, " !!
	BottlesNumberAsString (howManyToBuy) !! " of beer on the wall.\n";
		
ActuallyRemainingBottlesAsString (remainingBottles) =
	If (
		GreaterThan (remainingBottles, 1),
			MoreThanOneBottlesLeftString (remainingBottles),
			OneBottleLeftString
		)
	!!
	"\n";


// -------------------------------------------------------------------------
//	Recursive version
// -------------------------------------------------------------------------

SingBottlesSongRecursively (
	initialNumberOfBottles,
	remainingBottles
	) =
	If (
		GreaterThan (remainingBottles, 0),

	//	then
		Seq (
			WriteString (
				ActuallyRemainingBottlesAsString (remainingBottles) ),

			SingBottlesSongRecursively (
				initialNumberOfBottles, remainingBottles - 1 )
			),	// Seq

	//	else
		WriteString (
			NoBottlesLeftString (initialNumberOfBottles) )
		)
	;	// SingBottlesSongRecursively


// -------------------------------------------------------------------------
//	Iterative version
// -------------------------------------------------------------------------

SingBottlesSongIteratively (initialNumberOfBottles) =
	For (
		i,

		0,
		initialNumberOfBottles - 1,

		WriteString (
			ActuallyRemainingBottlesAsString (initialNumberOfBottles - i) )
		),
		
	WriteString (
		NoBottlesLeftString (initialNumberOfBottles) )
	;	// SingBottlesSongIteratively


// -------------------------------------------------------------------------
//	Interface to illustrate the properties of call ny name/need thru its 
//	third argument "argThatMayCauseAProblem", whose evaluation will  
//	be attempted or not depending on the user answer
// -------------------------------------------------------------------------

SingBottlesSong (
	initialNumberOfBottles,
	singRecursively,
	argThatMayCauseAProblem
	) =
	If (
		ReadBoolean (
			"    Shall we try and write 'argThatMayCauseAProblem' (might never end)?",
			"yes"
			),
		
		Seq (
			WriteString (
				"... let's try and evaluate argThatMayCauseAProblem...\n" ),
			WriteString ("--> result:"),
			WriteNumber (argThatMayCauseAProblem),
			WriteEndOfLine ()
			),	// Seq

		Empty
		),
	WriteEndOfLine (),

	If (
		singRecursively,

		SingBottlesSongRecursively (
			initialNumberOfBottles, initialNumberOfBottles ),

		SingBottlesSongIteratively (
			initialNumberOfBottles )
		)
	;	// SingBottlesSong


// -------------------------------------------------------------------------
//	A function than cannot be evaluated, whatever its argument
// -------------------------------------------------------------------------

NeverEnding (n) =
	1 + NeverEnding (n + 1);


// -------------------------------------------------------------------------
//	main
// -------------------------------------------------------------------------

/*
NOTE:
	If CALL BY VALUE is used (-bv option, default), the following call to
	 SingBottlesSong will lead to 'NeverEnding (7)' being evaluated, 
	 which will never terminate.

	On the other hand, CALL BY NAME (-bn option) and CALL BY NEED (-bl option) 
	handle this fine, provided the user answers 'no' when asked whether 
	they request 'argThatMayCauseAProblem' to be evaluated.
*/

?	WriteEndOfLine (),
	WriteString ("==> Let's go for the Bottles song...\n\n"),

	SingBottlesSong (
		ReadNumber (
			"    Bottles number                                   "),
		ReadBoolean (
			"    Shall we proceed recursively?                    ", "yes"),
		NeverEnding (7)
		),
	
	WriteEndOfLine ();```