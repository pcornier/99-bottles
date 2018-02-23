
## Language Inform 7 ##
---
- Author: David Short
- Date: 08/07/08
- Info: http
- Score:  (3.00 in 28 votes)
- URL: https
- Original URL: http://www.99-bottles-of-beer.net/language-inform-7-1841.html
---

```"Ninety-nine bottles of beer" by David Short

The wall is a room.  A bottle is a kind of thing.  In the wall are 99 bottles.

To say how many:
  say "[if no bottle is in the wall]no[otherwise][the number of bottles in the wall in words]".
To say how many in sentence case:
  say "[how many]" in sentence case.

To sing the song:
  if a bottle is in the wall
  begin;
    say "[How many in sentence case] bottle[s] of beer on the wall, [how many] bottle[s] of beer.
";
    let the next one be a random bottle in the wall; silently try taking the next one;
    say "Take one down and pass it round, [how many] bottles of beer on the wall.[paragraph
break]";
    sing the song;
  otherwise;
    say "No more bottles of beer on the wall, no more bottles of beer.";
    say "Go to the store and buy some more, ninety-nine bottles of beer on the wall!";
    end the game saying "end of the song";
  end if.

When play begins: sing the song.  Use no scoring.```