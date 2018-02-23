
## Language SETL ##
---
- Author: Arion Lei
- Date: 04/20/05
- Info: http
- Score:  (2.90 in 10 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-setl-589.html
---

```$ SETL version
$ written by Arion Lei (philipl@cs.ust.hk)
beer := {1,2..99};
(until beer={})
  print(#beer, " bottles of beer on the wall,");
  print(#beer, " bottles of beer.  Take one down, pass it around,");
  $ take an arbitrary one down
  beer less := arb beer;
  if beer/={} then
    print(#beer, " bottles of beer on the wall.");
  end if beer/={};
end until;
print("No more bottles of beer on the wall, no more bottles of beer.");
print("Go to the store and buy some more... 99 bottles of beer");```