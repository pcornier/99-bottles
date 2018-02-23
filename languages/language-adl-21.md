
## Language ADL ##
---
- Author: Ross Cunniff
- Date: 04/20/05
- Info: n/a
- Score:  (2.92 in 159 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-adl-21.html
---

```ADL is Adventure Definition Language
{ This version of beer.adl is the normal procedural one which has }
{ no user interaction, and only prints out the song.  Quite boring, }
{ really. Ross Cunniff, 1997 cunniff@fc.hp.com }
START =
    LOCAL i, s;
    ($setg i 99)
    (WHILE ($gt @i 0) DO
	(IF ($gt @i 1) THEN
	    ($say ($str @i) " bottles of beer on the wall.\n")
	    ($say ($str @i) " bottles of beer.\n")
	 ELSE
	    ($say "1 bottle of beer on the wall.\n")
	    ($say "1 bottle of beer.\n")
	)
	($say "You take one down, pass it around.\n")
	($setg i ($minus @i 1))
	(IF ($gt @i 1) THEN
	    ($say ($str @i) " bottles of beer on the wall.\n\n")
	 ELSEIF ($eq @i 1) THEN
	    ($say "1 bottle of beer on the wall.\n\n")
	 ELSE
	    ($say "No more bottles of beer on the wall.\n")
	)
    )
    ($spec 3)
;```