
## Language GWScript ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.91 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-gwscript-297.html
---

```// GWScript (GWS) is a C-like scripting language used in (load) testing,
// quality assurance and service level management.
// This piece of code uses Windows Notepad as an "output device".

// Author: Timo Boll, Geyer und Weinig GmbH
// Homepage: http://www.gwtel.de

main () {
  int l_bottle_cnt;
  
  if (execcmd( sysgetenv( "windir" ) + "\\notepad.exe", 512 + 5 ) > 0) {
    for (l_bottle_cnt = 99; l_bottle_cnt > 0; l_bottle_cnt --) {
      kputs( strform( "%d bottle(s) of beer on the wall,\r", l_bottle_cnt ));
      kputs( strform( "%d bottle(s) of beer.\r", l_bottle_cnt ));
      kputs( "Take one down, pass it around,\r" );
      kputs( strform( "%d bottle(s) of beer on the wall.\r\r", l_bottle_cnt - 1 ));
    }
  }
}```