
## Language ReXplace ##
---
- Author: Simon B�nzli
- Date: 04/20/05
- Info: n/a
- Score:  (2.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-rexplace-492.html
---

```# ReXplace version of "99 Bottles of Beer"
# (C) 2003 by Simon B�nzli
#
# Converts any file's content into the song's lyrics.

Options: REX1.2, timeout: 750, test, nosummary

# Initialize the number of bottles
/^(?![1-9]\d*$).*/s
	99

Repeat:

# Copy the last number to the next line, followed by "9876543210!"
/\d+$/
	$0\n$0 9876543210!

# Subtract 1 from the number on the last line
/(\d) \d*\1([\d!])[\d!]*$/
	$2

# Check whether we've just passed a multiple of 10
/.*/s
-/!$/
->Proceed

# Prepare for an extended decrement by 1
/(\n\d*?)(0*)!$/
	$1 9876543210 $20

# Decrement by 1
/0+$/
>/0/g
	9
/(\d) \d*\1([\d])[\d]* (?=9*$)/
	$2

Proceed:

# Copy the number to the preceding line
/\n(\d+)$/
	\ $1\n$1

# Continue until we reach 0
/\d+$/
-/^0+$/
->Repeat

# Empty the last line
/.*$/
	

# Remove all leading zeros
/\b0+(\d)/g
	$1

# Insert the lyrics
/(\d+) (\d+)/g
	$1 bottles of beer on the wall, $1 bottles of beer, take one down, pass it around, $2 bottles of
beer on the wall.

# Remove the plural "s" when only one bottle is left
/(\b1\b.*?)s/g
	$1

# Adjust the ending
/\b0\b/g
	no more```