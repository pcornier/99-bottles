
## Language Curry ##
---
- Author: Mike Gogulski
- Date: 05/17/05
- Info: http
- Score:  (2.79 in 112 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-curry-651.html
---

```-- Curry version of 99 bottles
-- By Mike Gogulski <mike@gogulski.com> 21 March 2005
-- Curry compiler online:
--   http://www-ps.informatik.uni-kiel.de/~mh/pakcs/curryinput_c2p.cgi 
-- use "binge" as your main goal
 
binge = loop 99 0 where
  loop i j =
    if i > j then drink i >> loop (i - 1) j else done
  drink n =
    putStr (show n) >> putStr " bottle(s) of beer on the wall,\n" >>
    putStr (show n) >> putStr " bottle(s) of beer!\n" >>
    putStr "Take one down, pass it around,\n" >>
    putStr (show (n - 1)) >> putStr " bottle(s) of beer on the wall!\n"```