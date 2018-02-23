
## Language TINCL ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-tincl-452.html
---

```%: 99 Bottles of Beer in TINCL.  '98 Ben Olmstead.

   TINCL is meant for writing CGI programs, and, though it is possible
   to write command-line utilities in TINCL, this version *is* meant to
   be run on the web.  You can check out a sample form at
   <http://www.students.mines.edu/students/b/bolmstea/beer.html> :%

%.config.%

get-input, post-input

%{
#include <stdlib.h>
int beer;
}%

%.fragments.%
<p>
%#beer#% bottle%{ if ( beer != 1 ) { }%s%{ } }% of beer on the wall,<br>
%#beer#% bottle%{ if ( beer != 1 ) { }%s%{ } }% of beer,<br>
Take one down and pass it around,<br>
%{ if ( !--beer ) { }%No more%{ } else { }%%#beer#%%{ } }% bottle%{ if ( beer != 1 ) { }%s%{ } }% of
beer on the wall.
</p>

%.html.%
%{  set_var( &beer, 0, 1000, 99, get_value( "beer" ) );  }%
<html><head><title>%#beer#% Bottles of Beer on the Wall</title></head>
<body>
%{ while( beer > 0 ) { %(fragment)% } }%
</body></html>```