
## Language C++ ##
---
- Author: Tim Robinson
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 20 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c++-111.html
---

```// C++ version of 99 Bottles of Beer, object oriented paradigm
// programmer: Tim Robinson timtroyr@ionet.net
#include <fstream.h>

enum Bottle { BeerBottle };

class Shelf {
    unsigned BottlesLeft;
public:
    Shelf( unsigned bottlesbought )
        : BottlesLeft( bottlesbought )
        {}
    void TakeOneDown()
        {
        if (!BottlesLeft)
            throw BeerBottle;
        BottlesLeft--;
        }
    operator int () { return BottlesLeft; }
    };

int main( int, char ** )
    {
    Shelf Beer(99);
    try {
        for (;;) {
            char *plural = (int)Beer !=1 ? "s" : "";
            cout << (int)Beer << " bottle" << plural
                 << " of beer on the wall," << endl;
            cout << (int)Beer << " bottle" << plural
                 << " of beer," << endl;
            Beer.TakeOneDown();
            cout << "Take one down, pass it around," << endl;
            plural = (int)Beer !=1 ? "s":"";
            cout << (int)Beer << " bottle" << plural
                 << " of beer on the wall." << endl;
            }
        }
    catch ( Bottle ) {
        cout << "Go to the store and buy some more," << endl;
        cout << "99 bottles of beer on the wall." << endl;
        }
    return 0;
    }```