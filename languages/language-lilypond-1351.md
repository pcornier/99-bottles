
## Language Lilypond ##
---
- Author: Nate Eldredge
- Date: 12/15/06
- Info: http
- Score:  (3.02 in 157 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-lilypond-1351.html
---

```% Lilypond is a music engraving system with an
% embedded Scheme interpreter.
% http://lilypond.org
% Output of this program is at 
% http://www.math.ucsd.edu/~neldredg/personal/99-lilypond.pdf

\include "english.ly"

% Necessary because we use deep recursion
#(debug-set! stack 0)

\header{
  title =        "Ninety-Nine Bottles of Beer"
  composer =	 "Traditional"
  arranger =     \markup{ "Nate Eldredge" }
}

\version "2.8.7"

totalbottles = #99

startmelody = {
  \time 6/8
  \clef treble
  \key c \major
  \autoBeamOff
}

endmelody = {
  \bar "|."
}

% text = \lyricmode {
%   Nine -- ty nine bot -- tles of beer on the wall
%   Nine -- ty nine bot -- tles of beer __
%   Take one down and pass it a -- round
%   Nine -- ty eight bot -- tles of beer on the wall
% }

zerosyl = { }
onesyl = \relative c''{ c4. }
twosyl = \relative c''{ c4 c8 }
threesyl = \relative c''{ c8 c8 c8 }
foursyl = \relative c''{ c16 c16 c8 c8 }
fivesyl = \relative c''{ c16 c16 c8 c16 c16 }

#(define (count-syllables L)
  (if (null? (ly:music-property L 'text))
   (apply + (map count-syllables (ly:music-property L 'elements)))
   1))

% FIXME - check the syllabication
zero = \lyricmode { } % because "seventy" will become { \seventy \zero }
one = \lyricmode { one }
two = \lyricmode { two }
three = \lyricmode { three }
four = \lyricmode { four }
five = \lyricmode { five }
six = \lyricmode { six }
seven = \lyricmode { se -- ven }
eight = \lyricmode { eight }
nine = \lyricmode { nine }
ten = \lyricmode { ten }
eleven = \lyricmode { e -- le -- ven }
twelve = \lyricmode { twelve }
thirteen = \lyricmode { thir -- teen }
fourteen = \lyricmode { four -- teen }
fifteen = \lyricmode { fif -- teen }
sixteen = \lyricmode { six -- teen }
seventeen = \lyricmode { se -- ven -- teen }
eighteen = \lyricmode { eigh -- teen }
nineteen = \lyricmode { nine -- teen }
twenty = \lyricmode { twen -- ty }
thirty = \lyricmode { thir -- ty }
forty = \lyricmode { for -- ty }
fifty = \lyricmode { fif -- ty }
sixty = \lyricmode { six -- ty }
seventy = \lyricmode { se -- ven -- ty }
eighty = \lyricmode { eigh -- ty }
ninety = \lyricmode { nine -- ty }
nomore = \lyricmode { no more }
error = \lyricmode { oh shit }

#(define (speak-small n)
  (cond 
   ((= n 0) zero)
   ((= n 1) one)
   ((= n 2) two)
   ((= n 3) three)
   ((= n 4) four)
   ((= n 5) five)
   ((= n 6) six)
   ((= n 7) seven)
   ((= n 8) eight)
   ((= n 9) nine)
   ((= n 10) ten)
   ((= n 11) eleven)
   ((= n 12) twelve)
   ((= n 13) thirteen)
   ((= n 14) fourteen)
   ((= n 15) fifteen)
   ((= n 16) sixteen)
   ((= n 17) seventeen)
   ((= n 18) eighteen)
   ((= n 19) nineteen)
   (else error)))

#(define (speak-tens n)
  (cond
   ((= n 1) ten)
   ((= n 2) twenty)
   ((= n 3) thirty)
   ((= n 4) forty)
   ((= n 5) fifty)
   ((= n 6) sixty)
   ((= n 7) seventy)
   ((= n 8) eighty)
   ((= n 9) ninety)
   (else error)))

#(define (speak-number n)
  (cond
   ((= n 0) nomore)
   ((< n 20) (speak-small n))
   (else (make-sequential-music 
	  (list
	   (speak-tens (quotient n 10))
	   (speak-small (modulo n 10)))))))

#(define (sing-syllables k)
  (cond
   ((= k 0) zerosyl)
   ((= k 1) onesyl)
   ((= k 2) twosyl)
   ((= k 3) threesyl)
   ((= k 4) foursyl)
   ((= k 5) fivesyl)))

#(define (sing-number n) (sing-syllables (count-syllables (speak-number n))))

SingNumber = #(define-music-function (parser location n)
	       (integer?)
	       (ly:music-deep-copy (sing-number n)))
SpeakNumber = #(define-music-function (parser location n)
	       (integer?)
		(ly:music-deep-copy (speak-number n)) )

#(define (capitalize! s) (string-set! s 0 (char-upcase (string-ref s 0))))
#(define (capitalize s)
  (let ((l (string->list s)))
   (list->string (cons (char-upcase (car l)) (cdr l)))))

% takes a list of music objects
#(define (capitalize-lyric-list L)
  (cond 
   ((null? L))
   ((not (null? (ly:music-property (car L) 'text))) 
    (ly:music-set-property! (car L) 'text 
     (capitalize (ly:music-property (car L) 'text))))
   (else (capitalize-lyric-list
	  (append 
	   (ly:music-property (car L) 'elements)
	   (cdr L))))))
       
CapitalizeLyric = 
       #(define-music-function (parser location lyr)
	 (ly:music?)
	 (let ((newlyr (ly:music-deep-copy lyr)))
	  (capitalize-lyric-list (list newlyr))
	  newlyr))
       
melodyone =   \relative c''{ g8 g g | c c c c4 r8 | }
melodytwo = \relative c''{ a8 a a | d4.~ d8 r8 r8 | b4 b8 b4 b8 | b8 b b b4 r8 | }
melodytwofinal = \relative c''{ a8 a a | d4.~ d8 r4 | b8 b8 b8 b4 b8 | b4 b8 b4 r8 | }
melodythree = \relative c''{ a8 a b | c c c c4 r8 |}

lyricsone = \lyricmode{ of beer on the wall, }
lyricstwo = \lyricmode{ of beer.  Take one down and pass it a -- round, }
lyricstwofinal = \lyricmode{ of beer.  Go to the store and buy some more, }
lyricsthree = \lyricmode { of beer on the wall. }

bottle = \lyricmode{ bot -- tle }
bottles = \lyricmode{ bot -- tles }

PluralBottle = #(define-music-function (parser location n)
	       (integer?)
		 (if (= n 1) bottle bottles))


SingVerse = #(define-music-function (parser location n)
	      (integer?)
	      (let 
	       ((nn (if (> n 0) (- n 1) totalbottles))
		(meltwo (if (> n 0) melodytwo melodytwofinal)))
	       #{
	      { { \SingNumber #$n }}
	      \melodyone
	       { \transpose c d { \SingNumber #$n }}
	      $meltwo
	       {  \transpose c' g { \SingNumber #$nn }}
	      \melodythree
	      #}))

SpeakVerse = #(define-music-function (parser location n)
	      (integer?)
	      (let 
	       ((nn (if (> n 0) (- n 1) totalbottles))
		(lyrtwo (if (> n 0) lyricstwo lyricstwofinal)))
	      #{
	       \CapitalizeLyric \SpeakNumber #$n
	       \PluralBottle #$n
	       \lyricsone
	       \SpeakNumber #$n
	       \PluralBottle #$n
	       $lyrtwo
	       \SpeakNumber #$nn
	       \PluralBottle #$nn
	       \lyricsthree
	       #}))

SingVerses = #(define-music-function (parser location nstart nend)
	      (integer? integer?)
	       (if (>= nstart nend)
		(let ((nextverse (- nstart 1)))
		 #{ \SingVerse #$nstart \SingVerses #$nextverse #$nend #})
		#{ #} ))

SpeakVerses = #(define-music-function (parser location nstart nend)
	      (integer? integer?)
	       (if (>= nstart nend)
		(let ((nextverse (- nstart 1)))
		 #{ \SpeakVerse #$nstart \SpeakVerses #$nextverse #$nend #})
		#{ #} ))


\score{
  {
    <<
      \new Voice = "one" {
	\transpose c' g  {
	  \startmelody
	  \SingVerses #totalbottles #0
	  \endmelody 
	}
      }
      \new Lyrics \lyricsto "one" { 
	\SpeakVerses #totalbottles #0
	  }
    >>
  }
  \layout { }
  \midi { }
}```