
## Language C++ ##
---
- Author: Arion Lei
- Date: 04/20/05
- Info: n/a
- Score:  (2.95 in 21 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-c++-110.html
---

```// 99 bottles of beer, C++ template 'meta-programming' version
// By Arion Lei (philipl@cs.ust.hk)

#include <iostream.h>

template<int I>
class Loop {
public:
  static inline void f () {
    cout << I << " bottles of beer on the wall," << endl
         << I << " bottles of beer." << endl
         << "Take one down, pass it around," << endl
         << I-1 << " bottles of beer on the wall." << endl;
    Loop<I-1>::f();
  } 
};

class Loop<0> {
public:
  static inline void f () {
    cout << "Go to the store and buy some more," << endl
         << "99 bottles of beer on the wall." << endl;
  }
};


int main () {
  Loop<3>::f();
  return 0;
}```