
## Language Postscript ##
---
- Author: Mark Conger
- Date: 04/02/12
- Info: n/a
- Score:  (3.25 in 4 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-postscript-2861.html
---

```%!ps

%----------------
%- Parameters
%----------------

/inch { 72 mul } def
/PageW 11 inch def
/PageH 8.5 inch def
/Margin 1 inch def
/TypeFace /Times-Roman def
/TypeSize 24 def
/BeerColor   { .51 .11 .09 setrgbcolor } def
/BottleColor { .00 .00 .00 setrgbcolor } def

% Text
/OnTheWall ( on the wall) def
/TakeOneDown (Take one down, pass it around,) def
/NoBottles (No bottles of beer) def

% Bottle proportions
/TopWProp .35 def
/TopHProp .25 def
/BotHProp .5 def
/BotWGapProp .15 def
/BotDescProp .15 def

% Bezier description of the curve of the bottle
/CurvePoints [
	[ 0 0 ]
	[ 0 2 ] [ 1 5 ]
	[ 2 6 ]
	[ 3 7 ] [ 4 10 ]
	[ 4 12 ]
] def

%----------------
%- Routines
%----------------

% stack in: startpos dir
/GetCurvePoints {
	10 dict begin
	/dir exch def
	/pos exch def
	CurvePoints pos get aload pop
	/y0 exch def
	/x0 exch def
	3 {
		/pos pos dir add def
		CurvePoints pos get aload pop
		exch x0 sub CurveWScale mul dir mul
		exch y0 sub CurveHScale mul
	} repeat
	end
} def

/BottlePath {
	currentpoint
	0 BotH rlineto
	LeftCurvePoints aload pop rcurveto rcurveto
	0 TopH rlineto
	TopW 0 rlineto
	0 TopH neg rlineto
	RightCurvePoints aload pop rcurveto rcurveto
	0 BotH neg rlineto
	closepath
	moveto
	DeltaW 0 rmoveto
} def

/Bottles {
	dup 0 eq {
		NoBottles show
	} {
		gsave
		0 BottleDescent neg rmoveto
		{ BottlePath } repeat
		gsave
		BeerColor fill
		grestore
		currentpoint
		BottleColor stroke
		grestore
		BottleDescent add
		moveto
	} ifelse
} def

/MoveDown {
	/Y exch Y exch sub def
	0 Y moveto
} def

/Newline { TypeSize MoveDown } def

/Verse {
	Newline N Bottles OnTheWall show (,) show
	Newline N Bottles (.) show
	Newline TakeOneDown show
	Newline N 1 sub Bottles OnTheWall show (.) show
} def

/GapBetweenVerses {
	BottleDescent MoveDown
	HalfGapH MoveDown
	gsave
	1 0 0 setrgbcolor
	1 setlinewidth
	PrintW 0 rlineto
	stroke
	grestore
	HalfGapH MoveDown
	BottleDescent neg MoveDown
} def

/StartPage {
	0 PageW translate
	-90 rotate
	Margin Margin translate
	/Y PrintH def
} def

%----------------
%- Computed
%----------------

/PrintW PageW Margin dup add sub def
/PrintH PageH Margin dup add sub def

/MinVGap TypeSize def
/VerseH 4 TypeSize mul def
/VersesPerPage PrintH MinVGap add VerseH MinVGap add div floor cvi def
/GapsPerPage VersesPerPage 1 sub def
/GapH PrintH VersesPerPage VerseH mul sub GapsPerPage div def
/HalfGapH GapH 2 div def
/NumPages 99 VersesPerPage idiv 1 add def

TypeFace findfont TypeSize scalefont setfont
/WallW OnTheWall stringwidth pop (,) stringwidth pop add def
/TotalBottleW PrintW WallW sub def

% Bottle dimensions
/BottleH TypeSize .9 mul def
/BottleDescent TypeSize BotDescProp mul def
/BottleW TotalBottleW 99 98 BotWGapProp mul add div def
/BotGapW BottleW BotWGapProp mul def
/DeltaW BottleW BotGapW add def

/TopW BottleW TopWProp mul def
/TopH BottleH TopHProp mul def
/BotH BottleH BotHProp mul def

/CurveW BottleW TopW sub 2 div def
/CurveH BottleH TopH sub BotH sub def
CurvePoints 0 get aload pop
CurvePoints dup length 1 sub get aload pop
/CurveT exch def
/CurveR exch def
/CurveB exch def
/CurveL exch def

/CurveWScale CurveW CurveR CurveL sub div def
/CurveHScale CurveH CurveT CurveB sub div def

/LeftCurvePoints  [ CurvePoints length 4 sub -3 0 { 1 GetCurvePoints } for ] def
/RightCurvePoints [ 3 3 CurvePoints length 1 sub { -1 GetCurvePoints } for ] def

%----------------
%- Main
%----------------

.5 setlinewidth
1 setlinejoin
StartPage

99 -1 1 {
	/N exch def
	Verse
	100 N sub VersesPerPage mod 0 eq {
		showpage
		StartPage
	} {
		GapBetweenVerses
	} ifelse
} for
99 VersesPerPage mod 0 ne { showpage } if```