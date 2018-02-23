
## Language YCP ##
---
- Author: Arvin Schnell
- Date: 05/21/06
- Info: n/a
- Score:  (3.35 in 26 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-ycp-1160.html
---

```/*
 *  Author: Arvin Schnell
 *
 *  Tested on SuSE Linux 10.1, run:
 *  /usr/lib/YaST2/bin/y2base beer.ycp qt
 */

{
    textdomain "beer";

    define string line1 (integer beers)
    {
	switch (beers)
	{
	    case 0:
		return _("No more bottles of beer on the wall, no more bottles of beer.");

	    default:
		return sformat (_("%1 bottle of beer on the wall, %1 bottle of beer.",
				  "%1 bottles of beer on the wall, %1 bottles of beer.",
				  beers), beers);
	}
    }

    define string line2 (integer beers)
    {
	switch (beers)
	{
	    case 0:
		return _("Go to the store and buy some more, 99 bottles of beer on the wall.");

	    case 1:
		return _("Take one down and pass it around, no more bottles of beer on the wall.");

	    default:
		return sformat (_("Take one down and pass it around, %1 bottle of beer on the wall.",
				  "Take one down and pass it around, %1 bottles of beer on the wall.",
				  beers - 1), beers - 1);
	}
    }

    string lyrics = "";
    integer beers = 99;
    while (beers >= 0)
    {
	lyrics = lyrics + "<p>" + line1 (beers) + "<br>" + line2 (beers) + "</p>";
	beers = beers - 1;
    }

    term dialog = `HBox (
			 `VSpacing (30),
			 `VBox (
				`HSpacing (60),
				`RichText (lyrics),
				`PushButton (`id (`ok), "I Agree")
				)
			 );

    UI::OpenDialog (dialog);
    UI::SetFocus (`id (`ok));
    UI::UserInput ();
    UI::CloseDialog ();
}```