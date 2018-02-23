
## Language Dart ##
---
- Author: Jimin Park
- Date: 10/12/11
- Info: http
- Score:  (3.50 in 2 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-dart-2775.html
---

```class Bottle{
  int _amount;
  String _kind,_place;
  get amount() => _amount;
  set amount(int amt){
    if(amt<0){
      _amount = 99;
      throw "Go to store and buy some more, ${toStr(true)}.";
    }
    if(amt>99) throw "I'm drunk.";
    _amount = amt;
  }
  get place() => _place;
  set place(String plc){
    _place = plc;
  }
  get kind() => _kind;
  set kind(String knd){
    _kind = knd;
  }
  Bottle(amt,knd,plc){
    amount = amt;
    kind = knd;
    place = plc;
  }
  String toStr(bool long){
    String plural = amount==1?'':'s';
    String append = long?" on $place":'';
    if(amount>0) return "$amount bottle$plural of $kind$append";
    else return "No bottles of $kind$append";
  }
}
main(){
  Bottle beer = new Bottle(99,'beer','the wall');
  print("${beer.toStr(true)}, ${beer.toStr(false)}.");
  while(beer.amount-->0){
    print("Take one down and pass it around, ${beer.toStr(true)}.");
    print("${beer.toStr(true)}, ${beer.toStr(false)}.");
  }
}```