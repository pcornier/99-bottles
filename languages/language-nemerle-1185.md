
## Language Nemerle ##
---
- Author: Vermicious Knid
- Date: 06/20/06
- Info: http
- Score:  (3.01 in 160 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-nemerle-1185.html
---

```#pragma indent
using System

def capitalize = str => Char.ToUpper(str[0]).ToString() + str.Substring(1);

def beers(n)
  | 0 => "no more bottles of beer"
  | 1 => "1 more bottle of beer"
  | _ => $"$n bottles of beer"

def onTheWall = n => $"$(beers(n)) on the wall, $(beers(n)).\n"

def passAround(n)
  | 0 => $"Go to the store and buy some more, $(beers(99)) on the wall.\n"
  | _ => $"Take one down and pass it around, $(beers(n-1)) on the wall.\n"

$[99, 98 .. 0].Iter(n => Console.WriteLine(capitalize(onTheWall(n)) + passAround(n)))```