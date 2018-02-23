
## Language Abundance ##
---
- Author: Anonymous
- Date: 04/20/05
- Info: n/a
- Score:  (2.20 in 15 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-abundance-14.html
---

```\ Abundance version of 99 bottles of beer   RG 2.0/1.0  97/03/08
                                                                
<<<DEFINE 1 99 SMALL All-Bottles DEFINE>>>

<<< Bottles ( count -- ) DUP WRITE
    CASE 0 OF DROP " No more bottles " ENDOF
         1 OF DROP " 1 bottle "        ENDOF
    OTHERS OF   .  " bottles "         ENDOF ENDCASE >>>

<<< Sing 
   WRITE                                           
   <<<RFOR All-Bottles
       I Bottles " of beer on the wall, "
       I Bottles " of beer" NL
       " Take one down and pass it around," NL
       I 1- Bottles " of beer on the wall." 2 NLS 
   RFOR>>> >>>```