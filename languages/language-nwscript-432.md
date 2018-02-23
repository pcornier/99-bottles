
## Language NWScript ##
---
- Author: Urpo Lankinen
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 25 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nwscript-432.html
---

```/*
    99 Bottles of Beer on the Wall
    ==============================
    in NWScript (the scripting language used in Bioware's 2002 CRPG
    "Neverwinter Nights").

    Written by Urpo Lankinen <wwwwolf@iki.fi>
    Home page: http://www.iki.fi/wwwwolf/

    This script is supposed to be put to a creature's OnConversation
    property. Just import this script to a module (I used the name
    "sing_99bottles"), make a creature (preferrably a non-hostile one),
    Properties->Scripts->OnCoversation to sing_99bottles, and tadah!

    In tradition of "the beer list", this tries to be (somewhat) idiomatic
    example of NWScript. Since I'm but a beginner in the exciting field
    of NWScripting, "Idiomatic" in my mind means the fact that the creature
    behaves somewhat predictably and the script also makes it do stuff.
    So:
      - No "normal" conversation is fired up - the creature starts
        singing and shouts it as one-liners. *Loudly*.
      - The script uses Action*(). This means that it just floods the
        creature's action queue with tons of stuff to do (sing, empty the
        beer bottle, and wait for a while), and exits -
        the game takes rest of the load. If the player clicks on the creature
        again, the action queue is cleared and the creature starts all over
        again!
      - The creature is animated (uses the drinking animation, of course,
        what else!?)
      - There's also an example of a creature-based check in the end.
        (Dearest fantasy dwarves: Apologies in advance for a
        racial stereotype =)

    The idea was quickly glanced from nw_c2_default4
    (the default chat script). No warranty. =)

    WARNING: As demonstrated by the example module, using this script with
    many many simultaneous singers can be catastrophic and lead to game
    crash. Admittedly, NWN wasn't built with this sort of silliness in
    mind =)
    This example just floods ~300 items in the object's event queue,
    which means the game may not be able to keep up with several singers =(
    It will work fine with just one annoying drunkard or a few of them!

*/

#include "NW_I0_GENERIC"

void main()
{
    int count;

    if (GetListenPatternNumber() == -1 && GetCommandable(OBJECT_SELF))
    {
        ClearAllActions();

        SpeakString("Hey hey hey... *hic* Let me sing you a little song...");
        ActionWait(1.5);

        // This will flood the action queue... =(
        for(count = 99; count > 0; count--) {
            ActionSpeakString(IntToString(count) +
                              " barrels of ale on the wall, " +
                              IntToString(count) +
                              " barrels of ale! " +
                              "Open one up, and fill all tankards, " +
                              (((count-1) == 0) ? "no more" :
                                                  IntToString(count-1)) +
                              " barrels of ale on the wall!");
            ActionPlayAnimation(ANIMATION_FIREFORGET_DRINK);
            ActionWait(1.5);
        }

        // Apologies for a racial stereotype... =)
        if(GetRacialType(OBJECT_SELF) == RACIAL_TYPE_DWARF) {
            ActionSpeakString("NO MORE BARRELS OF ALE ON THE " +
                              "WALL? BARTEDNDENEEEER!!! *hic* GET ME "+
                              "MORE BHEER OR I'LL CRACK SOME SKULLS!");
        } else {
            ActionSpeakString("No more barrels of ale on the wall, "+
                              "No more barrels of ale, "+
                              "Innkeeper just went and bought a lot more, "+
                              "99 barrels of ale on the wall!");
        }

    }
}```