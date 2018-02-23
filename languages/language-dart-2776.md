
## Language Dart ##
---
- Author: houmei
- Date: 10/13/11
- Info: http
- Score:  (2.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dart-2776.html
---

```class Bottle {
  var b1 = 'bottle' ;
  var b2 = 'bottles' ;

  number(n) {
    return (n==1)? b1 : b2 ;
  }
}


class BoB {

  number(n,lq) {
    var bottle = new Bottle() ;
    int nn = n - 1 ;
    String bn = bottle.number(n) ;
    String bnn = bottle.number(nn) ;
    switch(n) {
    case 0:
      print('No more $bn of $lq on the wall, no more $bn of $lq.') ;
      break ;
    case 1:
      print('1 $bn of $lq on the wall, 1 $bn of $lq.');
      break ;
    default:
      print('$n $bn of $lq on the wall, $n $bn of $lq.');
      print('Take one down and pass it around, $nn $bnn of $lq on the wall.');
    }
  }
}


main() {
  var bob = new BoB() ;
  for (int b = 99; b >= 0; b--) {
    bob.number(b,'beer');
  }
}```