
## Language JavaScript ##
---
- Author: Christof Donat
- Date: 03/07/06
- Info: n/a
- Score:  (3.00 in 58 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-javascript-1079.html
---

```function song() {
        bottlesOfBeer = function(i) { return i+' bottles of beer'; }
        bottlesOfBeerOnTheWall = function(i) { return this.bottlesOfBeer(i)+' on the wall'; }
        takeOneDown = function() { return 'Take one down and pass it around, '; }

        createVerse= function(first,second) {
                var rval = document.createElement('p');
                rval.appendChild(document.createTextNode(first));
                rval.appendChild(document.createElement('br'));
                rval.appendChild(document.createTextNode(second));
                return rval;
        }
        getNormalVerseFunction = function(i) {
                return function() {
                        return createVerse(
                                bottlesOfBeerOnTheWall(i)+', '+bottlesOfBeer(i),
                                takeOneDown()+bottlesOfBeerOnTheWall(i-1)+'.'
                        );
                }
        }

        verse = new Array();

        for( var i = 3; i < 100; i++ )
                verse[i] = getNormalVerseFunction(i);
        verse[2] = function() {
                return createVerse(
                        bottlesOfBeerOnTheWall(2)+', '+bottlesOfBeer(2),
                        takeOneDown()+'1 bottle of beer.'
                );
        }
        verse[1] = function() {
                return createVerse(
                        '1 bottle of beer on the wall, 1 bottle of beer.',
                        takeOneDown()+bottlesOfBeerOnTheWall('no more')+'.'
                );
        }
        verse[0] = function() {
                return createVerse(
                        bottlesOfBeerOnTheWall('No more')+', '+bottlesOfBeer('no more'),
                        'Go to the store and buy some more, '+bottlesOfBeerOnTheWall(99)+'.'
                );
        }

        this.getDom = function() {
                var rval = document.createElement('div');
                for( var i = 99; i >= 0 ; i-- )
                        rval.appendChild(verse[i]());
                return rval;
        }
}

document.getElementsByTagName('body')[0].appendChild(new song().getDom());```