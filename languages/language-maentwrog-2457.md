
## Language Maentwrog ##
---
- Author: Marinus Oosters
- Date: 07/25/10
- Info: http
- Score:  (3.60 in 5 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-maentwrog-2457.html
---

```*pdn *eqa *eqb *n
: putd pdn 48 + .. ;
: putnw n n 10 / =pdn pdn @putd 10 mod =pdn putd ;
: putn99 99 =n ;
: putn n -1 eq @putn99 putnw ;
: str dup .. @str ;
: eqh pop 0 ; 
: eq =eqa =eqb 1 eqa eqb - @eqh ;
: not 0 eq ;
: btl 0 101 108 116 116 111 98 32 str ;
: pl 115 .. ;
: ob 0 114 101 101 98 32 102 111 32 str ;
: otw 0 108 108 97 119 32 101 104 116 32 110 111 32 str ;
: take 0 32 101 107 97 84 str ;
: it 0 116 105 str ;
: one 0 101 110 111 str ;
: dapia 0 10 44 100 110 117 111 114 97 32 116 105 32 115 115
  97 112 32 100 110 97 32 110 119 111 100 32 str ;
: endl 0 10 44 str ;
: endp 0 10 10 46 str ;
: store 0 10 44 101 114 111 109 32 101 109 111 115 32 121 117
  98 32 100 110 97 32 101 114 111 116 115 32 101 104 116 32 
  111 116 32 111 71 str ;
: nomore 0 101 114 111 109 32 111 78 str ;
: outn dup 0 eq @nomore dup =n dup @putn btl 1 eq not @pl ;
: line3 =n n 0 eq @store n @take n 1 eq @it n 1 eq not n 0 
  eq not * @one n @dapia ;  
: verse dup outn ob otw endl dup outn ob endl dup line3 
  1 - outn ob otw endp ;
: verses dup verse 1 - dup 1 + @verses ;

99 verses```