
## Language Roco ##
---
- Author: Marinus Oosters
- Date: 04/24/10
- Info: http
- Score:  (3.67 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-roco-2372.html
---

```co bottles;
co lyrics;

co nomore {
  cout 78  cout 111
  cout 32  cout 109
  cout 111 cout 114
  cout 101
  yi bottles
}

co bottles {
  eq [1] [0] 0
  neq [2] [0] 0
  if [2] iout [0]
  if [1] yi nomore
  cout 32  cout 98
  cout 111 cout 116
  cout 116 cout 108 
  cout 101
  neq [1] [0] 1
  if [1] cout 115
  yi lyrics
}

co ofbeer {
  cout 32  cout 111
  cout 102 cout 32
  cout 98  cout 101
  cout 101 cout 114
  yi lyrics
}

co onthewall {
  cout 32  cout 111
  cout 110 cout 32
  cout 116 cout 104
  cout 101 cout 32
  cout 119 cout 97
  cout 108 cout 108
  yi lyrics
}

co takeonedown {
  cout 84  cout 97
  cout 107 cout 101
  cout 32  cout 111
  cout 110 cout 101
  cout 32  cout 100
  cout 111 cout 119
  cout 110 cout 32
  cout 97  cout 110
  cout 100 cout 32
  cout 112 cout 97
  cout 115 cout 115 
  cout 32  cout 105
  cout 116 cout 32
  cout 97  cout 114
  cout 111 cout 117
  cout 110 cout 100
  cout 10
  yi lyrics
}

co lyrics {
  yi bottles
  yi ofbeer
  yi onthewall
  cout 10

  yi bottles 
  yi ofbeer 
  cout 10

  yi takeonedown
 
  dec [0]
 
  yi bottles
  yi ofbeer
  yi onthewall
  cout 10
  cout 10
  
  eq [1] [0] 0  
  if [1] yi ro
}

set [0] 99
yi lyrics
ac```