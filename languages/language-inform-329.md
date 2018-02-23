
## Language Inform ##
---
- Author: Torbj�rn Andersson
- Date: 04/20/05
- Info: http
- Score:  (2.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-inform-329.html
---

```Inform 6 is version 6 of a compiler meant for writing adventure games 
for the  so-called "Z-machine" created by Infocom.  It seems to be 
more object oriented than the original sent to me. 
<a href=http://www.doggysoft.co.uk/inform>Click here</a> for more information.

! -----------------------------------------------------------------------------
! 99 Bottles of Beer on the Wall, Inform 6 version.
!
! Torbj�rn Andersson, (d91tan@Student.DoCS.UU.SE), August 1997
! -----------------------------------------------------------------------------

Constant NUM_BOTTLES	99;

Object wall
  private
	bottles_left,
  with	init [ n;
	    self.bottles_left = n;
	],
	bottle_name [;
	    if (self.bottles_left == 1)
		return "bottle";

	    return "bottles";
	],
	bottle_count [;
	    return self.bottles_left;
	],
	take_one_down [;
	    self.bottles_left--;
	];

[ Main;
    wall.init(NUM_BOTTLES);

    while (wall.bottle_count() > 0) {
	print
	    "^",
	    wall.bottle_count(), " ", (string) wall.bottle_name(),
	    " of beer on the wall,^  ",
	    wall.bottle_count(), " ", (string) wall.bottle_name(),
	    " of beer^You take one down and pass it around^  ";

	wall.take_one_down();

	if (wall.bottle_count() == 0)
	    print "No more";
	else
	    print wall.bottle_count();

	print " ", (string) wall.bottle_name(), " of beer on the wall.^";
    }
];```