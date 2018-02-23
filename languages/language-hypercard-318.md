
## Language HyperCard ##
---
- Author: Eric Carlson
- Date: 04/20/05
- Info: n/a
- Score:  (3.00 in 27 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-hypercard-318.html
---

```The scripting language for Apple's HyperCard.

--
-- a version of the "99 bottles of beer" song in HyperTalk
-- by eric carlson: eric@bungdabba.com
--
on BeerSong99
  BottlesOfBeer 99
end BeerSong99


--
-- do something with a lyric from the beer song.  this handler adds 
it to
--  a field on the current card
on OutputBeerLyric beerString
  if ( beerString is "<reset>" ) then
    put empty into cd fld "beer song"
  else
    put beerString & return after cd fld "beer song"
  end if
end OutputBeerLyric


--
-- sing the beer song with the specified number of bottles
on BottlesOfBeer bottleCount
  put bottleCount into initialCount
  OutputBeerLyric "<reset>"
  
  repeat until ( bottleCount < 1 )
    set cursor to busy     -- let 'em know this might take a while
    put BottleString(bottleCount) into currentString
    OutputBeerLyric currentString && "of beer on the wall,"
    OutputBeerLyric currentString && "of beer."
    OutputBeerLyric "Take one down, and pass it around,"
    
    subtract one from bottleCount
    OutputBeerLyric BottleString(bottleCount) && "of beer on the 
wall." & return
  end repeat
  
  OutputBeerLyric "Go to the store and buy some more..."
  OutputBeerLyric initialCount & " bottles of beer on the wall."
end BottlesOfBeer


--
-- return the bottle string appropriate for the current count
function BottleString bottleCount
  if ( bottleCount is 1 ) then
    return "1 bottle"
  else if ( bottleCount is 0 ) then
    return "no more bottles"
  else
    return bottleCount && "bottles"
  end if
end BottleString```