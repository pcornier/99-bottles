
## Language Smalltalk ##
---
- Author: Paul H. Hargrove
- Date: 06/11/07
- Info: http
- Score:  (3.00 in 28 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-smalltalk-1513.html
---

```" OO version for Smalltalk "
" Paul H. Hargrove 2007.06.10 "
" "
" Some people claim Smalltalk allows one to take OO to ridiculous extremes. "
" This program attempts to demonstrate that (with suitable self-ridicule). "
" Excluding the comments, no method is longer than three 80-char lines. "
" For aggressive code reuse, no string literal appears more than once. "
" 99 bottles is the default, but other lengths can be specified at "
" object instantiation. "
" "
" Written for and tested w/ GNU Smalltalk 2.3.5 "

!Number methodsFor: 'drinking songs'!
asBottles
    "String factory: turns bottle count into English"
    ^((self = 0) ifTrue: ['no more'] ifFalse: [self printString]),
     ' bottle', ((self = 1) ifTrue: [' '] ifFalse: ['s ']), 'of beer'.
! !
!String methodsFor: 'drinking songs'!
initialUpper |s|
    "String factory: generates a copy with an initial capital"
    ^(s := (String withAll: self)) at: 1 put: (s first asUppercase); yourself.
! !


"Objects of class BeerSong are songs.  Send asString to return the lyrics."
Object subclass: #BeerSong
    instanceVariableNames: 'lyrics sizeOfWall bottleCount bottleString'
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Drinking-Songs'
! !
!BeerSong class methodsFor: 'instantiation'!
new
    "new: with default song length of 99 bottles"
    ^self new: 99.
!
new: wallSizeInUnitsOfBottles
    ^super new initialize: wallSizeInUnitsOfBottles
! !
!BeerSong methodsFor: 'initialization'!
initialize: aNumber
    "We generate the lyrics lazily when you show: them"
    "So initially we just set the maximum and current counts"
    lyrics := WriteStream on: String new.
    sizeOfWall := aNumber.
    bottleCount := 0.
!
!BeerSong methodsFor: 'manipulating bottles'!
adjust: aNumber
    "Changes the bottleCount and updates bottleString to match"
    bottleString := (bottleCount := bottleCount + aNumber) asBottles.
!
buyBeer
    "Buy as much beer as will fit on my wall"
    "ToDo: could we buy 'splits' when sizeOfWall is non-integer?"
    "ToDo: if sizeOfWall < 0 do we sell beer?"
    self adjust: sizeOfWall truncated.
!
drinkOne
    "What inevitably happens when passing beer bottles among friends"
    self adjust: -1.
!
report
    "Who keeps beer on a wall?  Is the fridge full of snacks?"
    ^bottleString, ' on the wall'.
!
!BeerSong methodsFor: 'private utilities'!
planParty
    "Let's party, we'll need tunes and some brews"
    self purchase.
!
breathe
    "Breathe after each verse, to avoid passing out"
    lyrics nextPutAll: '.'; nl; nl.
!

!BeerSong methodsFor: 'singing verses'!
checkWall
    "I'm still sober enough to capitalize"
    lyrics nextPutAll: self report initialUpper;
           nextPutAll: ', ', bottleString, '.'; nl.
    ^bottleCount >= 1.
!
takeDown
    "Hey buddy, could you pass me a cold one?"
    lyrics nextPutAll: 'Take one down and pass it around, ';
           nextPutAll: self drinkOne report.
    self breathe.
!
passOut
    "Anybody sober enough to make it to the store and back?"
    lyrics nextPutAll: 'Go to the store and buy some more... ';
           nextPutAll: self report.
    self breathe.
!
drinkBeer
    "The party's not over 'till the beer runs out"
    [self checkWall] whileTrue: [self takeDown].
!
throwParty
    "The next one of these has got to be BYOB"
    self buyBeer drinkBeer buyBeer passOut.
!
asString
    "We generate the lyrics only once and cache them"
    lyrics isEmpty ifTrue: [ self throwParty ].
    ^lyrics contents.
! !

"For a shorter song:  Transcript show: (BeerSong new: 2)!"

Transcript show: BeerSong new!```