
## Language GUI4CLI ##
---
- Author: Martin "Steyner" T�nnishoff
- Date: 05/22/08
- Info: http
- Score:  (3.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gui4cli-1787.html
---

```G4C BEERSONG

/* ===============================================================
	Description: Sing that beer beer song in GUI4CLI
	Language Home: www.gui4cli.com
	Author: Steyner 
	Email: toennishoff@liqui.net
	
=============================================================== */

WINDOW 893 16 300 200 "99 Bottles of Beer"
	WINATTR STYLE GRAY

XONLOAD
	GUIOPEN #this
	
	FOR x 1 99 			 //Cycle through the stanzas	
		y = $(100 - $x)
		IF $y = 2 
			s  = "s"
			ss = ""
		ELSEIF $y = 1
		   s  = ""
		   ss = "s"
		ELSE
		   s  = "s"
		   ss = "s"
		ENDIF
		
		USE EDBOX #this Output
		EDBOX ADD "$y bottle$s of beer on the wall,\r\n"
		EDBOX ADD "$y bottle$s of beer.\r\n"
		EDBOX ADD "Take one down and pass it around,\r\n"
		EDBOX ADD "$($y -1) bottle$ss of beer on the wall.\r\n\r\n"
		
   ENDFOR


XONCLOSE
	GUIQUIT #this

//	===============================================================
//	Visual Events
//	===============================================================

XEDBOX 10 10 280 180 $bl
	ATTR STYLE READONLY
	ATTR ID Output```