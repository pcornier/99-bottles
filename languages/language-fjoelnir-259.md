
## Language Fjoelnir ##
---
- Author: Dagur P�ll Ammendrup
- Date: 04/20/05
- Info: n/a
- Score:  (2.98 in 41 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-fjoelnir-259.html
---

```Hi, here's 99 bottles in the Fj�lnir (Fjoelnir) programming language. 
Fj�lnir is an Icelandi programming language from the early/mid 80's and 
is a list-processing language similar to LISP and LOGO. 

;;bottles.fjo
;;Dagur P�ll Ammendrup <dagurp at heimsnet dot is>
;;Written on January 10th 2004

"bottles" < main
{
    main ->
        stef(;)
        sta�v�r i,b
        stofn
            fyrir( i := 100; i > 1; i := i-1) lykkja
                bottles(;i-1),
                skrifastreng(;" on the wall, "),
                bottles(;i-1),
                skrifastreng(;",\ntake one down, pass it around, \n"),
                bottles(;i-2),
                skrifastreng(;" on the wall.\n"),
            lykkjulok,
        stofnlok
}
*
{
    bottles ->
        stef(;n)
        stofn
            val n �r
            kostur 0 ��
                skrifastreng(;"no more bottles"),
            kostur 1 ��
                skrifastreng(;"1 bottle of beer"),
            annars
                skrifa(;n),
                skrifastreng(;" bottles of beer"),
            vallok
        stofnlok
}
*
"GRUNNUR"
;```