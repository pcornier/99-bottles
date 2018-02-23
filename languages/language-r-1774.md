
## Language R ##
---
- Author: David Dailey
- Date: 05/03/08
- Info: http
- Score:  (3.00 in 50 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-r-1774.html
---

```# 99 bottles of beer on the wall
# For R-2.6.1 and later (possibly some earlier as well)
# D. Dailey, 3 May 2008 <compass98155 .. at .. gmail.com>

# The strategy: Build a data frame with the lyrics, then 

# First: Individual phrases
bottles <- c( rep( 'bottles', 98), 'bottle', 'bottles' )
beerFrame <- data.frame(
  FirstPhrase = sprintf( '%s %s of beer on the wall', c( 99:1, "No more" ), bottles ),
  SecondPhrase = sprintf( '%s %s of beer', c( 99:1, "no more" ), bottles ),
  ThirdPhrase = sprintf( 'Take one down and pass it around'),
  LastPhrase = sprintf( '%s bottles of beer on the wall', c( 98:1, "no more", 99 ) ),
  stringsAsFactors=FALSE )

# Special cases for phrases
beerFrame[ nrow( beerFrame ) - 2, 'LastPhrase' ]  <- '1 bottle of beer on the wall'
beerFrame[ nrow( beerFrame ),     'ThirdPhrase' ] <- 'Go to the store and buy some more'

# Second: Combine phrases into lines
beerFrame[, 'TopLine']    <- with( beerFrame, sprintf( '%s, %s.', FirstPhrase, SecondPhrase ) )
beerFrame[, 'BottomLine'] <- with( beerFrame, sprintf( '%s, %s.', ThirdPhrase, LastPhrase ) )

# Third: Combine lines into stanzas
beerFrame[, 'Stanza' ] <- with( beerFrame, sprintf( '%s\n%s\n', TopLine, BottomLine ) )

# Now display it all (each stanza already ends with \n)
cat( beerFrame[, 'Stanza'], sep='\n' )```