
## Language Nepal ##
---
- Author: Karl-Heinz Erhard
- Date: 11/02/10
- Info: http
- Score:  (3.00 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nepal-2530.html
---

```proc sing(int n; int :$ i; code c, c0) { # a user-defined control structure
  for(i,n..1) c.exec(); 
  c0.exec();
}

func bottles(int n)(str s) {
  switch {
    case(n==0) { s.out(nm," ",Bb) }
    case(n==1) { s.out(n," ",bb) }
    case { s.out(n," ",Bb) }
  }
}

func capital(str s)(str t) {
  t = s.proc("","set",0,s.get(0).proc("","toupper")); # generic procedure calls
}

str b("bottle"), ob(" of beer"), B(b,"s"), bb(b,ob), Bb(B,ob),
    otw("on the wall"), nm("no more");
int j, n(99);

sing(n,j) { soutl(" ",bottles(j),otw+",",
                      bottles(j)+".\nTake one down and pass it around,",
                      bottles(j-1),otw+".\n") }
          { soutl(" ",capital(bottles(0)),otw+",",
                      bottles(0)+".\nGo to the store and buy some more,",
                      bottles(n),otw+".\n") }```