
## Language Doc1 PCE ##
---
- Author: Donavan Hoepcke
- Date: 04/20/05
- Info: http
- Score:  (3.00 in 6 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-doc1-pce-216.html
---

```**********************************************************************
*  
*  99 Bottles of Beer on the wall
*
*  Uses Group 1 Software PCE (Post Composition Engine) Language
*  www.g1.com
*
*  By: Donavan Hoepcke www.computerdudes.nu
*
**********************************************************************
declare <done>;
declare <num-bottles>;
declare <num-bottle-str>;
declare <zero>;
declare <one>;

  // Procedures
declare procedure <main> is main;
**********************************************************************
begin procedure <main>;

  let <zero> = 0;
  let <one> = 1;
  let <done> = false;
  let <num-bottles> = 99;

  let <num-bottle-str> = string <num-bottles> 0 zero;

  begin loop;

    trace "@@<num-bottle-str> bottles of beer on the wall";
    trace "@@<num-bottle-str> bottles of beer";
    trace "Take one down, pass it around";

    let <num-bottles> = <num-bottles> - <one>;
    let <num-bottle-str> = string <num-bottles> 0 zero;

    let <done> = <num-bottles> eq <one>;
      exit loop when <done>;

    trace "@@<num-bottle-str> bottles of beer on the wall";
   
  end loop;

  trace "@@<num-bottle-str> bottle of beer on the wall";
  trace "@@<num-bottle-str> bottle of beer";
  trace "Take one down, pass it around";
  trace "Time to buy some more beer for the wall";

end procedure; // <main>```