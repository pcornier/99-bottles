
## Language Stratus VOS command macro ##
---
- Author: Brad Nelson
- Date: 07/06/05
- Info: http
- Score:  (2.71 in 7 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-stratus-vos-command-macro-784.html
---

```&begin_parameters
  nbr_bottles  number_of_bottles:number,required,=99
&end_parameters
&label top
&display_line &nbr_bottles& bottles of beer on the wall,
&display_line &nbr_bottles& bottles of beer;
&display_line Take one down, pass it around,
&set nbr_bottles (calc &nbr_bottles& - 1)
&if &nbr_bottles& = 0
  &then &goto no_more_beer
&display_line &nbr_bottles& bottles of beer on the wall
&display_line
&goto top
&label no_more_beer
&display_line No more bottles of beer on the wall
&return
&
& Stratus VOS command macro language version of:
& 99 Bottles of Beer
& Written by: Brad Nelson
& Date: 07/05/2005
& Notes: Earlier versions of the command macro processor
&        did not allow comments at the beginning of the
&        macro, so I've placed them at the end.
&
& Usage: 99bottles.cm [initial number of bottles]
&```