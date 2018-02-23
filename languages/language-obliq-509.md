
## Language Obliq ##
---
- Author: David Eddyshaw
- Date: 04/20/05
- Info: n/a
- Score:  (2.85 in 107 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-obliq-509.html
---

```(* 99 Bottles of Beer in Obliq; by David Eddyshaw,
   david@jeddyshaw.freeserve.co.uk
   See http://www.research.compaq.com/SRC/modula-3/html/home.html *)

let bottles = proc(n)
  if    n is 0 then wr_putText(wr_stdout, "No more bottles");
  elsif n is 1 then wr_putText(wr_stdout, "1 bottle");
  else              wr_putText(wr_stdout, fmt_int(n) & " bottles");
  end;
end;

var n = 99;
loop  
  if n is 0 then exit end;
  bottles(n);      wr_putText(wr_stdout, " of beer on the wall,\n");
  bottles(n);      wr_putText(wr_stdout, " of beer.\n");
  wr_putText(wr_stdout,"Take one down and pass it around;\n");
  bottles(n - 1);  wr_putText(wr_stdout, " of beer on the wall.\n\n");
  n := n - 1;
end;```