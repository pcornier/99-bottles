
## Language PDL ##
---
- Author: Peter Cossins
- Date: 05/10/12
- Info: Open University (probably no longer in use)
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-pdl-2882.html
---

```Programming Description Language (PDL) is NOT a compilable script.
It was a step-like plain-English script taught by the Open University
in its 'Fundamentals of Computing' (M205) course some 22 years ago.

The level of detail can be as low or high as appropriate for the
student's understanding.  For example, the simplest might be:

1         declare and initialise variables
2         loop 100 times and output message based on loop count


The above can be elaborated, note the numbering and indentation:

1.1          declare bottle number variable (bnv)
1.2          declare loop count variable    (lcv)
1.3          initialise lcv to zero
2.1          start FOR control loop for 100 iterations
2.2             set bnv to 99 - lcv          
2.2.1           start CASE statement structure
2.2.2.1            CASE bnv more than 2
2.2.2.1.1             output "[bnv] bottles of beer on the wall, "
2.2.2.1.2             output "[bnv] bottles of beer."
2.2.2.1.3             output Carriage Return
2.2.2.1.4             output "Take one down and pass it around, "
2.2.2.1.5             output "[bnv-1] bottles of beer on the wall."
2.2.2.1.6             output Carriage Return
2.2.2.1.7             output Carriage Return
2.2.2.2            CASE bnv equals 2
2.2.2.2.1             output "2 bottles of beer on the wall, "
2.2.2.2.2             output "2 bottles of beer."
2.2.2.2.3             output Carriage Return
2.2.2.2.4             output "Take one down and pass it around, "
2.2.2.2.5             output "1 bottle of beer on the wall."
2.2.2.2.6             output Carriage Return
2.2.2.2.7             output Carriage Return
2.2.2.3.           CASE bnv equals 1
2.2.2.3.1             output "1 bottle of beer on the wall, "
2.2.2.3.2             output "1 bottle of beer."
2.2.2.3.3             output Carriage Return
2.2.2.3.4             output "Take one down and pass it around, "
2.2.2.3.5             output "no more bottles of beer on the wall."
2.2.2.3.6             output Carriage Return
2.2.2.3.7             output Carriage Return
2.2.2.4            CASE bnv = 0   (or OTHERWISE)
2.2.2.4.1             output "No more bottles of beer on the wall, "
2.2.2.4.2             output "no more bottles of beer."
2.2.2.4.3             output Carriage Return
2.2.2.4.4             output "Go to the store and buy some more, "
2.2.2.4.5             output "99 bottles of beer on the wall."
2.2.3        end CASE statement structure
2.3          set lcv to lcv + 1
2.4       end FOR control loop


The further the refinement, the nearer it looks like a "real"
programming language and the above could be transliterated into
high-level code without too much amendment.  The idea of the above 
is to equip those without specific coding skills to develop logic
without knowing yet what the specific syntax has to be.  The
niceties of HOW to output the data is not something the student
has to grapple with straight away, nor the fact that "commenting-
out" of notes such as these would be necessary too!

Note the introduction to the concepts of variables and keywords,
such as FOR and CASE.  It is not a huge leap from the above to
introduce the WHILE loop as an alternative on lines 2.1-2.4 .

A transliteration of the above, using a WHILE loop, will be
submitted in Paradox Application Language (PAL) shortly.  It is
loosely based on Pascal and is the coding language of Borland's
Paradox� Relational Database.  This PAL should not be confused 
with the Prodigy Application Language example already listed.```