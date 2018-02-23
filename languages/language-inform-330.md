
## Language Inform ##
---
- Author: Torbjorn Andersson
- Date: 04/20/05
- Info: http
- Score:  (2.72 in 111 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-inform-330.html
---

```Inform is a compiler meant for writing adventure games for the 
so-called "Z-machine" created by Infocom. 
<a href=http://www.doggysoft.co.uk/inform>Click here</a> for more information.

! ---------------------------------------------------------------------------
!  99 Bottles of Beer on the Wall, Inform version [smaller]
!       _
!  Torbjorn Andersson, (d91tan@Minsk.DoCS.UU.SE) December 1995
! ---------------------------------------------------------------------------

! For technical reasons, the first function is not allowed to use local
! variables.

Global i = 99;

[ Main;
    print "^^^^";

    while (i > 0) {
        new_line;
        print i, (char) ' ', (PluralBottle) i, " of beer on the wall,^";
        print (Chorus) i--;
        print "You take one down & pass it around^";
        print (Chorus) i;
    }

    @read_char 1 i;
    quit;
];

[ PluralBottle n;
    if (n == 1)
        print "bottle";
    else
        print "bottles";
];

[ Chorus n;
    print "  ";

    if (n == 0)
        print "No more";
    else
        print n;

    print_ret (char) ' ', (PluralBottle) n, " of beer";
];

end;```