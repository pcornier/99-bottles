
## Language Progress ##
---
- Author: jrs of sb stone
- Date: 07/30/08
- Info: http
- Score:  (2.80 in 5 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-progress-1830.html
---

```/*  Progress 4GL version of "99 Bottles of Beer."
    programmer: jrs of sb stone & co.  jrs@sbstone.com
    Jul/30/2008     ver 1.0
*/

/* I tried to code it as a single "display" statement; maybe tomorrow
   I'll make "pretty code" or "maintainability" my priority  :-)
*/

def var i as i no-undo.

repeat i = 99 to 0 by -1:
    display
        (if i = 0 then 'No more' else string(i)) +
        ' bottle' + (if i <> 1 then 's' else '') +
        ' of beer on the wall, ' +
        (if i = 0 then 'no more' else string(i)) +
        ' bottle' + (if i <> 1 then 's' else '') +
        ' of beer.'
        format 'x(70)' skip(0)
        (if i > 0 then
            'Take one down and pass it around, ' +
            (if i = 1 then 'no more' else string(i - 1)) +
            ' bottle' + (if i - 1 <> 1 then 's' else '') +
            ' of beer on the wall.'
        else
            'Go to the store and buy some more, 99 bottles of beer on the wall.'
        )
        format 'x(70)' skip(1)
        .
end.

/*
    Note that the final 4 verses show all the possible variations (other than
    length of the string representing the number).
    I disagree with some of the punctuation, but accepted the posted song lyric
    as "official" and attempted to duplicate it.

    Variables:
        number of bottles (0 is represented by "No more" and/or "no more")
        "new" nbr bottles (0 is represented by "No more" and/or "no more")
        "bottle" -vs- "bottles" (singular/plural)
        Final line of song

    Future enhancement: Replace "99" with validated user-input to allow
                        for shorter or longer bus rides.
*/

/*
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
*/

/* Note: Progress automatically pauses each time the screen is filled,
         properly allowing the user to sing-along (or drink along!) */```