
## Language IJVM ##
---
- Author: Tom Rothamel
- Date: 04/20/05
- Info: http
- Score:  (3.02 in 110 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-ijvm-324.html
---

```// Bottles of beer on the wall in IJVM, as defined in 
// _Structured Computer Organization_, 4th edition. IJVM tools are
// found at http://www.ontko.com/mic1/ and 
// http://onegeek.org/~tom/software/ijvm/.
//
// By Tom Rothamel <tom-ijvm@onegeek.org>

.constant
objref 42
.end-constant

.main
.var
i
.end-var

	// Store 99 in i.
	BIPUSH 99
	ISTORE i

	// This loop is executed 99 times, and is terminated at the
	// bottom when i falls to 0.
mainloop:

	/// <i> bottles of beer
	LDC_W OBJREF
	ILOAD i
	INVOKEVIRTUAL printbottlesob
	POP

	/// on the wall,
	BIPUSH 0x20
	OUT
	BIPUSH 0x6F
	OUT
	BIPUSH 0x6E
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x74
	OUT
	BIPUSH 0x68
	OUT
	BIPUSH 0x65
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x77
	OUT
	BIPUSH 0x61
	OUT
	BIPUSH 0x6C
	OUT
	BIPUSH 0x6C
	OUT
	BIPUSH 0x2C
	OUT
	BIPUSH 0xA
	OUT

	/// <i> bottles of beer
	LDC_W OBJREF
	ILOAD i
	INVOKEVIRTUAL printbottlesob
	POP

	/// .
	BIPUSH 0x2E
	OUT
	BIPUSH 0xA
	OUT

	// i = i - 1;
	IINC i -1
	
	/// Take one down, pass it around,
	BIPUSH 0x54
	OUT
	BIPUSH 0x61
	OUT
	BIPUSH 0x6B
	OUT
	BIPUSH 0x65
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x6F
	OUT
	BIPUSH 0x6E
	OUT
	BIPUSH 0x65
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x64
	OUT
	BIPUSH 0x6F
	OUT
	BIPUSH 0x77
	OUT
	BIPUSH 0x6E
	OUT
	BIPUSH 0x2C
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x70
	OUT
	BIPUSH 0x61
	OUT
	BIPUSH 0x73
	OUT
	BIPUSH 0x73
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x69
	OUT
	BIPUSH 0x74
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x61
	OUT
	BIPUSH 0x72
	OUT
	BIPUSH 0x6F
	OUT
	BIPUSH 0x75
	OUT
	BIPUSH 0x6E
	OUT
	BIPUSH 0x64
	OUT
	BIPUSH 0x2C
	OUT
	BIPUSH 0xA
	OUT

	/// <i> bottles of beer
	LDC_W OBJREF
	ILOAD i
	INVOKEVIRTUAL printbottlesob
	POP

	/// on the wall.
	BIPUSH 0x20
	OUT
	BIPUSH 0x6F
	OUT
	BIPUSH 0x6E
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x74
	OUT
	BIPUSH 0x68
	OUT
	BIPUSH 0x65
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x77
	OUT
	BIPUSH 0x61
	OUT
	BIPUSH 0x6C
	OUT
	BIPUSH 0x6C
	OUT
	BIPUSH 0x2E
	OUT
	BIPUSH 0xA
	OUT
	BIPUSH 0xA
	OUT


	// If i reaches zero, we're done. 
	ILOAD i
	IFEQ done

	// Else, repeat.
	GOTO mainloop

done:
	HALT

.end-main


// This is responsible for printing the '<n> bottles of beer' strings 
// seen above. It also properly handles printing 'No' for the case
// where n == 0 and the removal of pluralization for n == 1.
.method printbottlesob(n)
.var
q
oldn
.end-var
	// oldn = n
	ILOAD n
	ISTORE oldn

	// See if n == 0.
	ILOAD n
	IFEQ zero


	// Otherwise, we have a real number and need to divide to convert
	// it to decimal.
	BIPUSH 0x0
	ISTORE q

	// We do that by looping up to 9 times. Sucks, but what the hey.
divide_loop:
	// Bail if n is less than 10.
	ILOAD n
	BIPUSH 0xA
	ISUB
	IFLT divide_done

	// Subtract ten from n, add one to the quotient.
	IINC n -10
	IINC q 1

	GOTO divide_loop


divide_done:
	// Now, we have the first digit of the decimal number in q and the
	// second is left in n.


	// if q is zero, skip printing the first digit.
	ILOAD q
	IFEQ q_is_zero

	// print the first digit.
	BIPUSH 0x30
	ILOAD q
	IADD
	OUT

q_is_zero:	
	// Print the second digit.
	ILOAD n
	BIPUSH 0x30
	IADD
	OUT

	GOTO number_done
	
zero:
	// If we made it here, n == 0. So, instead of printing out '0',
	// we print out 'No'.
	BIPUSH 0x4E
	OUT
	BIPUSH 0x6F
	OUT

number_done:
	// print out ' bottle' in any case.
	BIPUSH 0x20
	OUT
	BIPUSH 0x62
	OUT
	BIPUSH 0x6F
	OUT
	BIPUSH 0x74
	OUT
	BIPUSH 0x74
	OUT
	BIPUSH 0x6C
	OUT
	BIPUSH 0x65
	OUT

	// If oldn == 1, we skip printing out the plural 's', otherwise
	// we print it out.
	BIPUSH 0x1
	ILOAD oldn
	IF_ICMPEQ singular

	BIPUSH 0x73
	OUT
singular:

	// We then print out ' of beer' in any case.
	BIPUSH 0x20
	OUT
	BIPUSH 0x6F
	OUT
	BIPUSH 0x66
	OUT
	BIPUSH 0x20
	OUT
	BIPUSH 0x62
	OUT
	BIPUSH 0x65
	OUT
	BIPUSH 0x65
	OUT
	BIPUSH 0x72
	OUT

	// We return zero, since we have to return something.
	BIPUSH 0x0
	IRETURN
	/// }
.end-method```