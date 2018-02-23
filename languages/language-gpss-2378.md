
## Language GPSS ##
---
- Author: Allen J. Kapusta
- Date: 05/04/10
- Info: http
- Score:  (4.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gpss-2378.html
---

```	SIMULATE 1
*
* GPSS program to print lyrics of '99 bottles of beer'
* Written by Allen J. Kapusta
* WebGPSS version (The versions of GPSS have different syntax although the use
* of the blocks is similar). WebGPSS is a commercial product but a demo
* version is available.
* Uses a 'final' transaction to end the simulation
* Limitations on the PRINT statements result in extra newlines and
* decimal digits.
*
	GENERATE ,,,99,2	; Beer bottles
* The 'bottle' transactions start at priority 2 to build the 'wall' queue,
* then drop to priority 1 to allow all bottles to enter the queue before 
* the 'bar' facility is occupied.
	ARRIVE	WALL
*                             Add bottle to 'wall' queue			
	PRIORITY 1
*                             Allow other bottles to enter queue
	SEIZE	BAR
*                             Bottle is being poured
	PRINT	' ',Q$WALL
*                             Number of bottles, including this one
	IF	Q$WALL=1,BLOCKA
*                             Singular or plural?
	PRINT	' bottles of beer on the wall, ',Q$WALL
	PRINT	' bottles of beer.'
	GOTO	BLOCKB
BLOCKA	PRINT	' bottle of beer on the wall, ',Q$WALL
	PRINT	' bottle of beer.'
BLOCKB	DEPART	WALL
*                             Remove from 'wall' queue
	PRINT	'Take one down and pass it around,'
	IF	Q$WALL<2,BLOCKC
*                             Plural or other?
	PRINT	' ',Q$WALL
*                             Number of bottles, excluding this one
	PRINT	' bottles of beer on the wall.'
	GOTO	BLOCKE
BLOCKC	IF	Q$WALL=0,BLOCKD
*                             One or zero?
	PRINT	' 1 bottle of beer on the wall.'
	GOTO BLOCKE
BLOCKD	PRINT	' no more bottles of beer on the wall.'
BLOCKE	PRINT	' '
	ADVANCE 10,5
*                             Wait for bottle to empty
	RELEASE BAR
*                             Allow next bottle to be poured
	TERMINATE
*                             Bottle transaction complete
*
	GENERATE ,,1,1,0
*                             Final transaction
	WAITIF	BAR=U
*                             Wait until no more bottles
	PRINT	'No more bottles of beer on the wall,'
	PRINT	' no more bottles of beer.'
	PRINT	'Go to the store and buy some more,'
	PRINT	' no more bottles of beer on the wall.'
	TERMINATE 1
*                             Simulation complete
*
	START	1
*                             Run simulation until 1 "final" transaction ends
END```