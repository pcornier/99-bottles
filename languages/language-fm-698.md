
## Language FM ##
---
- Author: Stefan Resch
- Date: 05/28/05
- Info: n/a
- Score:  (2.89 in 9 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fm-698.html
---

```startcode {
  # Ninety-Nine Bottles of Beer Song in FM-Skript
  # 
  # http://superschaf.com/
  # Stefan Resch, 2003-12-07;

  for[99,1,-1,i;
    print_txt ( *i* );
    print_txt ( " bottle(s) of beer on the wall," );
    print_txt ( *i* );
    print_txt ( " bottle(s) of beer." );
    ?tmp = *i* - 1;
    print_txt ( "Take one down, pass it around," );
    print_txt ( ?tmp );
    print_txt ( " bottle(s) of beer on the wall." );
  i];

}```