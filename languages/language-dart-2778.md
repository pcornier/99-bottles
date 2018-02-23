
## Language Dart ##
---
- Author: Ville Saalo
- Date: 10/15/11
- Info: http
- Score:  (2.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-dart-2778.html
---

```class BeerWall {
  int _beers;
  String _container;

  BeerWall.withBeers(this._beers, [this._container = "bottle"]);

  int get beers() => _beers;  
  String get container() => _container;  

  void takeBeer() {
    if (_beers > 0) --_beers;
    else throw "Go to the store and buy some more";
  }

  void set beers(int amount) {
    if (amount == null) _beers = 0;
    else if (amount < 0) throw "Cannot have a negative amount of ${container}s!";
    _beers = amount;
  }
}

class Singer {  
  BeerWall _wall;

  sing() {
    _wall = new BeerWall.withBeers(99);

    try {
      while (true) {
        print('${_singAmount(true)} of beer on the wall, ${_singAmount()} of beer.');
	_wall.takeBeer();
        print('Take one down and pass it around, ${_singAmount()} of beer on the wall.\n');
      }
    } catch ( var beerException ) {
      _wall.beers = 99;
      print('$beerException, ${_singAmount()} of beer on the wall.');
    }

  }

  String _singAmount([bool startWithUppercase = false]) {
    int amount = _wall.beers;
    if (amount > 1) return "$amount ${_wall.container}s";
    else if (amount == 1) return "$amount ${_wall.container}";
    else if (startWithUppercase) return "No more ${_wall.container}s";
    else return "no more ${_wall.container}s";
  }
}

main() {
  var singer = new Singer();
  singer.sing();
}```