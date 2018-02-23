
## Language InstallScript ##
---
- Author: Andrew Rich
- Date: 04/20/05
- Info: n/a
- Score:  (2.84 in 19 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-installscript-332.html
---

```/************************************************************
99 Bottles of Beer in InstallScript    (c) 2003 Andrew Rich / Project Insomnia
Released under GPL for http://99-bottles-of-beer.ls-la.net/
Requires: InstallShield Professional 5 or greater
*************************************************************/

#include "ifx.h"

	NUMBER	nBottles;
	STRING	szTitle, szStatus, szTitleS, szStatusS;

program

	Disable ( BACKGROUND );
	Enable ( STATUSDLG );
	
	for nBottles = 99 downto 0
		switch ( nBottles )
			case	1:
				szTitleS = "";
				szStatusS = "s";				
			default:
				szTitleS = "s";
				switch ( nBottles )
					case	2:
						szStatusS = "";
					default:
						szStatusS = "s";
				endswitch;
		endswitch;
		Sprintf ( szTitle, "%d bottle%s of beer on the wall, %d bottle%s of beer",
			nBottles, szTitleS, nBottles, szTitleS );
		if ( nBottles ) then
			Sprintf ( szStatus, "Take one down, pass it around, %d bottle%s of beer on the wall.",
				nBottles - 1, szStatusS );
		else
			szStatus = "";
		endif;
		SetDialogTitle ( DLG_STATUS, szTitle );
		SetStatusWindow ( nBottles, szStatus );
		Delay ( 1 );
	endfor;
	
	Disable ( STATUSDLG );

endprogram```