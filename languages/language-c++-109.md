
## Language C++ ##
---
- Author: Tim Robinson
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 119 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c++-109.html
---

```// C++ version of 99 Bottles of beer
// programmer: Tim Robinson timtroyr@ionet.net
// Corrections by Johannes Tevessen

#include <iostream>
using namespace std;

int main()
    {
    int bottles = 99;
    while ( bottles > 0 )
        {
        cout << bottles << " bottle(s) of beer on the wall," << endl;
        cout << bottles << " bottle(s) of beer." << endl;
        cout << "Take one down, pass it around," << endl;
        cout << --bottles << " bottle(s) of beer on the wall." << endl;
        }
    return 0;
    }```